import React from "react";
import { lato } from "../layout";
import CommunityCard from "@/components/communityCard";
import irene from "@/public/irene_2x.jpg";
import gian from "@/public/gian_2x.jpg";
import bren from "@/public/bren_2x.jpg";
import zenith from "@/public/zenith_2x.jpg";
import fatima from "@/public/dalynn_2x.jpg";
import randolph from "@/public/budjok_2x.jpg";

export default function Community() {
  return (
    <section className="w-full h-full">
      <p className="text-[28px] italic font-semibold text-customDark mt-16">
        Community
      </p>
      <p
        className={`${lato.className} text-customDark text-[20px] leading-[36px] w-[520px] mb-28`}
      >
        Our child-centered community is shaped by experts in child rearing and
        education dedicated to providing support for families and instilling
        lifelong love of learning in children.
      </p>
      <CommunityCard
        className="w-full"
        firstImage={irene}
        firstTitle="Founder/Directress"
        firstName="Irene Theresa M. Mawo"
        firstDescription="Irene is a graduate of Secondary Education major in Biological Science. After graduating magna cum laude she immediately took her Master’s in teaching General Science then pursued her Master’s in Early Childhood Education. She has been teaching for over a decade now in both local and international schools, having spent years as head teacher before deciding to build Cascades International School."
      />
      <CommunityCard
        firstImage={gian}
        firstTitle="Vice President / Art Director"
        firstName="Gian V. Mawo"
        hasDivider
        hasSecondData
        secondImage={bren}
        secondTitle="Head of KAI Foundation / Project Development Officer"
        secondName="Bren Cezar C. Valenciano"
      />
      <CommunityCard
        firstImage={zenith}
        firstTitle="Finance Officer"
        firstName="Zenith O. Pascual"
        hasDivider
        hasSecondData
        isReversed
        secondImage={fatima}
        secondTitle="Secretary"
        secondName="Fatima Dalynn S. Mendoza"
      />
      <CommunityCard
        firstImage={randolph}
        firstTitle="Atelierista"
        firstName="Randolph Maribojoc"
        hasDivider
        hasSecondData
      />
    </section>
  );
}
