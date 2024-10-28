"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ADMIN_FORM_TABLE_HEADER } from "@/lib/constants";
import { Form } from "@prisma/client";
import { ChevronDown, ChevronRight, Info } from "lucide-react";

export default function TableData({ data }: { data: Form[] }) {
  if (!data.length) {
    return (
      <div className="flex items-center justify-center gap-2">
        No data found
        <Info />
      </div>
    );
  }

  return (
    <div>
      <Table className="hidden lg:block">
        <TableHeader>
          <TableRow>
            {ADMIN_FORM_TABLE_HEADER.map((title, index) => (
              <TableHead key={index}>{title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((form, index) => (
            <TableRow key={index}>
              <TableCell>{form.entry_id}</TableCell>
              <TableCell>{form.form_name}</TableCell>
              <TableCell>{form.categories}</TableCell>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.from_email}</TableCell>
              <TableCell>{form.contact}</TableCell>
              <TableCell>{form.message}</TableCell>
              <TableCell>{form.date}</TableCell>
              <TableCell>{form.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="block lg:hidden rounded-lg border border-gray-400 p-5 space-y-5">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">Inquiries</p>
          <p className="text-sm">{`You have ${data.length} form submission(s).`}</p>
        </div>
        <>
          {data.map((form) => (
            <div
              key={form.id}
              className={`border-t border-gray-400 p-2 w-full flex flex-col gap-3`}
            >
              <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-3">
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Name:</p>
                  <p>{form.name}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Contact:</p>
                  <p>{form.contact}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Form:</p>
                  <p>{form.form_name}</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-3">
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Email:</p>
                  <p>{form.from_email}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Category:</p>
                  <p>{form.categories}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Entry No:</p>
                  <p>{form.entry_id}</p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-3">
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Date:</p>
                  <p>{form.date}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="font-semibold">Time:</p>
                  <p>{form.time}</p>
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value={"message"} key={form.id}>
                  <AccordionTrigger
                    className={`flex items-center font-normal lg:text-lg text-base data-[state=open]:no-underline hover:font-normal [&[data-state=open]>svg]:rotate-90`}
                  >
                    <p className="font-semibold">Message</p>
                    <ChevronRight className="h-6 w-6 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify">{form.message}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
