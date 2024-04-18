import { Metadata } from "next";
import React from "react";
import { SchoolMap } from "./_components/map";
import { lato } from "../layout";
import divider from "@/public/divider-XL-red-long-Copy-10.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InquiryForm from "./_components/inquiryForm";
import { Details } from "../_components/details";

export const metadata: Metadata = {
  title: "Contact Us | Cascades.ph",
};
export default function Contact() {
  return (
    <section className="w-full h-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16 px-4">
        Get in Touch
      </p>
      <p
        className={`${lato.className} text-[20px] leading-[36px] text-darkLiver w-[470px] pt-5 pb-12 px-4`}
      >
        Schedule a visit or inquire now!
      </p>

      <SchoolMap />
      <div className="flex items-start justify-start gap-20 px-4">
        <div className="pb-20">
          <h2 className="text-darkLiver leading-[52px] font-semibold text-[42px]">
            General Inquiries
          </h2>
          <Details
            label="Email at us"
            value="cascadesinternational @gmail.com"
          />
          <Details
            label="School Address"
            value="#6 Silangan Street, Barangay Barangka, Mandaluyong City,
            Philippines"
          />
          <Details label="Office Time" value="8:00 AM to 6:00 PM" />
          <Details
            label="Call us at"
            value="
            <a href='tel:+63-927-029-3996'>+63 927-029-3996 (Globe)</a>
            <br />
            <a href='tel:+63-919-581-9862'>+63 919-581-9862 (Smart)</a>
            <br />
            <a href='tel:+63-2-8253-1910'>+63 (02) 8253-1910 (landline)</a>"
          />
          <Details
            label="Viber / Messenger"
            value="<a href='tel:+63-927-029-3996'>+63 927-029-3996</a>"
          />
          <div className="py-8">
            <Image src={divider} alt="divider" />
          </div>
          <h2 className="text-darkLiver leading-[52px] font-semibold text-[42px]">
            Accounting
          </h2>
          <Details
            label="Email at us"
            value="cascadesinternational @gmail.com"
          />
          <Details
            label="Call us at"
            value="<a href='tel:+63-927-029-3996'>+63 927-029-3996</a>"
          />
        </div>
        <div className="w-full">
          <h2 className="text-darkLiver leading-[52px] font-semibold text-[42px]">
            Contact Form
          </h2>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
