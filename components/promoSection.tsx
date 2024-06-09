import React from "react";
import InfoCard from "./infoCard";
import Image from "next/image";

export default function PromoSection({ classname }: { classname?: string }) {
  return (
    <div className={classname}>
      <Image
        src={
          "https://ik.imagekit.io/cascades/cascades/Group-5-1024x6.png?updatedAt=1713776075118"
        }
        alt="longDiv1"
        width={1024}
        height={6}
        className="w-full h-[6px] my-12 px-12"
      />
      <div className="flex items-start justify-center gap-12">
        <InfoCard
          className="pt-0"
          title="Promos"
          titleCN="lg:text-[42px] text-4xl leading-[1.2em] text-[#9a5600]"
          description="Make the most of your Cascades experience by taking advantage of the following promos:"
          descriptionCN="w-[300px]"
        />
        <div className="text-darkLiver space-y-6">
          <div>
            <p className="text-4xl font-semibold">Payment Terms Option</p>
            <InfoCard
              className="flex gap-8 pl-10"
              title="One Year Payment"
              titleCN="w-[300px]"
              description="Maximum of 8% discount only (enrolled for one whole year)"
              descriptionCN="w-[330px]"
            />
          </div>
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
            }
            width={470}
            height={8}
            alt="divider"
            className="w-full h-[8px]"
          />
          <div>
            <p className="text-4xl font-semibold">5 years old below</p>
            <InfoCard
              className="flex gap-8 pl-10"
              title="Annual Payment"
              titleCN="w-[300px]"
              description="5% Discount for Annual Payment"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="Semi-Annual Payment"
              titleCN="w-[300px]"
              description="3% Discount for Semi-Annual Payment"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="Bi-monthly Payment"
              titleCN="w-[300px]"
              description="1.5% Discount for Bi-monthly Payment"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="Monthly Payment"
              titleCN="w-[300px]"
              description="No Discount for Monthly Payment"
              descriptionCN="w-[330px]"
            />
          </div>
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
            }
            width={470}
            height={8}
            alt="divider"
            className="w-full h-[8px]"
          />
          <div>
            <p className="text-4xl font-semibold">Special Discount Offers</p>
            <InfoCard
              className="flex gap-8 pl-10"
              title="Early Bird Discount"
              titleCN="w-[300px]"
              description="5% Early Bird Discount (from April 1 to June 31, 2024 only)"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="Siblings Discount"
              titleCN="w-[300px]"
              description="3% Siblings Discount (applied to the 2nd child's fee)"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="PWD Discount"
              titleCN="w-[300px]"
              description="3% PWD Discount (with PWD ID)"
              descriptionCN="w-[330px]"
            />
            <InfoCard
              className="flex gap-8 pl-10"
              title="Elementary Special Discount"
              titleCN="w-[300px]"
              description="30% Discount for 5-9 years old (Elementary level)"
              descriptionCN="w-[330px]"
            />
          </div>
          {/* <Image
            src={
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
      <Image
        src={
          "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png?updatedAt=1713776162507"
        }
        alt="longDiv2"
        width={1024}
        height={6}
        className="w-full h-[6px] my-12 px-12"
      />
    </div>
  );
}
