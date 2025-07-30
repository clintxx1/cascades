import InfoCard from "@/components/infoCard";
import { Metadata } from "next";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import React from "react";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "FAQs | Cascades.ph",
};
export default function Faqs() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        FAQs
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:place-items-start place-items-center">
        <div>
          <InfoCard
            title="1. What is the schedule for enrollment?"
            titleCN="text-blueSapphire lg:lg:w-[500px] w-full lg:text-start text-center w-full"
            description="OPEN ENROLLMENT for the whole year given that there are still open slots."
            descriptionCN="lg:w-[500px] w-full lg:text-start text-center"
          />
          <InfoCard
            title="2. Are there programs for children with special needs?"
            titleCN="text-blueSapphire lg:lg:w-[500px] w-full lg:text-start text-center w-full"
            description="Cascades welcome children with special needs. They will be mainstreamed and be a part of the whole program as long as:<br />
          <li>they have approval from their physician / pediatrician allowing them to be included in a mainstream class.</li>
          <li>they have their own trained caregiver or mirror teacher.</li>
          <li>if the family does not have their own trained caregiver / mirror teacher, the school will help them find a guide teacher with special trainings for their child’s special needs.</li>"
            descriptionCN="lg:w-[550px] md:w-2/3 mx-auto w-full"
          />
          {/* <InfoCard
            title="2. Are there available discounts?"
            titleCN="text-blueSapphire lg:lg:w-[500px] w-full lg:text-start text-center w-full"
            description="Get the 10% early bird discount if you reserve or enroll as early as August 26 – 30, 2019.
          <br />
          Contact us for inquiries on SIBLINGS and referral discounts."
            descriptionCN="lg:w-[500px] w-full lg:text-start text-center"
          /> */}
        </div>
        <div>
          <InfoCard
            title="3. How about ESL Students?"
            titleCN="text-blueSapphire lg:lg:w-[500px] w-full lg:text-start text-center w-full"
            description="ESL Students (English as a second language) are welcome to the school and will be provided extra help to learn the language easily, and be able to have smooth transition to the new environment."
            descriptionCN="lg:w-[500px] w-full lg:text-start text-center"
          />
        </div>
      </div>
      <div className="my-16">
        <LazyImage
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
          }
          width={1024}
          height={6}
          alt="longDiv1"
          className="w-full h-[6px] lg:object-cover md:object-cover object-contain"
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:items-end md:items-start items-center justify-start pb-24 w-full lg:px-36 lg:gap-0 md:gap-0 gap-8">
        <div className="mt-4 space-y-8">
          <p className="lg:text-[42px] text-3xl leading-[1.2em] font-semibold text-watermelonRed lg:text-start md:text-start text-center">
            Have questions?
          </p>
          <div className="flex items-center justify-start lg:w-[500px] w-full lg:text-start text-center gap-4">
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver`}
            >
              For more information, visit our Contact Us page:
            </p>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="text-watermelonRed text-center hover:text-white hover:bg-watermelonRed transition-colors duration-300 lg:text-[28px] text-[24px] px-8 py-4 border-watermelonRed rounded-2xl border-[3px] italic"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
