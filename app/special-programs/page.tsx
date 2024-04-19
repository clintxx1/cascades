import InfoCard from "@/components/infoCard";
import PromoSection from "@/components/promoSection";
import Image from "next/image";
import React from "react";
import primaryLogo from "@/public/Group-3-1.png";
import image1 from "@/public/secondary_banner_2x-1024x521.jpg";
import divider from "@/public/header_copy_divider-copy-2.png";
import { lato } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Education | Cascades.ph",
};
export default function SpecialPrograms() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        Programs
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <Image
              src={primaryLogo}
              alt={"primaryLogo"}
              className="h-16 w-16 object-contain"
            />
            <p className="text-[42px] leading-[1.2em] font-semibold text-meatBrown">
              Special Programs
            </p>
          </div>
          <p
            className={`${lato.className} text-[20px] italic leading-[36px] text-darkLiver w-[470px] pt-5 pb-12`}
          >
            Enrolled students in the Basic Programs can avail the 5% discount to
            these special classes
          </p>
          <InfoCard
            title="1. Baby-Mama System"
            description="A baby-sitting program wherein caretakers care for babies under 3 years old by following and developing their home routine or schedule. Special classes are also offered for parents / guardians and their babies under 3 years old."
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="2. Play-area Membership"
            description="A membership will be given to the child and their accompanying adult to have a full access to the play area of the school. The child is requested to bring a pair of extra clothes, and their hygiene kit."
            hasHeader
            headerImage={divider}
            descriptionCN="w-[450px]"
          />
        </div>
        <div className="relative">
          <Image src={image1} alt={"image1"} className="object-contain" />
          <InfoCard
            title="3. Parent and Child Classes"
            description="(Children 6 mos to 2.5 yrs old)"
            hasHeader
            headerImage={divider}
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="4. Special Classes"
            description="Special classes are offered to children every afternoon of Fridays and whole day of Saturdays. Children not enrolled to the school are also welcome."
            hasHeader
            headerImage={divider}
            descriptionCN="w-[450px]"
          />
        </div>
      </div>
      <PromoSection classname="pb-12" />
    </section>
  );
}
