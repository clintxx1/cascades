import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { lato } from "@/lib/fonts";

const DetailedPaymentTermsTable = () => {
  return (
    <div className={`${lato.className} w-full mx-auto`}>
      <div className="overflow-auto hidden lg:block md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-base font-semibold bg-blueSapphire text-white"></TableHead>
              <TableHead className="text-base font-semibold bg-blueSapphire text-white text-center">
                HALF DAY <br />
                IN-PERSON CLASSES <br />
                (ONLY FOR G1)
              </TableHead>
              <TableHead className="text-base font-semibold bg-blueSapphire text-white text-center">
                WHOLE DAY <br />
                IN-PERSON CLASSES <br />
                (ALL GRADE LEVELS)
              </TableHead>
              <TableHead className="text-base font-semibold bg-blueSapphire text-white text-center align-top">
                ONLINE PROGRAM <br />
                (ALL GRADE LEVELS)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-sm">
              <TableCell className="text-end font-semibold">
                ANNUAL PAYMENT
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                1ST PAYMENT RESERVATION (June 2024)
              </TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                2ND PAYMENT ENROLLMENT (June 3, 2024)
              </TableCell>
              <TableCell className="text-center">138,500</TableCell>
              <TableCell className="text-center">191,500</TableCell>
              <TableCell className="text-center">107,000</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold text-blue-700">
              <TableCell className="text-end">TOTAL SCHOOL FEES</TableCell>
              <TableCell className="text-center">138,500</TableCell>
              <TableCell className="text-center">191,500</TableCell>
              <TableCell className="text-center">107,000</TableCell>
            </TableRow>

            <TableRow className="text-sm">
              <TableCell className="text-end font-semibold">
                SEMESTRAL PAYMENT
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                1ST PAYMENT RESERVATION (Before June 2024)
              </TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                2ND PAYMENT ENROLLMENT with MISC (July 22, 2024)
              </TableCell>
              <TableCell className="text-center">78,169</TableCell>
              <TableCell className="text-center">105,067</TableCell>
              <TableCell className="text-center">62,183</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                3RD PAYMENT SEMESTRAL FEE BALANCE (Jan 22, 2025)
              </TableCell>
              <TableCell className="text-center">62,169</TableCell>
              <TableCell className="text-center">89,067</TableCell>
              <TableCell className="text-center">46,183</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold text-blue-700">
              <TableCell className="text-end">TOTAL SCHOOL FEES</TableCell>
              <TableCell className="text-center">140,338</TableCell>
              <TableCell className="text-center">194,134</TableCell>
              <TableCell className="text-center">108,366</TableCell>
            </TableRow>

            <TableRow className="text-sm">
              <TableCell className="text-end font-semibold">
                MONTHLY PAYMENT
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                1ST PAYMENT RESERVATION (Before June 2024)
              </TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
              <TableCell className="text-center">12,000</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                2ND PAYMENT ENROLLMENT with MISC (July 22, 2024)
              </TableCell>
              <TableCell className="text-center">34,375</TableCell>
              <TableCell className="text-center">42,325</TableCell>
              <TableCell className="text-center">29,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                3RD PAYMENT INSTALLMENT (Sept 3, 2024)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                4TH PAYMENT INSTALLMENT (Oct 3, 2024)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                5TH PAYMENT INSTALLMENT (Nov 3, 2024)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                6TH PAYMENT INSTALLMENT (Dec 3, 2024)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                7TH PAYMENT INSTALLMENT (Feb 3, 2025)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm">
              <TableCell className="text-end">
                8TH PAYMENT INSTALLMENT (Mar 3, 2025)
              </TableCell>
              <TableCell className="text-center">18,375</TableCell>
              <TableCell className="text-center">26,325</TableCell>
              <TableCell className="text-center">13,650</TableCell>
            </TableRow>
            <TableRow className="text-sm font-semibold text-blue-700">
              <TableCell className="text-end">TOTAL SCHOOL FEES</TableCell>
              <TableCell className="text-center">144,625</TableCell>
              <TableCell className="text-center">200,275</TableCell>
              <TableCell className="text-center">111,550</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DetailedPaymentTermsTable;
