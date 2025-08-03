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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ADMIN_FORM_TABLE_HEADER } from "@/lib/constants";
import { Form } from "@prisma/client";
import { ChevronRight, Info } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";

export default function TableData({ data }: { data: Form[] }) {
  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    startIndex,
    endIndex,
    totalItems,
    itemsPerPage,
    setItemsPerPage,
  } = usePagination({ data, defaultItemsPerPage: 10 });

  if (!data.length) {
    return (
      <div className="flex items-center justify-center gap-2">
        No data found
        <Info />
      </div>
    );
  }

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="space-y-4">
      {/* Items per page selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>
            Showing {startIndex + 1} to {endIndex} of {totalItems} entries
          </span>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <Table className="hidden lg:block">
        <TableHeader>
          <TableRow>
            {ADMIN_FORM_TABLE_HEADER.map((title, index) => (
              <TableHead key={index}>{title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((form, index) => (
            <TableRow key={index}>
              <TableCell>{form.entry_id}</TableCell>
              <TableCell>{form.form_name}</TableCell>
              <TableCell>{form.categories}</TableCell>
              <TableCell>{form.branch}</TableCell>
              <TableCell>{form.name}</TableCell>
              <TableCell>{form.from_email}</TableCell>
              <TableCell>{form.contact}</TableCell>
              <TableCell className="whitespace-pre-line">
                {form.message}
              </TableCell>
              <TableCell>{form.date}</TableCell>
              <TableCell>{form.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Mobile Cards */}
      <div className="block lg:hidden rounded-lg border border-gray-400 p-5 space-y-5">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">Inquiries</p>
          <p className="text-sm">{`You have ${totalItems} form submission(s).`}</p>
        </div>
        <>
          {currentData.map((form) => (
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
                  <p className="font-semibold">Branch:</p>
                  <p>{form.branch ?? "N/A"}</p>
                </div>
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
                    <p className="text-justify whitespace-pre-line">
                      {form.message}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {endIndex} of {totalItems} entries
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={prevPage}
                  className={
                    !canGoPrev
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {generatePageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => goToPage(page as number)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={nextPage}
                  className={
                    !canGoNext
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
