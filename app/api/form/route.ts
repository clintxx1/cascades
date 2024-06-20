import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    let sortingOrder: Prisma.SortOrder = "desc";
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get("sort");
    if (sort) {
      sortingOrder = "asc";
    }
    const data = await prisma.form.findMany({
      orderBy: {
        createdAt: sortingOrder,
      },
    });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
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
