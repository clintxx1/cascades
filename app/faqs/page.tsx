import InfoCard from "@/components/infoCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { lato } from "../layout";

export const metadata: Metadata = {
  title: "FAQs | Cascades.ph",
};
export default function Faqs() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        FAQs
      </p>
      <div className="grid grid-cols-2 gap-20">
        <div>
          <InfoCard
            title="1. What is the schedule for enrollment?"
            titleCN="text-blueSapphire w-[500px]"
            description="OPEN ENROLLMENT for the whole year given that there are still open slots."
            descriptionCN="w-[500px]"
          />
          <InfoCard
            title="2. Are there available discounts?"
            titleCN="text-blueSapphire w-[500px]"
            description="Get the 10% early bird discount if you reserve or enroll as early as August 26 – 30, 2019.
          <br />
          Contact us for inquiries on SIBLINGS and referral discounts."
            descriptionCN="w-[500px]"
          />
        </div>
        <div>
          <InfoCard
            title="3. Are there programs for children with special needs?"
            titleCN="text-blueSapphire w-[500px]"
            description="Cascades welcome children with special needs. They will be mainstreamed and be a part of the whole program as long as:<br />
          <li>they have approval from their physician / pediatrician allowing them to be included in a mainstream class.</li>
          <li>they have their own trained caregiver or mirror teacher.</li>
          <li>if the family does not have their own trained caregiver / mirror teacher, the school will help them find a guide teacher with special trainings for their child’s special needs.</li>"
            descriptionCN="w-[550px]"
          />
          <InfoCard
            title="4. How about ESL Students?"
            titleCN="text-blueSapphire w-[500px]"
            description="ESL Students (English as a second language) are welcome to the school and will be provided extra help to learn the language easily, and be able to have smooth transition to the new environment."
            descriptionCN="w-[500px]"
          />
        </div>
      </div>
      <div className="my-16">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
          }
          width={1024}
          height={6}
          alt="longDiv1"
          className="w-full h-[6px]"
        />
      </div>
      <div className="flex items-end justify-start pb-24 w-full px-36">
        <div className="mt-4 space-y-8">
          <p className="text-[42px] leading-[1.2em] font-semibold text-watermelonRed">
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
          className="text-watermelonRed text-center hover:text-white hover:bg-watermelonRed transition-colors duration-300 text-[28px] px-8 py-4 border-watermelonRed rounded-2xl border-[3px] italic"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
