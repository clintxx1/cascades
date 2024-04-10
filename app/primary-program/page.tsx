import Image from "next/image";
import React from "react";
import primaryLogo from "@/public/Group-3-Copy.png";
import InfoCard from "@/components/infoCard";
import image1 from "@/public/primary_banner_2x-1024x502.jpg";
import image2 from "@/public/home_experience@2x.jpg";
import { josefinSans, lato } from "../layout";
import Link from "next/link";
import PromoSection from "@/components/promoSection";

export default function PrimaryProgram() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-customDark mt-16">
        Programs
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="mt-24">
          <div className="flex items-end justify-start gap-5">
            <Image
              src={primaryLogo}
              alt={"primaryLogo"}
              className="h-16 w-16 object-contain"
            />
            <p className="text-[42px] leading-[1.2em] font-semibold text-customBlue">
              Primary Program
            </p>
          </div>
          <InfoCard
            title="Gaining Independence"
            description="Children are taught different life skills that will help them be more independent. Simple chores will give them a sense of accountability and care for their surroundings. Life Skill will encourage self-discipline to the children."
          />
          <InfoCard
            title="Explore, Discover, and Share"
            description="Concepts are taught through activities that involves sensory observations allowing the children to collaborate and share what they observed and discovered."
          />
          <InfoCard
            title="Inventor’s Time"
            description="Children are guided by a professional to work on projects that may last for weeks or more depending on the time needed for the children to finish it."
          />
        </div>
        <div>
          <Image src={image1} alt={"image1"} className="object-contain" />
          <InfoCard
            title="Tell-A-Tale"
            description="Children listen to different stories and retell them in interesting ways through drawings, picture-story, puppetry,mini-movies, slide shows, and shadow plays based on how theyunderstand and remember it."
          />
          <InfoCard
            title="Mentorship"
            description="Professionals in different fields of Art (Visual Arts, Music, Dance and Theater) will help children create their own art work or performances exposing them to real tools and unique processes of the artists."
          />
        </div>
      </div>
      <PromoSection />
      <div className="flex items-center justify-start w-full gap-12 pb-20">
        <Image src={image2} alt="Image 1" width={388} height={388} />
        <div className="space-y-8">
          <p className="text-[42px] font-semibold text-customOrange2">
            Experience Cascades.
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[500px]`}
          >
            We are more than happy to welcome you to our home. Come see our
            first class facilities and see for yourself why this school is the
            best fit for your child.
          </p>
          <div className="flex items-center justify-center w-[600px] gap-5">
            <Link
              href={"/contact"}
              className="w-1/3 hover:text-customOrange2 hover:bg-transparent text-white bg-customOrange2 transition-colors duration-300 text-[28px] px-4 py-4 border-customOrange2 rounded-lg border-[3px] italic"
            >
              Book a tour!
            </Link>
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-customDark w-2/3`}
            >
              or read the &nbsp;
              <a
                href="/enrollment"
                className={`text-customDark italic cursor-pointer underline ${josefinSans.className}`}
              >
                enrollment process
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
