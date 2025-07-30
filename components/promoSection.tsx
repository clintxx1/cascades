import React from "react";
import InfoCard from "./infoCard";
import { LazyImage } from "@/components/ui/lazy-image";

export default function PromoSection({ classname }: { classname?: string }) {
  return (
    <div className={classname}>
      <LazyImage
        src={
          "https://ik.imagekit.io/cascades/cascades/Group-5-1024x6.png?updatedAt=1713776075118"
        }
        alt="longDiv1"
        width={1024}
        height={6}
        className="w-full h-[6px] my-12 lg:px-12 lg:object-cover md:object-cover object-contain"
      />
      <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center gap-12">
        <InfoCard
          className="pt-0"
          title="Promos"
          titleCN="lg:text-[42px] text-3xl leading-[1.2em] text-[#9a5600]"
          description="Make the most of your Cascades experience by taking advantage of the following promos:"
          descriptionCN="lg:w-[300px] w-full"
        />
        <div className="text-darkLiver space-y-6">
          <div>
            <p className="lg:text-3xl text-3xl lg:text-start text-center font-semibold">
              Payment Terms Option
            </p>
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="Annual"
              descriptionCN="!w-full lg:text-start text-center"
            />
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="Semi- Annual"
              descriptionCN="!w-full lg:text-start text-center"
            />
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="Monthly"
              descriptionCN="!w-full lg:text-start text-center"
            />
          </div>
          <LazyImage
            src={
              "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
            }
            width={470}
            height={8}
            alt="divider"
            className="w-full h-[8px] lg:object-cover md:object-cover object-contain"
          />
          {/* <div>
            <p className="lg:text-3xl text-3xl lg:text-start text-center font-semibold">
              5 years old below
            </p>
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Annual Payment"
              titleCN="lg:w-[300px] w-full"
              description="5% Discount"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Semi-Annual Payment"
              titleCN="lg:w-[300px] w-full"
              description="3% Discount"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Bi-monthly Payment"
              titleCN="lg:w-[300px] w-full"
              description="1.5% Discount"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Monthly Payment"
              titleCN="lg:w-[300px] w-full"
              description="No Discount"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
          </div> */}
          {/* <LazyImage src={
              "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
            }
            width={470}
            height={8}
            alt="divider"
            className="w-full h-[8px] lg:object-cover md:object-cover object-contain"
          /> */}
          <div>
            <p className="lg:text-3xl text-3xl lg:text-start text-center font-semibold">
              Special Discount Offers
            </p>
            <InfoCard
              className="w-full pb-2"
              title=""
              titleCN=""
              description="*3% Sibling Discount (applied to the 2nd child’s fee)"
              descriptionCN="!w-full lg:text-start text-center"
            />
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="*3% Early Bird Discount"
              descriptionCN="!w-full lg:text-start text-center"
            />
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="*3% PWD Discount (with valid PWD ID)"
              descriptionCN="!w-full lg:text-start text-center"
            />
            <InfoCard
              className="w-full py-2"
              title=""
              titleCN=""
              description="(Maximum of 6% discount only)"
              descriptionCN="!w-full lg:text-start text-center"
            />
            {/* <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Early Bird Discount"
              titleCN="lg:w-[300px] w-full"
              description="5% Early Bird Discount (from April 1 to June 31, 2024 only)"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Siblings Discount"
              titleCN="lg:w-[300px] w-full"
              description="3% Siblings Discount (applied to the 2nd child's fee)"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="PWD Discount"
              titleCN="lg:w-[300px] w-full"
              description="3% PWD Discount (with PWD ID)"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            />
            <InfoCard
              className="flex lg:flex-row md:flex-row flex-col lg:gap-8 md:gap-8 gap-2 lg:items-start md:items-start items-center lg:pl-10 md:pl-10 pl-0"
              title="Elementary Special Discount"
              titleCN="lg:w-[300px] w-full"
              description="30% Discount for 5-9 years old (Elementary level)"
              descriptionCN="lg:w-[330px] w-full grid lg:place-items-start md:place-items-start place-items-center"
            /> */}
          </div>
          {/* <LazyImage src={
              "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
            }
            width={470}
            height={8}
            alt="divider"
            className="w-full h-[8px]"
          /> */}
          {/* <InfoCard
            className="flex gap-8"
            title="Early Bird Discount"
            titleCN="w-[300px]"
            description="10% Discount for phone reservations and enrollments as early as July 24 until August 30, 2019 (only limited slots available)"
            descriptionCN="w-[330px]"
          />
          <InfoCard
            className="flex gap-8"
            title="Siblings Discount"
            titleCN="w-[300px]"
            description="10% Discount for 2nd child and 5% discount to succeeding enrolled siblings"
            descriptionCN="w-[330px]"
          />
          <InfoCard
            className="flex gap-8"
            title="Referral Discount"
            titleCN="w-[300px]"
            description="5% discount per referral (discount is given only for this year)"
            descriptionCN="w-[330px]"
          /> */}
        </div>
      </div>
      <LazyImage
        src={
          "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png?updatedAt=1713776162507"
        }
        alt="longDiv2"
        width={1024}
        height={6}
        className="w-full h-[6px] my-12 lg:px-12 lg:object-cover md:object-cover object-contain"
      />
    </div>
  );
}
