import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { lato } from "../layout";
import InfoCard from "@/components/infoCard";

export const metadata: Metadata = {
  title: "Admissions | Cascades.ph",
};
export default function Enrollment() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        Admissions
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <p className="text-[42px] leading-[1.2em] font-semibold text-blueSapphire">
              Enrollment Process
            </p>
          </div>
          <p
            className={`${lato.className} text-[20px] italic leading-[36px] text-darkLiver w-[470px] pt-5 pb-12`}
          >
            OPEN ENROLLMENT for the whole year given that there are still open
            slots. New enrollees will be gradually mainstreamed into programs.
          </p>
        </div>
        <div className="relative">
          <InfoCard
            title="1. Visit the School"
            description="Schedule a visit to the school by contacting or emailing us at <strong>+63 927 029 3396</strong> or <strong><i>cascadesinternational@gmail.com</i></strong>. Visits are usually scheduled Monday to Friday, 4:00PM. All required forms will be given after the visit.”"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="2. Forms and Payment of Fees"
            description="Submit the Enrollment, Authorization, and Tuition Agreement together with the required fees. A separate form will be given for those who want to have the 4-week trial. Please fill out the form and submit it together with the 4-week trial fee."
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="3. Orientation"
            description="After submission of forms and payment, instructions on what needs to be prepared for the first day of class will be sent via email as well as the schedule of the Parents’/Guardians’ Orientation."
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
        </div>
      </div>
      <div className="py-5">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={6}
          className="w-full h-[6px] my-12 px-8"
        />
      </div>
    </section>
  );
}
