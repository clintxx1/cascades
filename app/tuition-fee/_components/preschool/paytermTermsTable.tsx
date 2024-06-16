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

const PaymentTermsTable = () => {
  return (
    <div className={`${lato.className} w-full`}>
      <div className="container mx-auto p-4 hidden lg:block">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="text-lg bg-blueSapphire text-white"
                  colSpan={5}
                >
                  PAYMENT TERMS OPTIONS FOR TUITION FEES
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Classes</TableCell>
                <TableCell>Half-Day Physical</TableCell>
                <TableCell>Whole-Day Physical</TableCell>
                <TableCell>Full Online</TableCell>
                <TableCell>Blended</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Tuition Fee</TableCell>
                <TableCell>175,000</TableCell>
                <TableCell>250,000</TableCell>
                <TableCell>115,000</TableCell>
                <TableCell>135,000</TableCell>
              </TableRow>
              <TableRow>
                <TableHead
                  className="text-base text-center bg-blueSapphire text-white uppercase"
                  colSpan={5}
                >
                  Tuition Fee with Discount
                </TableHead>
              </TableRow>
              <TableRow>
                <TableCell>Annual</TableCell>
                <TableCell>166,250</TableCell>
                <TableCell>237,500</TableCell>
                <TableCell>109,250</TableCell>
                <TableCell>128,250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Semestral</TableCell>
                <TableCell>84,875</TableCell>
                <TableCell>121,250</TableCell>
                <TableCell>55,775</TableCell>
                <TableCell>65,475</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bi Monthly</TableCell>
                <TableCell>35,000</TableCell>
                <TableCell>49,250</TableCell>
                <TableCell>22,655</TableCell>
                <TableCell>26,595</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monthly</TableCell>
                <TableCell>17,500</TableCell>
                <TableCell>25,000</TableCell>
                <TableCell>11,500</TableCell>
                <TableCell>13,500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="text-base text-center bg-blueSapphire text-white uppercase"
                  colSpan={4}
                >
                  Payment Terms Schedule
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div>
                    <p className="text-base font-bold">ANNUAL</p>
                    <p className="italic">With 5% Discount</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-base font-bold">SEMESTRAL</p>
                    <p className="italic">With 3% Discount</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-base font-bold">BI MONTHLY</p>
                    <p className="italic">With 1.5% Discount</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-base font-bold">MONTHLY</p>
                    <p className="italic">No Discount</p>
                  </div>
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
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell
                  className="text-lg bg-blueSapphire text-white"
                  colSpan={4}
                >
                  <p className="text-sm">
                    Available Discount Offered: 3% PWD Discount / 3% Sibling
                    Discount (applied to the 2nd child's fee). <br /> The
                    maximum applicable discount is 8%.
                  </p>
                </TableCell>
              </TableRow>
            </TableFooter>
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

export default PaymentTermsTable;
