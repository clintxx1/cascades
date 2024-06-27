"use client";
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
import { Info } from "lucide-react";

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
    <Table>
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
            <TableCell>{form.title}</TableCell>
            <TableCell>{form.message}</TableCell>
            <TableCell>{form.date}</TableCell>
            <TableCell>{form.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
