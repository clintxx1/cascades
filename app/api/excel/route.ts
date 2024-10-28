import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { Form as PrismaForm } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const formData = body.data as PrismaForm[];

    const data = formData.map(
      ({
        entry_id: Entry,
        form_name: Form,
        categories: Category,
        name: Name,
        from_email: Email,
        contact: Contact,
        message: Message,
        date: Date,
        time: Time,
      }) => ({
        Entry,
        Form,
        Category,
        Name,
        Email,
        Contact,
        Message,
        Date,
        Time,
      })
    );

    // Create a new workbook and add a worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // Define columns
    if (data.length > 0) {
      const columns = Object.keys(data[0]).map((key) => ({
        header: key,
        key: key,
        width: 20,
      }));
      worksheet.columns = columns;
    }

    // Add rows
    data.forEach((item: any) => {
      worksheet.addRow(item);
    });

    // Adjust column widths
    worksheet.columns.forEach((column) => {
      if (column) {
        if (column.header === "Message") {
          // Set a fixed width of 70 for the "Message" column
          column.width = 70;
        } else {
          // Dynamically adjust width for other columns
          let maxLength = 10; // Set a minimum width for each column
          column.eachCell?.({ includeEmpty: true }, (cell) => {
            if (cell.value) {
              const cellLength = cell.value.toString().length;
              maxLength = Math.max(maxLength, cellLength);
            }
          });
          column.width = maxLength + 2; // Adding padding for readability
        }
      }
    });

    // Write to buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // Set headers and send the file
    const response = new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="cascades-inquiry.xlsx"',
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
