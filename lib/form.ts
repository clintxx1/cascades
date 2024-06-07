"use server";
import { Form } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const submitFormDetails = async (data: Form) => {
  try {
    await prisma.form.create({ data });
    revalidatePath("/contact");
  } catch (error) {
    console.log(error);
  }
};

export const fetchFormList = async () => {
  try {
    return (await prisma.form.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })) as Form[];
  } catch (error) {
    console.log(error);
    return error;
  }
};
