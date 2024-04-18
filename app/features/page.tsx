import React from "react";
import { lato } from "../layout";
import CustomCarousel from "@/components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import divider from "@/public/header_copy_divider-copy-2.png";
import divider2 from "@/public/header_copy_divider_XL_teal-2.png";
import Image from "next/image";
import image1 from "@/public/features_lunch.jpg";
import image2 from "@/public/features_safety_2x-768x901.jpg";
import longDiv from "@/public/divider-XL-red-long-Copy-4-1024x7.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Features | Cascades.ph",
};
export default function Features() {
  return (
    <section className="w-full h-full">
      <p className="text-[28px] italic font-semibold text-darkLiver my-16">
        Features
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20 mb-20">
        <div className="w-[500px]">
          <CustomCarousel></CustomCarousel>
        </div>
        <div className="w-full space-y-8">
          <p className="text-[42px] leading-[52px] font-semibold text-customBrown w-[500px]">
            Aesthetically appealing and unique physical structure.
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver w-[500px] text-justify`}
          >
            The school is built as a “house” with child-sized furniture and
            tools. Repurposed furniture and small interactive installations will
            ignite children’s curiosity and wonder. Exploration tables are also
            set-up in the open area of the school. The unique environment will
            fuel the children’s creativity, giving them the idea that old things
            can turn into something beautiful.
            <br />
            <br />
            <br />
            The environment is the third teacher, is one of the principles in
            Reggio Emilia in which the school truly upholds. The
            materials/tools, table set-ups, and the arrangements are all well
            planned helping the children understand the concept being taught.
            Each corner, flooring, wall design, and the blank spaces serve
            certain purpose, and all to help the child build a very good
            learning foundation.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-3">
        <div className="space-y-8 w-full">
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <p className="text-[42px] leading-[52px] font-semibold text-meatBrown w-[500px]">
            Healthy Lunch and Snacks are being served in the school.
          </p>
          <div className="flex items-center justify-center w-[600px]">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              Children guided by care givers will prepare their own food for
              lunch and snacks. They will have a first-hand experience in the
              preparation of the meal. They will also learn to clean after
              themselves. This is a way to make each child appreciate the
              process.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image src={image1} alt="Image 1" width={443} height={442} />
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-3">
        <div className="w-full">
          <Image src={image2} alt="Image 2" width={443} height={442} />
        </div>
        <div className="space-y-8 w-full">
          <Image src={divider2} alt="divider2" className="w-[208px] h-[6px]" />
          <p className="text-[42px] leading-[52px] font-semibold text-crystalBlue w-[500px]">
            The school ensures the safety and welfare of each child.
          </p>
          <div className="flex items-center justify-center w-[600px]">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              This is done through a tracking bracelet that notifies parents
              when the child enters or leaves the school. This is further
              reinforced by highly trained and equipped security personnel and
              strategically placed CCTV cameras. Regular temperature checking
              upon entry of school premises is also implemented to safeguard a
              healthy environment.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <Image
          src={longDiv}
          alt="longDiv"
          className="w-full h-[6px] my-12 px-8"
        />
      </div>
    </section>
  );
}
