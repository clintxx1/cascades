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
      <div className="block lg:hidden space-y-2">
        <p className="text-base text-center bg-blueSapphire text-white">
          MONTHLY TRIAL FEES:
        </p>
        <div className="border-b">
          <p>
            <strong>Full Online Class</strong>
            <br />
            Php13,500
            <br />
            With Busy book and Kits
            <br />1 Hour and 30 Mins
          </p>
        </div>
        <div className=" border-b">
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
        </div>
        <div className=" border-b">
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
        </div>
        <div className=" border-b">
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
        </div>
      </div>
    </div>
  );
}
