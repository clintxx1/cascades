import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { lato } from "../layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us | Cascades.ph",
};
export default function CascadeCareers() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        Careers
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/careers_banner_2x-985x1024.jpg"
          }
          alt="Image 1"
          width={612}
          height={663}
        />
        <div className="w-full space-y-8">
          <p className="text-[42px] font-semibold text-crystalBlue w-[470px]">
            Cascades International School is seeking professionals who believe
            in the value of emergent curriculum
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver w-[470px]`}
          >
            and believe that they and the children are both teachers and
            lifelong learners in a constant changing environment.
          </p>
          <div className="flex gap-20 flex-col py-16">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
              }
              width={470}
              height={8}
              alt="divider"
              className="w-[470px] h-[8px]"
            />
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-10.png"
              }
              width={470}
              height={8}
              alt="divider"
              className="w-[470px] h-[8px]"
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
