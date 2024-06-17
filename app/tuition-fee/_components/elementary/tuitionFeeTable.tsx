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
import React from "react";

const ElemTuitionFeeTable = () => {
  return (
    <div className={`${lato.className} w-full`}>
      <div className="container mx-auto p-4 hidden lg:block md:block">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white"></TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white text-center">
                  <p>
                    HALF DAY <br />
                    IN-PERSON CLASSES <br />
                    (ONLY FOR G1)
                  </p>
                </TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white text-center">
                  <p>
                    WHOLE DAY <br />
                    IN-PERSON CLASSES <br />
                    (ALL GRADE LEVELS)
                  </p>
                </TableHead>
                <TableHead className="text-base font-semibold bg-blueSapphire text-white align-top text-center">
                  <p>
                    ONLINE PROGRAM <br />
                    (ALL GRADE LEVELS)
                  </p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className=" text-sm">
                <TableCell className="text-end">TUITION FEE</TableCell>
                <TableCell className="text-center">175,000</TableCell>
                <TableCell className="text-center">250,000</TableCell>
                <TableCell className="text-center">130,000</TableCell>
              </TableRow>
              <TableRow className="text-watermelonRed text-sm">
                <TableCell className="text-end">
                  DISCOUNTED TUITION FEE (30%)
                </TableCell>
                <TableCell className="text-center">122,500</TableCell>
                <TableCell className="text-center">175,500</TableCell>
                <TableCell className="text-center">91,000</TableCell>
              </TableRow>
              <TableRow className=" text-sm">
                <TableCell className="text-end">MISCELLANEOUS FEE</TableCell>
                <TableCell className="text-center">16,000</TableCell>
                <TableCell className="text-center">16,000</TableCell>
                <TableCell className="text-center">16,000</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Registration / Application (Filing Fees)
                </TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Parents' Development Fund
                </TableCell>
                <TableCell className="text-center">1500</TableCell>
                <TableCell className="text-center">1500</TableCell>
                <TableCell className="text-center">1500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Cascades Starting Kit
                </TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Year-end Culmination Kit and Moving Up Fee
                </TableCell>
                <TableCell className="text-center">3500</TableCell>
                <TableCell className="text-center">3500</TableCell>
                <TableCell className="text-center">3500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">Health and Safety</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Social Action and Community Project
                </TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">Accident Insurance</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
                <TableCell className="text-center">500</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Atelier / Project Fees
                </TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
              </TableRow>
              <TableRow className=" text-sm italic font-light">
                <TableCell className="text-end">
                  Department Enrichment / <br />
                  Cultural and Social Engagements
                </TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
                <TableCell className="text-center">3000</TableCell>
              </TableRow>
              <TableRow className=" text-base">
                <TableCell className="text-end">TOTAL SCHOOL FEES</TableCell>
                <TableCell className="text-center">138,500</TableCell>
                <TableCell className="text-center">191,500</TableCell>
                <TableCell className="text-center">107,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ElemTuitionFeeTable;
