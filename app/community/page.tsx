import React from "react";
import CommunityCard from "@/components/communityCard";
import { Metadata } from "next";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "The Cascades Community | Cascades.ph",
};

export default function Community() {
  return (
    <section className="w-full h-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16">
        Community
      </p>
      <p
        className={`${lato.className} text-darkLiver lg:text-[20px] lg:leading-[36px] leading-8 lg:w-[520px] w-full mb-28 lg:text-start text-justify`}
      >
        Our child-centered community is shaped by experts in child rearing and
        education dedicated to providing support for families and instilling
        lifelong love of learning in children.
      </p>
      <CommunityCard
        // className="w-full"
        firstImage={"https://ik.imagekit.io/cascades/cascades/founder/Pic1.png"}
        firstTitle="IRENE THERESA MAWO"
        firstName="Founder and President"
        firstDescription="Head Pedagogista"
      />
      <div className="hidden lg:flex lg:flex-col lg:flex-shrink">
        <CommunityCard
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic2.png"
          }
          firstTitle="IRENE MARIA SALUD MAWO"
          firstName="Officer-in-Charge, Sibol Main Campus Mandaluyong City"
          firstDescription="Lead, Atelier of Life "
          hasSecondData
          secondImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic3.png"
          }
          secondTitle="CATHRINE GO"
          secondName="Officer-in-Charge, Sibol QC"
          secondDescription="Lead, Atelier of Sound and Movement"
          hasThirdData
          thirdImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic4.png"
          }
          thirdTitle="ANGEL GANUB"
          thirdName="Officer-in-Charge, Hiraya Elementary Mandaluyong City"
          thirdDescription="Coordinator for Bahaghari Program"
        />
        <CommunityCard
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic5.png"
          }
          firstTitle="RANDOLPH MARIBOJOC"
          firstName="Cascades Head Atelierista"
          // firstDescription="Likha Village Head "
          hasSecondData
          secondImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic6.png"
          }
          secondTitle="BREN CEZAR VALENCIANO"
          secondName="Chief Operation Officer"
          secondDescription="Head for Safety and Health"
        />
      </div>
      <div className="block lg:hidden">
        <CommunityCard
          className="w-full"
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic2.png"
          }
          firstTitle="IRENE MARIA SALUD MAWO"
          firstName="Officer-in-Charge, Sibol Main Campus Mandaluyong City"
          firstDescription="Lead, Atelier of Life"
        />
        <CommunityCard
          className="w-full"
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic3.png"
          }
          firstTitle="CATHRINE GO"
          firstName="Officer-in-Charge, Sibol QC"
          firstDescription="Lead, Atelier of Sound and Movement"
        />
        <CommunityCard
          className="w-full"
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic4.png"
          }
          firstTitle="ANGEL GANUB"
          firstName="Officer-in-Charge, Hiraya Elementary Mandaluyong City"
          firstDescription="Coordinator for Bahaghari Program"
        />
        <CommunityCard
          className="w-full"
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic5.png"
          }
          firstTitle="RANDOLPH MARIBOJOC"
          firstName="Cascades Head Atelierista"
          // firstDescription="Likha Village Head"
        />
        <CommunityCard
          className="w-full"
          firstImage={
            "https://ik.imagekit.io/cascades/cascades/community/Pic6.png"
          }
          firstTitle="BREN CEZAR VALENCIANO"
          firstName="Chief Operation Officer"
          firstDescription="Head for Safety and Health"
        />
      </div>
    </section>
  );
}
