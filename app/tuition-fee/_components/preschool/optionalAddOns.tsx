import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { lato } from "@/lib/fonts";
import React from "react";

const OptionalAddOnsTable = () => {
  return (
    <div className={`${lato.className} w-full`}>
      <div className="container mx-auto p-4 hidden lg:block">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="text-lg font-semibold bg-blueSapphire text-white"
                  colSpan={3}
                >
                  OPTIONAL ADD ONS:
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={1}>
                  <div className="text-end">
                    <p>
                      <strong>HIRAYA Play</strong> <br />
                      Monday-Thursday <br />
                      8:00 AM - 10:00 AM <br />
                      2:00 PM - 4:00 PM
                    </p>
                  </div>
                </TableCell>
                <TableCell colSpan={2}>
                  <p>
                    Php10,000 (for kids not enrolled in regular programs)
                    <br />
                    2hrs/session for 8 sessions consumable within 1 month upon
                    enrollment
                    <br />
                    <br />
                    Available for Wanderers and Explorers Only (16 Months to 4
                    years old)
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={1} className="align-top">
                  <div className="text-end">
                    <p>
                      <strong>Skilled-Based Workshop</strong> <br />1 Hour per
                      session
                      <br />
                      Also Open for Non-students
                    </p>
                  </div>
                </TableCell>
                <TableCell colSpan={2}>
                  <p>
                    Taekwondo ArtSura
                    <br />
                    Ballet Music
                    <br />
                    Hip hop Cooking and Baking
                    <br />
                    The above skilled workshop has a separate fee. TBA
                    <br />
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={1} className="align-top">
                  <div className="text-end">
                    <p>
                      <strong>Child Minding</strong> <br />
                      (Monday to Friday) 1 Month
                    </p>
                  </div>
                </TableCell>
                <TableCell colSpan={2} className="align-top p-0">
                  <div>
                    <p className="px-5 py-2">
                      Php8,500 (Half Day with snacks) 8:00am-12pm OR 1pm-5pm
                      <br />
                      Php16,000 (Whole day with snacks and lunch) 8am-5pm
                      <br />
                    </p>
                    <Separator />
                    <p className="px-5 py-2">
                      Php250 per hour
                      <br />
                      Php2300 per day with 2 meals and 2 snacks I 8am-5pm
                    </p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={1} className="align-top">
                  <div className="text-end">
                    <p>
                      <strong>Meals</strong>
                    </p>
                  </div>
                </TableCell>
                <TableCell colSpan={2} className="align-top">
                  <div>
                    <p>
                      Php150 – Lunch OR Dinner
                      <br />
                      Php100 – Snacks
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OptionalAddOnsTable;
