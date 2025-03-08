import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Sorting
    const sortingOrder: Prisma.SortOrder =
      (searchParams.get("sort") as Prisma.SortOrder) || "desc";

    // Search and filtering
    const search = searchParams.get("search") || "";
    const branch = searchParams.get("branch") || undefined;

    // Pagination
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("limit") || "1000");
    const skip = (page - 1) * pageSize;

    // Build where condition
    const whereCondition: any = {
      name: {
        contains: search,
        mode: "insensitive",
      },
    };

    // Add branch filter if provided
    if (branch) {
      whereCondition.branch = branch;
    }

    // Get paginated data
    const data = await prisma.form.findMany({
      where: whereCondition,
      orderBy: {
        createdAt: sortingOrder,
      },
      skip,
      take: pageSize,
    });

    // Get total count for pagination metadata
    const totalCount = await prisma.form.count({
      where: whereCondition,
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    return NextResponse.json(
      {
        data,
        pagination: {
          total: totalCount,
          pageSize,
          currentPage: page,
          totalPages,
          hasNext: page < totalPages,
          hasPrevious: page > 1,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching form data:", error);
    return NextResponse.json(
      { message: "Error fetching form" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await prisma.form.create({ data });
    revalidatePath("/contact");
    return NextResponse.json(
      { message: "Form created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating data" },
      { status: 500 }
    );
  }
}
