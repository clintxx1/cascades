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
                <TableCell>
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
                <TableCell className="align-top p-0">
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
                <br />
                <TableCell colSpan={1} className="align-top">
                  <div className="text-end">
                    <p>
                      <strong>Meals</strong>
                    </p>
                  </div>
                </TableCell>
                <TableCell className="align-top">
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
      <div className="space-y-4 block lg:hidden">
        <div>
          <h2 className="text-lg font-semibold">Tuition Fees</h2>
          <ul className="space-y-2">
            <li>
              <strong>Classes:</strong> Half-Day Physical, Whole-Day Physical,
              Full Online, Blended
            </li>
            <li>
              <strong>Total Tuition Fee:</strong> 175,000, 250,000, 115,000,
              135,000
            </li>
            <li>
              <strong>Tuition Fee with Discount:</strong> 166,250, 237,500,
              109,250, 128,250
            </li>
            <li>
              <strong>Annual:</strong> 84,875, 121,250, 55,775, 65,475
            </li>
            <li>
              <strong>Semestral:</strong> 35,000, 49,250, 22,655, 26,595
            </li>
            <li>
              <strong>Bi Monthly:</strong> 17,500, 25,000, 11,500, 13,500
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Payment Terms</h2>
          <ul className="space-y-2">
            <li>
              <strong>Annual (5% Discount):</strong> On or Before July 28, 2024
            </li>
            <li>
              <strong>Semestral (3% Discount):</strong>
              <ul className="pl-4 list-disc">
                <li>
                  1st Sem Payment: July 28, 2024 (Period: Aug 12, 2024 – Feb 2,
                  2025)
                </li>
                <li>
                  2nd Sem Payment: January 2, 2025 (Period: Jan 13, 2025 – June
                  6, 2025)
                </li>
              </ul>
            </li>
            <li>
              <strong>Bi Monthly (1.5% Discount):</strong>
              <ul className="pl-4 list-disc">
                <li>
                  1st Payment: July 28, 2024 (Period: Aug 12 – Oct 4, 2024)
                </li>
                <li>
                  2nd Payment: Sept 26, 2024 (Period: Oct 7 – Nov 29, 2024)
                </li>
                <li>
                  3rd Payment: Nov 21, 2024 (Period: Dec 2, 2024 – Feb 7, 2025)
                </li>
                <li>
                  4th Payment: Feb 6, 2025 (Period: Feb 17 – April 1, 2025)
                </li>
                <li>
                  5th Payment: April 3, 2025 (Period: April 14 – June 28, 2025)
                </li>
              </ul>
            </li>
            <li>
              <strong>Monthly (No Discount):</strong>
              <ul className="pl-4 list-disc">
                <li>Month 1: July 28, 2024 (Period: Aug 12 – Sep 6, 2024)</li>
                <li>Month 2: August 29, 2024 (Period: Sep 9 – Oct 4, 2024)</li>
                <li>
                  Month 3: September 26, 2024 (Period: Oct 7 – Nov 1, 2024)
                </li>
                <li>Month 4: October 24, 2024 (Period: Nov 4 – 29, 2024)</li>
                <li>
                  Month 5: November 21, 2024 (Period: Dec 2, 2024 – Jan 10,
                  2025)
                </li>
                <li>Month 6: January 2, 2025 (Period: Jan 13 – Feb 7, 2025)</li>
                <li>
                  Month 7: February 6, 2025 (Period: Feb 17 – Mar 14, 2025)
                </li>
                <li>
                  Month 8: March 6, 2025 (Period: Mar 17 – April 11, 2025)
                </li>
                <li>Month 9: April 3, 2025 (Period: April 14 – May 9, 2025)</li>
                <li>Month 10: May 1, 2025 (Period: May 12 – June 6, 2025)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-sm">
            Available Discount Offered: 3% PWD Discount / 3% Sibling Discount
            (applied to the 2nd child's fee). The maximum applicable discount is
            8%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionalAddOnsTable;
