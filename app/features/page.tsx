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
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 mb-20 lg:place-items-start place-items-center">
        <div className="lg:w-[500px] md:w-[70%] w-[60%]">
          <CustomCarousel></CustomCarousel>
        </div>
        <div className="w-full space-y-8">
          <p className="lg:text-[42px] text-3xl leading-[52px] font-semibold text-customBrown lg:w-[500px] w-full lg:text-start text-center">
            Aesthetically appealing and unique physical structure.
          </p>
          <p
            className={`${lato.className} lg:text-[20px] text-base lg:leading-[36px] leading-8 text-darkLiver lg:w-[500px] w-full text-justify`}
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
      {/* <div className="flex lg:flex-row flex-col-reverse items-center justify-between w-full gap-8 mt-14">
        <div className="space-y-8 w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            width={208}
            height={6}
            alt="divider"
            className="lg:w-[208px] w-full object-contain h-[6px]"
          />
          <p className="lg:text-[42px] text-3xl leading-[52px] font-semibold text-meatBrown lg:w-[500px] w-full lg:text-start text-center">
            Healthy Lunch and Snacks are being served in the school.
          </p>
          <div className="flex items-center justify-center lg:w-[600px] w-full text-justify">
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver`}
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
        <div className="w-full grid lg:place-items-start place-items-center">
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/features/Pic1.png"}
            alt="Image 1"
            width={443}
            height={442}
          />
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
          className="w-full h-[6px] my-12 lg:px-8 lg:object-cover md:object-cover object-contain"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/features/Features.png"}
          alt="Image 1"
          width={1024}
          height={442}
          className="object-contain"
        />
      </div>
      <div className="py-5">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={8}
          className="w-full h-[6px] my-12 lg:px-8 lg:object-cover md:object-cover object-contain"
        />
      </div>
    </section>
  );
}
