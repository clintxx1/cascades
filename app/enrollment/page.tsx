import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { lato } from "@/lib/fonts";
import InfoCard from "@/components/infoCard";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions | Cascades.ph",
};
export default function Enrollment() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        Admissions
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <p className="lg:text-[42px] text-3xl leading-[1.2em] font-semibold text-blueSapphire">
              Enrollment Process
            </p>
          </div>
          <p
            className={`${lato.className} lg:text-[20px] text-base italic leading-[36px] text-darkLiver lg:w-[470px] w-full pt-5 pb-12 lg:text-start text-center`}
          >
            OPEN ENROLLMENT for the whole year given that there are still open
            slots. New enrollees will be gradually mainstreamed into programs.
          </p>
        </div>
        <div className="relative">
          <InfoCard
            title="1. Message us your inquiry and details"
            description={`
            &check;&nbsp;Child’s Name, Nick Name, Birthday, Age<br />
            &check;&nbsp;Parents Name, Viber/SMS Number, Email Address
            `}
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center text-left"
          />
          <InfoCard
            title="2. Schedule a Campus Tour and Free 1-day Trial Class"
            description=""
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
          />
          <InfoCard
            title="3. Submit and fill out the following forms by email: "
            description={`
              <span style="padding-left: 30px;">3.1 New Student Requirements:</span><br />
              <span style="padding-left: 60px;">Enrollment Form</span><br />
              <span style="padding-left: 60px;">Fetcher’s Form and ID Picture</span><br />
              <span style="padding-left: 60px;">Photocopy of Birth Certificate</span><br />
              <span style="padding-left: 30px;">3.2 Transfering Student Requirements:</span><br />
              <span class="customIndent">Recommendation Form accomplished by the previous center/school</span><br />
              <span style="padding-left: 60px;">Report Card</span><br />
            `}
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[650px] md:w-2/3 w-full mx-auto text-start"
          />
          <InfoCard
            title="4. Assessment, Payment Process and Verification"
            description=""
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
          />
          <InfoCard
            title="5. Parents Circle Time (Orientation)"
            description=""
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="lg:w-[450px] w-full grid lg:place-items-start place-items-center"
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
          className="w-full h-[6px] my-12 lg:px-8 lg:object-cover md:object-cover object-contain"
        />
      </div>
    </section>
  );
}
