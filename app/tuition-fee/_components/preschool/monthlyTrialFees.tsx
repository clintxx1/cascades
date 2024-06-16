import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { lato } from "@/lib/fonts";
import { ProgramContentProps } from "@/types";
import React from "react";

const FULL_ONLINE_CLASS: ProgramContentProps[] = [
  {
    label: `
      <p>
          <span className="text-lg font-semibold">WANDERERS</span>
          <br />Toddlers (16 Months - 2 Years old)
          <br />Nursery 1 (2 years old)
      </p>
      `,
    value: "fullwan",
    description: `
      <p>
        <strong>FULL ONLINE CLASS</strong>
        <br />
        Distance Learning Program with Kits
      </p>`,
  },
  {
    label: `
      <p>
        <span className="text-lg font-semibold">EXPLORERS</span>
        <br />Nursery 2 - (3-3.11 y.o)
        <br />Kinder - (4-4.11 y.o)
      </p>`,
    value: "fullexpl",
    description: `The Program will allow the children to understand the importance of research and guided works to create a more meaningful output or projects. They will be exposed to different inspiring mentors and consultants to guide them in their chosen project.`,
  },
];

export default function MonthlyTrialFeeTable() {
  return (
    <div className="w-full">
      <div className="hidden lg:block md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={4}
                className="text-lg bg-blueSapphire text-white"
              >
                MONTHLY TRIAL FEES:
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={`text-base ${lato.className}`}>
            <TableRow>
              <TableCell className="align-top">
                <p>
                  <strong>Full Online Class</strong>
                  <br />
                  Php13,500
                  <br />
                  With Busy book and Kits
                  <br />1 Hour and 30 Mins
                </p>
              </TableCell>
              <TableCell className="align-top">
                <p>
                  <strong>Blended Learning Class</strong>
                  <br />
                  Php15,500
                  <br />
                  <span className="pl-14">2x Half-day physical class</span>
                  <br />
                  <span className="pl-14">2x Online/Async with Kits</span>
                  <br />
                  <span className="pl-14">1 Hour and 30 Mins</span>
                </p>
              </TableCell>
              <TableCell className="align-top">
                <p>
                  <strong>Physical Class</strong>
                  <br />
                  Php19,000
                  <br />
                  <span className="pl-14">Half-day</span>
                  <br />
                  <span className="pl-14">8:30 -11:30 AM</span>
                  <br />
                  <span className="pl-14">1:30 – 4:30 PM</span>
                </p>
              </TableCell>
              <TableCell className="align-top">
                <p>
                  <strong>Physical Class</strong>
                  <br />
                  Php26,000
                  <br />
                  <span className="pl-14">Whole-Day</span>
                  <br />
                  <span className="pl-14">8:30AM to 4:30 PM</span>
                  <br />
                  <span className="pl-14">Free Lunch & 2 Snacks</span>
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {/* <div className="block lg:hidden md:hidden space-y-2">
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
        </div> */}
    </div>
  );
}
