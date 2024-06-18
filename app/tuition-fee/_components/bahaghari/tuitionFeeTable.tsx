import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { lato } from "@/lib/fonts";
import MobileDropdown from "../mobileDropdown";
import { BAHAGHARI_TUITION_FEE_WITH_DISCOUNT } from "@/lib/constants";

const TuitionTable = () => {
  return (
    <div className={`${lato.className} mx-auto w-full`}>
      {/* Desktop View */}
      <div className="hidden lg:block md:block">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={5} className="bg-blueSapphire text-white">
                  BAHAGHARI PROGRAM TUITION FEES: 3- 9 YEARS OLD
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead className="text-end">CLASSES</TableHead>
                <TableHead className="text-center">
                  5X A WEEK WHOLE DAY
                </TableHead>
                <TableHead className="text-center">
                  3X A WEEK HALF DAY
                </TableHead>
                <TableHead className="text-center">
                  4X A WEEK HALF DAY
                </TableHead>
                <TableHead className="text-center">
                  5X A WEEK HALF DAY
                </TableHead>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-end">TOTAL TUITION FEE</TableCell>
                <TableCell className="text-center">430,000</TableCell>
                <TableCell className="text-center">260,000</TableCell>
                <TableCell className="text-center">275,000</TableCell>
                <TableCell className="text-center">290,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="bg-blueSapphire text-white text-center py-2"
                >
                  TUITION FEE WITH DISCOUNT
                </TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-end">ANNUAL</TableCell>
                <TableCell className="text-center">408,500</TableCell>
                <TableCell className="text-center">247,000</TableCell>
                <TableCell className="text-center">261,250</TableCell>
                <TableCell className="text-center">275,500</TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-end">SEMESTRAL</TableCell>
                <TableCell className="text-center">208,550</TableCell>
                <TableCell className="text-center">126,100</TableCell>
                <TableCell className="text-center">133,375</TableCell>
                <TableCell className="text-center">140,650</TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-end">BI MONTHLY</TableCell>
                <TableCell className="text-center">84,710</TableCell>
                <TableCell className="text-center">51,220</TableCell>
                <TableCell className="text-center">54,175</TableCell>
                <TableCell className="text-center">57,130</TableCell>
              </TableRow>
              <TableRow className="text-sm">
                <TableCell className="text-end">MONTHLY</TableCell>
                <TableCell className="text-center">43,000</TableCell>
                <TableCell className="text-center">26,000</TableCell>
                <TableCell className="text-center">27,500</TableCell>
                <TableCell className="text-center">29,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  colSpan={4}
                  className="bg-blueSapphire text-white text-center p-0"
                >
                  PAYMENT TERMS SCHEDULE
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center align-top">
                  <strong>ANNUAL</strong> <br />
                  <i>With 5% Discount</i>
                </TableCell>
                <TableCell className="text-center align-top">
                  <strong>SEMESTRAL</strong> <br />
                  <i>With 3% Discount</i>
                </TableCell>
                <TableCell className="text-center align-top">
                  <strong>BI MONTHLY</strong> <br />
                  <i>With 1.5% Discount</i>
                </TableCell>
                <TableCell className="text-center align-top">
                  <strong>MONTHLY</strong> <br />
                  <i>No Discount</i>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="align-top">
                  On or Before July 28, 2024
                </TableCell>
                <TableCell className="align-top">
                  1st Sem Payment: July 28, 2024 (Period: Aug 12, 2024 – Feb 2,
                  2025)
                  <br />
                  <br />
                  2nd Sem Payment: January 2, 2025 (Period: Jan 13, 2025 – June
                  6, 2025)
                </TableCell>
                <TableCell className="align-top">
                  1st Payment: July 28, 2024 (Period: Aug 12 – Oct 4, 2024)
                  <br />
                  <br />
                  2nd Payment: Sept 26, 2024 (Period: Oct 7 – Nov 29, 2024)
                  <br />
                  <br />
                  3rd Payment: Nov 21, 2024 (Period: Dec 2, 2024 – Feb 7, 2025)
                  <br />
                  <br />
                  4th Payment: Feb 6, 2025 (Period: Feb 17 – April 1, 2025)
                  <br />
                  <br />
                  5th Payment: April 3, 2025 (Period: April 14 – June 28, 2025)
                </TableCell>
                <TableCell>
                  Month 1: July 28, 2024 (Period: Aug 12 – Sep 6, 2024)
                  <br />
                  <br />
                  Month 2: August 29, 2024 (Period: Sep 9 – Oct 4, 2024)
                  <br />
                  <br />
                  Month 3: September 26, 2024 (Period: Oct 7 – Nov 1, 2024)
                  <br />
                  <br />
                  Month 4: October 24, 2024 (Period: Nov 4 – 29, 2024)
                  <br />
                  <br />
                  Month 5: November 21, 2024 (Period: Dec 2,2024 – Jan 10, 2025)
                  <br />
                  <br />
                  Month 6: January 2, 2025 (Period: Jan 13 – Feb 7, 2025)
                  <br />
                  <br />
                  Month 7: February 6, 2025 (Period: Feb 17 – Mar 14, 2025)
                  <br />
                  <br />
                  Month 8: March 6, 2025 (Period: Mar 17 – April 11, 2025)
                  <br />
                  <br />
                  Month 9: April 3, 2025 (Period: April 14 – May 9, 2025)
                  <br />
                  <br />
                  Month 10: May 1, 2025 (Period: May 12 – June 6, 2025)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} className="text-xs py-2 italic">
                  Available Discount Offered: 3% PWD Discount/ 5% Early Bird
                  Discount/ 3% Sibling Discount (applied to the 2nd child's
                  fee): The maximum applicable discount is 8%.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Mobile View */}
      <div className="space-y-4 block lg:hidden md:hidden">
        <div className="grid gap-2">
          <h2 className="text-base bg-blueSapphire text-white">
            BAHAGHARI PROGRAM TUITION FEES: 3- 9 YEARS OLD
          </h2>
          <div className="flex items-center justify-between w-full">
            <p>5X A WEEK WHOLE DAY</p>
            <p>430,000</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between w-full">
            <p>3X A WEEK HALF DAY</p>
            <p>260,000</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between w-full">
            <p>4X A WEEK HALF DAY</p>
            <p>275,000</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between w-full">
            <p>5X A WEEK HALF DAY</p>
            <p>290,000</p>
          </div>
          <Separator />
        </div>
        <div>
          <h2 className="text-base bg-blueSapphire text-white uppercase">
            Tuition Fee with Discount
          </h2>
          <MobileDropdown dropdownData={BAHAGHARI_TUITION_FEE_WITH_DISCOUNT} />
        </div>
        <div>
          <h2 className="text-base bg-blueSapphire text-white uppercase">
            Payment Terms Schedule
          </h2>
          <ul className="space-y-2 pl-2">
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

export default TuitionTable;
