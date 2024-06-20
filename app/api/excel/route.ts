import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { Form as PrismaForm } from "@prisma/client";

export const config = {
  api: {
    bodyParser: true,
  },
};

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
        title: Title,
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
        Title,
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
