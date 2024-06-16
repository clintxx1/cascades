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
import MobileDropdown from "../mobileDropdown";
import {
  BLENDED_LEARNING_CLASS,
  FULL_ONLINE_CLASS,
  PHYSICAL_HALF_DAY_CLASS,
} from "@/lib/constants";

export default function ClassSchedTable() {
  return (
    <div className="w-full">
      <div className="hidden lg:block md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg bg-blueSapphire text-white"></TableHead>
              <TableHead className="text-lg bg-blueSapphire text-white">
                <div className="text-base font-normal">
                  <p>
                    <span className="text-lg font-semibold">WANDERERS</span>
                    <br />
                    Toddlers (16 Months - 2 Years old)
                    <br />
                    Nursery 1 (2 years old)
                  </p>
                </div>
              </TableHead>
              <TableHead className="text-lg bg-blueSapphire text-white">
                <div className="text-base font-normal">
                  <p>
                    <span className="text-lg font-semibold">EXPLORERS</span>
                    <br />
                    Nursery 2 - (3-3.11 y.o)
                    <br />
                    Kinder - (4-4.11 y.o)
                  </p>
                </div>
              </TableHead>
              <TableHead className="text-lg bg-blueSapphire text-white h-full align-top">
                <div className="text-base font-normal">
                  <p>
                    <span className="text-lg font-semibold">EXPLORERS 2</span>
                    <br />
                    Kinder 2 - (5-5.11 y.o)
                  </p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={`text-base ${lato.className}`}>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>FULL ONLINE CLASS</strong>
                    <br />
                    Distance Learning Program with Kits
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    10:30am -12:00nn
                    <br />1 Teacher - 10 Students
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    10:30am -12:00nn
                    <br />1 Teacher - 10 Students
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    10:30am -12:00nn
                    <br />1 Teacher - 10 Students
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>BLENDED LEARNING CLASS</strong>
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    Half Day- 2x F2F and 2x
                    <br />
                    Online/Async with Kits
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    Half Day- 2x F2F and 2x
                    <br />
                    Online/Async with Kits
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    Half Day- 2x F2F and 2x
                    <br />
                    Online/Async with Kits
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>PHYSICAL HALF-DAY CLASS</strong>
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    8:30am -11:30am
                    <br />
                    10:30am- 2:30pm
                    <br />
                    1:30pm-4:30pm
                    <br />
                    <br />
                  </p>
                  <p className="text-sm">2 Teachers/ 1 Aide - 15 Students</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    AM: 8:30am -11:30am
                    <br />
                    PM 1:30pm-4:30pm
                    <br />
                    <br />
                  </p>
                  <p className="text-sm">2 Teachers/ 1 Aide - 15 Students</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    AM: 8:30am -11:30am
                    <br />
                    PM 1:30pm-4:30pm
                    <br />
                    <br />
                  </p>
                  <p className="text-sm">2 Teachers/ 1 Aide - 15 Students</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div>
                  <p>
                    <strong>PHYSICAL WHOLE DAY CLASS</strong>
                    <br />
                    Free Lunch & 2 Snacks
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    8:30am - 4:30pm
                    <br />
                    <br />2 Teachers/ 1 Aide - 15 Students
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    8:30am - 4:30pm
                    <br />
                    <br />2 Teachers/ 1 Aide - 15 Students
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>
                    8:30am - 4:30pm
                    <br />
                    <br />2 Teachers/ 1 Aide - 15 Students
                  </p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="block lg:hidden md:hidden space-y-5">
        <p className="bg-blueSapphire text-white p-1">
          <strong>FULL ONLINE CLASS</strong>
          <br />
          Distance Learning Program with Kits
        </p>
        <MobileDropdown dropdownData={FULL_ONLINE_CLASS} />
        <p className="bg-blueSapphire text-white p-1">
          <strong>BLENDED LEARNING CLASS</strong>
        </p>
        <MobileDropdown dropdownData={BLENDED_LEARNING_CLASS} />
        <p className="bg-blueSapphire text-white p-1">
          <strong>PHYSICAL HALF-DAY CLASS</strong>
        </p>
        <MobileDropdown dropdownData={PHYSICAL_HALF_DAY_CLASS} />
      </div>
    </div>
  );
}
