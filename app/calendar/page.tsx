import { Metadata } from "next";
import React from "react";
import { Details } from "../_components/details";
import Image from "next/image";
import longDiv from "@/public/divider-XL-red-long-Copy-2-1024x8.png";
import longDiv1 from "@/public/Group-5-1024x6.png";
import { lato } from "../layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Calendar | Cascades.ph",
};
export default function Calendar() {
  return (
    <section className="w-full px-24">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        Calendar
      </p>
      <h2 className="text-meatBrown italic font-semibold text-[42px]">
        School Year 2019 - 2020
      </h2>
      <div className="w-full">
        <Details
          mainCN="w-full flex items-center justify-between"
          labelCN="w-[550px] text-[28px] leading-[36px]"
          valueCN="w-[350px] px-4 text-end"
          label="Phone reservation with early bird discount of 10% (15 slots)"
          value="As early as Jul 24 - Aug 30, 2019
      (depending on slots availability)"
        />
        <div className="py-8">
          <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
        </div>
      </div>
      <Details
        mainCN="w-full flex items-center justify-between"
        labelCN="w-[550px] text-[28px] leading-[36px]"
        valueCN="w-[300px] px-4 text-end"
        label="Open House"
        value="Aug 26 - 30, 2019"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex items-center justify-between"
        labelCN="w-[550px] text-[28px] leading-[36px]"
        valueCN="w-[300px] px-4 text-end"
        label="First Quarter"
        value="Oct 14 - Dec 20"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex flex-col items-center justify-center gap-6"
        labelCN="w-[550px] text-[28px] leading-[36px] text-center"
        valueCN="w-[300px] px-4 text-center"
        label="December Charity Brigade
      (bazaar / box of love / mini exhibits)"
        value="Dec 16 - 20"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex flex-col items-center justify-center gap-6"
        labelCN="w-[550px] text-[28px] leading-[36px] text-center"
        valueCN="w-[300px] px-4 text-center"
        label="Christmas / New Year's break"
        value="Dec 21, 2019 - Jan 3, 2020"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex items-center justify-between"
        labelCN="w-[550px] text-[28px] leading-[36px]"
        valueCN="w-[300px] px-4 text-end"
        label="Second Quarter"
        value="Jan 4 - Mar 13, 2020"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex flex-col items-center justify-center gap-6"
        labelCN="w-[550px] text-[28px] leading-[36px] text-center"
        valueCN="w-[300px] px-4 text-center"
        label="Yearly Children’s Exhibit"
        value="Feb 2020 (to be finalized)"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex items-center justify-between"
        labelCN="w-[550px] text-[28px] leading-[36px]"
        valueCN="w-[300px] px-4 text-end"
        label="Third Quarter"
        value="Mar 14 - Jun 12, 2020"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex items-center justify-between"
        labelCN="w-[550px] text-[28px] leading-[36px]"
        valueCN="w-[300px] px-4 text-end"
        label="Fourth Quarter"
        value="Jun 13 - Aug 28, 2020"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <Details
        mainCN="w-full flex flex-col items-center justify-center gap-6"
        labelCN="w-[550px] text-[28px] leading-[36px] text-center"
        valueCN="w-[300px] px-4 text-center"
        label="Year End Activity / Culminating Activity"
        value="Aug 29, 2020"
      />
      <div className="py-8">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px] px-4" />
      </div>
      <div className="my-16">
        <Image src={longDiv1} alt="longDiv1" className="w-full h-[6px]" />
      </div>
      <div className="flex items-end justify-start pb-24 w-full px-36">
        <div className="mt-4 space-y-8">
          <p className="text-[42px] leading-[1.2em] font-semibold text-customBrown">
            Have questions?
          </p>
          <div className="flex items-center justify-start w-[500px] gap-4">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              For more information, visit our Contact Us page:
            </p>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="text-customBrown text-center hover:text-white hover:bg-customBrown transition-colors duration-300 text-[28px] px-8 py-4 border-customBrown rounded-2xl border-[3px] italic"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
