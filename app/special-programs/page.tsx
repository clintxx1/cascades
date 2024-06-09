import InfoCard from "@/components/infoCard";
import PromoSection from "@/components/promoSection";
import Image from "next/image";
import React from "react";
import { lato } from "@/lib/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Education | Cascades.ph",
};
export default function SpecialPrograms() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        Programs
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <Image
              src={"https://ik.imagekit.io/cascades/cascades/Group-3-1.png"}
              alt={"primaryLogo"}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <p className="lg:text-[42px] text-4xl leading-[1.2em] font-semibold text-meatBrown">
              Special Programs
            </p>
          </div>
          <p
            className={`${lato.className} text-[20px] italic leading-[36px] text-darkLiver w-[470px] pt-5 pb-12`}
          >
            Enrolled students in the Basic Programs can avail the 5% discount to
            these special classes
          </p>
          <InfoCard
            title="1. Hiraya Play"
            description="The HIRAYA Play program, where our little ones start their first school experience. Our children are offered sensory activities which are great both for their little hands and developing minds. This program offers two hours of playtime using our invitation table and provocations areas. Give your little ones the chance to explore, create and learn in a safe and nurturing environment. For only Php10,000 and get 8 sessions of fun and learning you can use it between Monday to Thursday."
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="2. Bahaghari Program"
            description="A program designed to provide long term support and guidance for children with special needs. This program aims to help and achieve their goals and reach their full potential through targeted interventions and collaborative support from special education teachers and other professionals."
            descriptionCN="w-[450px]"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
          />
        </div>
        <div className="relative">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/secondary_banner_2x-1024x521.jpg"
            }
            alt={"image1"}
            width={1024}
            height={521}
            className="object-contain"
          />
          <InfoCard
            title="3. Baby-Mama System"
            description="A baby-sitting program wherein caretakers care for babies under 3 years old by following and developing their home routine or schedule. Special classes are also offered for parents / guardians and their babies under 3 years old."
            descriptionCN="w-[450px]"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
          />
          <InfoCard
            title="4. Play-area Membership"
            description="A membership will be given to the child and their accompanying adult to have a full access to the play area of the school. The child is requested to bring a pair of extra clothes, and their hygiene kit."
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="5. Parent and Child Classes"
            description="(Children 6 mos to 2.5 yrs old)"
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
          <InfoCard
            title="6. Special Classes"
            description="Special classes are offered to children every afternoon of Fridays and whole day of Saturdays. Children not enrolled to the school are also welcome."
            hasHeader
            headerImage={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider-copy-2.png"
            }
            descriptionCN="w-[450px]"
          />
        </div>
      </div>
      <PromoSection classname="pb-12" />
    </section>
  );
}
