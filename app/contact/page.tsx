import { Metadata } from "next";
import React from "react";
import { SchoolMap } from "./_components/map";
import Image from "next/image";
import InquiryForm from "./_components/inquiryForm";
import { Details } from "../_components/details";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Contact Us | Cascades.ph",
};
export default function Contact() {
  return (
    <section className="w-full h-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16 px-4">
        Get in Touch
      </p>
      <p
        className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-[470px] pt-5 pb-12 px-4`}
      >
        Schedule a visit or inquire now!
      </p>

      <SchoolMap />
      <div className="flex items-start justify-start gap-20 px-4">
        <div className="pb-20">
          <h2 className="text-darkLiver leading-[52px] font-semibold lg:text-[42px] text-4xl">
            Admission Department Information
          </h2>
          <Details
            label="Pre-school Campus Address:"
            value="6 Silangan St. Barangka Drive Mandaluyong City"
          />
          <Details
            label="Elementary Campus Address:"
            value="286 Sto. Rosario Plainview, Mandaluyong City"
          />
          <br />
          <br />
          <Details label="Office Hours:" value="9:00am to 5:00pm" />
          <br />
          <br />
          <Details
            label="Viber/SMS Contact Number:"
            value="<a href='tel:+63-927-029-3996'>+63 927-029-3996</a>"
          />
          <Details
            label="Email Address:"
            value="<a href='mailto:admission@cascades.ph'>admission@cascades.ph</a>"
          />
          <div className="py-8">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
              }
              width={490}
              height={8}
              alt="divider"
            />
          </div>
          <h2 className="text-darkLiver leading-[52px] font-semibold lg:text-[42px] text-4xl">
            Finance Department Information
          </h2>
          <Details
            label="Viber/SMS Contact Number:"
            value="<a href='tel:+63-960-375-5852'>+63 960-375-5852</a>"
          />
          <Details
            label="Email Address:"
            value="<a href='mailto:finance@cascades.ph'>finance@cascades.ph</a>"
          />
          <h2 className="text-darkLiver leading-[52px] font-semibold lg:text-[42px] text-4xl">
            Human Resource Department Information
          </h2>
          <Details
            label="Email Address:"
            value="<a href='mailto:careers@cascades.ph'>careers@cascades.ph</a>"
          />
        </div>
        <div className="w-full">
          <h2 className="text-darkLiver leading-[52px] font-semibold lg:text-[42px] text-4xl">
            Contact Form
          </h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
