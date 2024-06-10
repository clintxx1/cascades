import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Work With Us | Cascades.ph",
};
export default function CascadeCareers() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        Careers
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
        <div className="grid lg:place-items-start place-items-center">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/careers_banner_2x-985x1024.jpg"
            }
            alt="Image 1"
            width={612}
            height={663}
            className="object-contain"
          />
        </div>
        <div className="w-full space-y-8 lg:text-start text-center">
          <p className="lg:text-[42px] text-3xl font-semibold text-crystalBlue lg:w-[470px] w-full">
            Cascades School is seeking professionals who believe in the value of
            emergent curriculum
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver lg:w-[470px] w-full`}
          >
            and believe that they and the children are both teachers and
            lifelong learners in a constant changing environment. Kindly send
            your resume to{" "}
            <a href="mailto:careers@cascades.ph">careers@cascades.ph</a>
          </p>
          <div className="gap-20 flex-col py-16 hidden lg:flex">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
              }
              width={470}
              height={8}
              alt="divider"
              className="lg:w-[470px] w-full h-[8px]"
            />
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
              }
              width={470}
              height={8}
              alt="divider"
              className="lg:w-[470px] w-full h-[8px]"
            />
          </div>
        </div>
      </div>
      <div className="pt-24 pb-14">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
          }
          alt="longDiv1"
          width={1024}
          height={6}
          className="w-full h-[6px] lg:object-cover md:object-cover object-contain"
        />
      </div>
      <div className="flex lg:flex-row flex-col lg:items-end md:items-start items-center justify-start pb-24 w-full lg:px-36 lg:gap-0 md:gap-0 gap-8">
        <div className="mt-4 space-y-8 lg:text-start text-center">
          <p className="lg:text-[42px] text-3xl leading-[1.2em] font-semibold text-watermelonRed lg:text-start md:text-start text-center">
            Have questions?
          </p>
          <div className="flex items-center justify-start lg:w-[500px] w-full gap-4">
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
