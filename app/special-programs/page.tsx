import InfoCard from "@/components/infoCard";
import PromoSection from "@/components/promoSection";
import { LazyImage } from "@/components/ui/lazy-image";
import React from "react";
import { lato } from "@/lib/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Education | Cascades.ph",
};
export default function SpecialPrograms() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        Programs
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <LazyImage
              src={"https://ik.imagekit.io/cascades/cascades/Group-3-1.png"}
              alt={"primaryLogo"}
              width={64}
              height={64}
              className="lg:h-16 lg:w-16 w-12 h-12 object-contain"
            />
            <p className="lg:text-[42px] text-3xl leading-[1.2em] font-semibold text-meatBrown">
              Special Programs
            </p>
          </div>
          <p
            className={`${lato.className} lg:text-[20px] text-base italic leading-[36px] text-darkLiver lg:w-[470px] w-full pt-5 pb-12 lg:text-start text-center`}
          >
            Enrolled students in the Basic Programs can avail the 5% discount to
            these special classes
          </p>
          <InfoCard
            title="1. Cascades Play Program"
            hasSubtitle
            subtitle="18 MONTHS TO 3 YEARS OLD"
            description="The Cascades Play program, where our little ones start their first school experience. Our children are offered sensory activities which are great both for their little hands and developing minds. This program offers two hours of playtime using our invitation table and provocations areas. Give your little ones the chance to explore, create and learn in a safe and nurturing environment. For only Php10,000 and get 8 sessions of fun and learning you can use it between Monday to Thursday."
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
          />
          <InfoCard
            title="2. Bahaghari Program"
            hasSubtitle
            subtitle="3 YEARS OLD TO 9 YEARS OLD"
            description="A program designed to provide long term support and guidance for children with special needs. This program aims to help and achieve their goals and reach their full potential through targeted interventions and collaborative support from special education teachers and other professionals."
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
          />
        </div>
        <div className="relative">
          <LazyImage
            src={
              "https://ik.imagekit.io/cascades/cascades/secondary_banner_2x-1024x521.jpg"
            }
            alt={"image1"}
            width={1024}
            height={521}
            className="object-contain"
          />
          <InfoCard
            title="3. Child Minding Program"
            hasSubtitle
            subtitle="16 MONTHS TO 5 YEARS OLD"
            description="A program for child caregivers provides safe, educational environments for children while their parents are at work and take care of their basic needs, including dressing, feeding, and supervising play and nap times."
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
          />
          <InfoCard
            title="4. Special Classes"
            description="Special classes are offered to children every afternoon of Fridays and whole day of Saturdays. Children not enrolled to the school are also welcome."
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
          />
        </div>
      </div>
      <PromoSection classname="pb-12" />
    </section>
  );
}
