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
            title="1. Message us your inquiry and details"
            description={`
            &check; Child’s Name, Nick Name, Birthday, Age<br />
            &check; Parents Name, Viber/SMS Number, Email Address
            `}
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="2. Schedule a Campus Tour and Free 1-day Trial Class"
            description=""
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="3. Submit and fill out the following forms by email: "
            description={`
              <span style="padding-left: 30px;">3.1 New Student Requirements:</span><br />
              <span style="padding-left: 60px;">Enrollment Form</span><br />
              <span style="padding-left: 60px;">Fetcher’s Form and ID Picture</span><br />
              <span style="padding-left: 60px;">Photocopy of Birth Certificate</span><br />
              <span style="padding-left: 30px;">3.2 Transfering Student Requirements:</span><br />
              <span style="padding-left: 60px;">Recommendation Form accomplished by the previous center/school</span><br />
              <span style="padding-left: 60px;">Report Card</span><br />
            `}
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[650px]"
          />
          <InfoCard
            title="4. Assessment and Payment Process and Verification"
            description=""
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="5. Parents Circle Time (Orientation)"
            description=""
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
