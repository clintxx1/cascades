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
      <div className="flex items-start justify-center gap-8">
        <InfoCard
          title="Promos"
          titleCN="text-[42px] leading-[1.2em] text-[#9a5600]"
          description="Make the most of your Cascades experience by taking advantage of the following promos:"
          descriptionCN="w-[300px]"
        />
        <div>
          <InfoCard
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
          />
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
