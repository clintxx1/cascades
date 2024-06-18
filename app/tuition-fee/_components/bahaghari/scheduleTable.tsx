import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const ScheduleTable = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-semibold bg-blueSapphire text-white border-r">
                  BAHAGHARI CLASS <br /> SCHEDULE OPTIONS:
                </TableHead>
                <TableHead
                  colSpan={3}
                  className="text-base font-semibold bg-blueSapphire text-white"
                >
                  Preschool to Elementary - AGE: 3- 9 YEARS OLD
                  <br />
                  Levels: Explorers (Nursery to Kinder 2) 3-5 years old (2
                  Teachers/ 1 Aide - 15 Students) <br />
                  <span className="pl-[55px]">
                    Navigators (Grade 1, 2 and 3) 6-9 years old (1 Teacher: 15
                    Students)
                  </span>
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white border-r">
                  5X A WEEK <br /> WHOLE-DAY <br /> Physical Class <br />{" "}
                  Monday-Thursday <br /> Friday Class (AM only)
                </TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white border-r">
                  5X A WEEK <br /> HALF-DAY <br /> Physical Class <br />{" "}
                  Monday-Thursday <br /> Friday Class (AM only)
                </TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white border-r">
                  4X A WEEK <br /> HALF-DAY <br /> Physical Class <br />{" "}
                  Monday-Thursday <br /> Friday Class (AM only)
                </TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white">
                  3X A WEEK <br /> HALF-DAY <br /> Physical Class <br />{" "}
                  Monday-Thursday <br /> Friday Class (AM only)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-sm">
                <TableCell>8:30am - 4:30pm</TableCell>
                <TableCell>
                  8:30am - 11:30am <br /> 1:30pm - 4:30pm
                </TableCell>
                <TableCell>
                  8:30am - 11:30am <br /> 1:30pm - 4:30pm
                </TableCell>
                <TableCell>
                  8:30am - 11:30am <br /> 1:30pm - 4:30pm
                </TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell>
                  With Lunch & 2 Snacks with Support Teacher
                </TableCell>
                <TableCell>With Support Teacher</TableCell>
                <TableCell>With Support Teacher</TableCell>
                <TableCell>With Support Teacher</TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-left">
                  <p className="font-semibold">Inclusions:</p>
                  <p>A. OT- Occupational Therapy (1 on 1)</p>
                  <p>B. Individualized intervention with SPED Teacher</p>
                  <p>C. Inclusion in regular class (3 days regular class)</p>
                  <p>D. SPED Group Class</p>
                  <p>1 Day - OT (1 Hour) + Regular Class</p>
                  <p>1 Day - 1 on 1 SPED intervention (1 Hour)</p>
                  <p>SPED Group Class (1 Hour)</p>
                </TableCell>
                <TableCell className="text-left">
                  <p className="font-semibold">Inclusions:</p>
                  <p>A. OT- Occupational Therapy (1 on 1)</p>
                  <p>B. Individualized intervention with SPED Teacher</p>
                  <p>C. Inclusion in regular class (3 days regular class)</p>
                  <p>D. SPED Group Class</p>
                  <p>1 Day - OT (1 Hour) + Regular Class</p>
                  <p>1 Day - 1 on 1 SPED intervention (1 Hour)</p>
                  <p>SPED Group Class (1 Hour)</p>
                </TableCell>
                <TableCell className="text-left">
                  <p className="font-semibold">Inclusions:</p>
                  <p>A. OT- Occupational Therapy (1 on 1)</p>
                  <p>B. Individualized intervention with SPED Teacher</p>
                  <p>C. Inclusion in regular class (2 days regular class)</p>
                  <p>D. SPED Group Class</p>
                  <p>1 Day - OT (1 Hour) + Regular Class</p>
                  <p>1 Day - 1 on 1 SPED intervention (1 Hour)</p>
                  <p>SPED Group Class (1 Hour)</p>
                </TableCell>
                <TableCell className="text-left">
                  <p className="font-semibold">Inclusions:</p>
                  <p>A. OT- Occupational Therapy (1 on 1)</p>
                  <p>B. Individualized intervention with SPED Teacher</p>
                  <p>C. Inclusion in regular class (1 day regular class)</p>
                  <p>D. SPED Group Class</p>
                  <p>1 Day - OT (1 Hour) + Regular Class</p>
                  <p>1 Day - 1 on 1 SPED intervention (1 Hour)</p>
                  <p>SPED Group Class (1 Hour)</p>
                </TableCell>
              </TableRow>
              <TableRow className="text-sm ">
                <TableCell>
                  Meraki/ Movement Day is only on FRIDAY MORNING SCHEDULE
                </TableCell>
                <TableCell>
                  Meraki/ Movement Day is only on FRIDAY MORNING SCHEDULE
                </TableCell>
                <TableCell>
                  Meraki/ Movement Day is only on FRIDAY MORNING SCHEDULE
                </TableCell>
                <TableCell>
                  Meraki/ Movement Day is only on FRIDAY MORNING SCHEDULE
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;
