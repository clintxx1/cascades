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
              <TableHead
                colSpan={4}
                className="text-base font-semibold border-x-2 border-t-2 text-center"
              >
                PAYMENT OPTIONS FOR TUITION FEES
              </TableHead>
            </TableRow>
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
      <div className="lg:hidden md:hidden block">
        <div className="flex flex-col">
          <div className="font-semibold bg-blueSapphire text-white p-2">
            HALF DAY IN-PERSON CLASSES (ONLY FOR G1)
          </div>
          <div className="pl-2 py-2 space-y-1">
            <p className="font-semibold">ANNUAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT (June 3, 2024): 138,500</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 138,500
            </p>
            <p className="font-semibold mt-2">SEMESTRAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 78,169</p>
            <p>3RD PAYMENT SEMESTRAL FEE BALANCE (Jan 22, 2025): 62,169</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 140,338
            </p>
            <p className="font-semibold mt-2">MONTHLY PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 34,375</p>
            <p>3RD PAYMENT INSTALLMENT (Sept 3, 2024): 18,375</p>
            <p>4TH PAYMENT INSTALLMENT (Oct 3, 2024): 18,375</p>
            <p>5TH PAYMENT INSTALLMENT (Nov 3, 2024): 18,375</p>
            <p>6TH PAYMENT INSTALLMENT (Dec 3, 2024): 18,375</p>
            <p>7TH PAYMENT INSTALLMENT (Feb 3, 2025): 18,375</p>
            <p>8TH PAYMENT INSTALLMENT (Mar 3, 2025): 18,375</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 144,625
            </p>
          </div>
          <div className="font-semibold bg-blueSapphire text-white p-2 mt-4">
            WHOLE DAY IN-PERSON CLASSES (ALL GRADE LEVELS)
          </div>
          <div className="pl-2 py-2 space-y-1">
            <p className="font-semibold">ANNUAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT (June 3, 2024): 191,500</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 191,500
            </p>
            <p className="font-semibold mt-2">SEMESTRAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 105,067</p>
            <p>3RD PAYMENT SEMESTRAL FEE BALANCE (Jan 22, 2025): 89,067</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 194,134
            </p>
            <p className="font-semibold mt-2">MONTHLY PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 42,325</p>
            <p>3RD PAYMENT INSTALLMENT (Sept 3, 2024): 26,325</p>
            <p>4TH PAYMENT INSTALLMENT (Oct 3, 2024): 26,325</p>
            <p>5TH PAYMENT INSTALLMENT (Nov 3, 2024): 26,325</p>
            <p>6TH PAYMENT INSTALLMENT (Dec 3, 2024): 26,325</p>
            <p>7TH PAYMENT INSTALLMENT (Feb 3, 2025): 26,325</p>
            <p>8TH PAYMENT INSTALLMENT (Mar 3, 2025): 26,325</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 200,275
            </p>
          </div>
          <div className="font-semibold bg-blueSapphire text-white p-2 mt-4">
            ONLINE PROGRAM (ALL GRADE LEVELS)
          </div>
          <div className="pl-2 py-2 space-y-1">
            <p className="font-semibold">ANNUAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT (June 3, 2024): 107,000</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 107,000
            </p>
            <p className="font-semibold mt-2">SEMESTRAL PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 62,183</p>
            <p>3RD PAYMENT SEMESTRAL FEE BALANCE (Jan 22, 2025): 46,183</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 108,366
            </p>
            <p className="font-semibold mt-2">MONTHLY PAYMENT</p>
            <p>1ST PAYMENT RESERVATION (Before June 2024): 12,000</p>
            <p>2ND PAYMENT ENROLLMENT with MISC (July 22, 2024): 29,650</p>
            <p>3RD PAYMENT INSTALLMENT (Sept 3, 2024): 13,650</p>
            <p>4TH PAYMENT INSTALLMENT (Oct 3, 2024): 13,650</p>
            <p>5TH PAYMENT INSTALLMENT (Nov 3, 2024): 13,650</p>
            <p>6TH PAYMENT INSTALLMENT (Dec 3, 2024): 13,650</p>
            <p>7TH PAYMENT INSTALLMENT (Feb 3, 2025): 13,650</p>
            <p>8TH PAYMENT INSTALLMENT (Mar 3, 2025): 13,650</p>
            <p className="font-semibold text-blue-700 border-y py-2">
              TOTAL SCHOOL FEES: 111,550
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPaymentTermsTable;
