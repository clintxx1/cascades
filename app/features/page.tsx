import React from "react";
import { lato } from "@/lib/fonts";
import CustomCarousel from "@/components/carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Features | Cascades.ph",
};
export default function Features() {
  return (
    <section className="w-full h-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver my-16">
        Features
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20 mb-20">
        <div className="w-[500px]">
          <CustomCarousel></CustomCarousel>
        </div>
        <div className="w-full space-y-8">
          <p className="lg:text-[42px] text-4xl leading-[52px] font-semibold text-customBrown w-[500px]">
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
      <div className="flex items-center justify-between w-full gap-8 mt-14">
        <div className="space-y-8 w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            width={208}
            height={6}
            alt="divider"
            className="w-[208px] h-[6px]"
          />
          <p className="lg:text-[42px] text-4xl leading-[52px] font-semibold text-meatBrown w-[500px]">
            Healthy Lunch and Snacks are being served in the school.
          </p>
          <div className="flex items-center justify-center w-[600px]">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              In Cascades School, we prioritize serving healthy lunches and
              snacks to our students. In line with this commitment to nutritious
              eating, our Wanderers and Whole Day Kids actively participate in
              preparing their own meals. This hands-on approach not only fosters
              a sense of ownership and responsibility but also promotes a
              positive attitude towards healthy eating habits. By involving the
              students in meal preparation, we aim to instill valuable life
              skills and encourage a lifelong appreciation for wholesome and
              balanced nutrition.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/features_lunch.jpg"}
            alt="Image 1"
            width={443}
            height={442}
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-between w-full gap-8 mt-14">
        <div className="w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/features_safety_2x-768x901.jpg"
            }
            alt="Image 2"
            width={443}
            height={442}
          />
        </div>
        <div className="space-y-8 w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2.png"
            }
            width={208}
            height={6}
            alt="divider2"
            className="w-[208px] h-[6px]"
          />
          <p className="lg:text-[42px] text-4xl leading-[52px] font-semibold text-crystalBlue w-[500px]">
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
      </div> */}
      <div className="py-5">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={8}
          className="w-full h-[6px] my-12 px-8"
        />
      </div>
    </section>
  );
}
