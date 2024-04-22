import React from "react";
import { lato } from "../layout";
import CommunityCard from "@/components/communityCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cascades Community | Cascades.ph",
};

export default function Community() {
  return (
    <section className="w-full h-full">
      <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
        Community
      </p>
      <p
        className={`${lato.className} text-darkLiver text-[20px] leading-[36px] w-[520px] mb-28`}
      >
        Our child-centered community is shaped by experts in child rearing and
        education dedicated to providing support for families and instilling
        lifelong love of learning in children.
      </p>
      <CommunityCard
        className="w-full"
        firstImage={"https://ik.imagekit.io/cascades/cascades/irene_2x.jpg"}
        firstTitle="Founder/Directress"
        firstName="Irene Theresa M. Mawo"
        firstDescription="Irene is a graduate of Secondary Education major in Biological Science. After graduating magna cum laude she immediately took her Master’s in teaching General Science then pursued her Master’s in Early Childhood Education. She has been teaching for over a decade now in both local and international schools, having spent years as head teacher before deciding to build Cascades International School."
      />
      <CommunityCard
        firstImage={"https://ik.imagekit.io/cascades/cascades/gian_2x.jpg"}
        firstTitle="Vice President / Art Director"
        firstName="Gian V. Mawo"
        hasDivider
        hasSecondData
        secondImage={"https://ik.imagekit.io/cascades/cascades/bren_2x.jpg"}
        secondTitle="Head of KAI Foundation / Project Development Officer"
        secondName="Bren Cezar C. Valenciano"
      />
      <CommunityCard
        firstImage={"https://ik.imagekit.io/cascades/cascades/zenith_2x.jpg"}
        firstTitle="Finance Officer"
        firstName="Zenith O. Pascual"
        hasDivider
        hasSecondData
        isReversed
        secondImage={"https://ik.imagekit.io/cascades/cascades/dalynn_2x.jpg"}
        secondTitle="Secretary"
        secondName="Fatima Dalynn S. Mendoza"
      />
      <CommunityCard
        firstImage={"https://ik.imagekit.io/cascades/cascades/budjok_2x.jpg"}
        firstTitle="Atelierista"
        firstName="Randolph Maribojoc"
        hasDivider
        hasSecondData
      />
    </section>
  );
}
