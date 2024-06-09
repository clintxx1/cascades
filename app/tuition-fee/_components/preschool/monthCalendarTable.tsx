import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { lato } from "@/lib/fonts";
import React from "react";

export default function MonthlyCalendarTable() {
  return (
    <div className="w-full">
      <div className="hidden lg:block md:block ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={5}
                className="text-lg bg-blueSapphire text-white"
              >
                MONTHLY CALENDAR AND THEME: EXPLORERS & WANDERERS PROGRAM
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={`text-base ${lato.className}`}>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 1:</strong>
                    <br />
                    <strong>Me and Myself</strong>
                    <br />
                    Aug 12 - Sept 6, 2024
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 2:</strong>
                    <br />
                    <strong>Me and Emotions</strong>
                    <br />
                    Sept 9 - Oct 6, 2024
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 3:</strong>
                    <br />
                    <strong>Me and Family</strong>
                    <br />
                    Oct 7 - Nov 1, 2024
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 4:</strong>
                    <br />
                    <strong>Me and Home</strong>
                    <br />
                    Nov 4 - Nov 29, 2024
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 5:</strong>
                    <br />
                    <strong>Me and the Things I can Do</strong>
                    <br />
                    Dec 2 - Jan 10, 2025
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 6:</strong>
                    <br />
                    <strong>Me and My Community</strong>
                    <br />
                    Jan 13 - Feb 7, 2025
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 7:</strong>
                    <br />
                    <strong>Me as a Citizen</strong>
                    <br />
                    Feb 17 - Mar 14, 2025
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 8:</strong>
                    <br />
                    <strong>Me and My Earth</strong>
                    <br />
                    Mar 17 - Apr 11, 2025
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 9:</strong>
                    <br />
                    <strong>Me and My Universe</strong>
                    <br />
                    Apr 14 - May 9, 2025
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    <strong>Month 10:</strong>
                    <br />
                    <strong>Me as an Advocate</strong>
                    <br />
                    May 12 - June 6, 2025
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="block lg:hidden md:hidden space-y-2">
        <p className="text-base text-center bg-blueSapphire text-white">
          MONTHLY CALENDAR AND THEME: EXPLORERS & WANDERERS PROGRAM
        </p>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 1: Me and Myself</strong>
          </p>
          <p className="w-1/2 text-end">Aug 12 - Sept 6, 2024</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 2: Me and Emotions</strong>
          </p>
          <p className="w-1/2 text-end">Sept 9 - Oct 6, 2024</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 3: Me and Family</strong>
          </p>
          <p className="w-1/2 text-end">Oct 7 - Nov 1, 2024</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 4: Me and Home</strong>
          </p>
          <p className="w-1/2 text-end">Nov 4 - Nov 29, 2024</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 5: Me and the Things I can Do</strong>
          </p>
          <p className="w-1/2 text-end">Dec 2 - Jan 10, 2025</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 6: Me and My Community</strong>
          </p>
          <p className="w-1/2 text-end">Jan 13 - Feb 7, 2025</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 7: Me as a Citizen</strong>
          </p>
          <p className="w-1/2 text-end">Feb 17 - Mar 14, 2025</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 8: Me and My Earth</strong>
          </p>
          <p className="w-1/2 text-end">Mar 17 - Apr 11, 2025</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 9: Me and My Universe</strong>
          </p>
          <p className="w-1/2 text-end">Apr 14 - May 9, 2025</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-1/2">
            <strong>Month 10: Me as an Advocate</strong>
          </p>
          <p className="w-1/2 text-end">May 12 - June 6, 2025</p>
        </div>
      </div>
    </div>
  );
}
