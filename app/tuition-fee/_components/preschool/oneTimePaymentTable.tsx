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

export default function OneTimePaymentTable() {
  return (
    <div>
      <div className="hidden lg:block md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                colSpan={5}
                className="text-lg text-center bg-blueSapphire text-white"
              >
                ONE TIME PAYMENT- (MISCELLANEOUS FEE)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={`text-base ${lato.className}`}>
            <TableRow>
              <TableCell className="text-right border-r">
                Registration / Application (Filing Fees)
              </TableCell>
              <TableCell>500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Parents’ Development Fund
              </TableCell>
              <TableCell>1000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Cascades Starting Kit (1 Uniform, ID, Bag Tag, Fetchers ID)
              </TableCell>
              <TableCell>2000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Year-end Culmination Kit and Moving Up Fees
              </TableCell>
              <TableCell>3500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Health and Safety
              </TableCell>
              <TableCell>600</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Social Action and Community Project
              </TableCell>
              <TableCell>500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-right border-r">
                Accident Insurance
              </TableCell>
              <TableCell>500</TableCell>
            </TableRow>
            <TableRow className="bg-blueSapphire text-white">
              <TableCell className="text-right border-r">TOTAL</TableCell>
              <TableCell>8600</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="block lg:hidden md:hidden space-y-2">
        <p className="text-base text-center bg-blueSapphire text-white">
          ONE TIME PAYMENT- (MISCELLANEOUS FEE)
        </p>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Registration / Application (Filing Fees)</p>
          <p className="w-1/5 text-end">500</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Parents’ Development Fund</p>
          <p className="w-1/5 text-end">1000</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">
            Cascades Starting Kit (1 Uniform, ID, Bag Tag, Fetchers ID)
          </p>
          <p className="w-1/5 text-end">2000</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Year-end Culmination Kit and Moving Up Fees</p>
          <p className="w-1/5 text-end">3500</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Health and Safety</p>
          <p className="w-1/5 text-end">600</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Social Action and Community Project</p>
          <p className="w-1/5 text-end">500</p>
        </div>
        <div className="flex items-center justify-between border-b">
          <p className="w-4/5">Accident Insurance</p>
          <p className="w-1/5 text-end">500</p>
        </div>
        <div className="flex items-center justify-between bg-blueSapphire text-white">
          <p className="w-4/5">TOTAL</p>
          <p className="w-1/5 text-end">8600</p>
        </div>
      </div>
    </div>
  );
}
