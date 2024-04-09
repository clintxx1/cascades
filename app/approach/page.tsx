import React from "react";
import { lato } from "../layout";
import image1 from "@/public/approach_banner_2x-858x1024.jpg";
import image2 from "@/public/approach_celebrate_2x-1024x850.jpg";
import image3 from "@/public/path_programs_2x.jpg";
import Image from "next/image";
import divider from "@/public/header_copy_divider_XL_teal-2.png";
import longDiv from "@/public/divider-XL-red-long-1024x7.png";
import Link from "next/link";

export default function Approach() {
  return (
    <section className="w-full h-full">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="grid gap-5">
          <p className="text-[28px] italic font-semibold text-customDark mt-16">
            Approach
          </p>
          <h2 className="text-customRed font-semibold text-[42px]">
            Reggio-Emilia Approach
          </h2>
          <p
            className={`${lato.className} text-customDark text-[20px] leading-[36px] w-[520px] mb-28`}
          >
            An educational philosophy wherein there are three educators; the
            teacher, the child and the environment. Children are active
            participators in their own learning and teachers encourage child
            initiated activities. Learning is done through multiple ways a child
            can learn.{" "}
          </p>
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <p className="text-[28px] font-semibold text-customDark">Mixed Age</p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            All children (2.5-5.5 years old) will be in one classroom. This
            gives them the opportunity to adjust to different types and levels
            of students in terms of understanding, maturity and capacity to
            move. This also allows them the experience of depending and being
            depended on.
          </p>
          <p className="text-[28px] font-semibold text-customDark mt-28">
            Co-teaching
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            Experienced artists and professionals from different occupations are
            invited to share their knowledge and skills. They collaborate with
            our teachers to plan enjoyable activities that will introduce the
            children to different professional fields in line with concepts
            being taught.
          </p>
        </div>
        <div className="mt-28">
          <Image src={image1} alt="image 1" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="mt-8">
          <Image src={image2} alt="image 2" />
        </div>
        <div className="grid gap-5 mt-28">
          <p className="text-[28px] font-semibold text-customDark">
            Individualized Tracking
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            Teachers will document the progress of each child by tracking the
            skills and concepts acquired, which will then be shared to the
            parents. The tracking will show what skills and concepts are already
            mastered, needs improvement, or not yet introduced. The target
            skills are based on DepEd requirements, and guided by
            age-appropriate developmental milestones of a child.
          </p>
          <p className="text-[28px] font-semibold text-customDark mt-28">
            Celebrating Creativity
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            The children will document their work in portfolios which will be
            showcased on a yearly exhibit, giving them the chance to earn or
            donate to the school’s supported charities.
          </p>
          <p className="text-[28px] font-semibold text-customDark mt-28">
            Parents -Teacher Collab
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            Parents are encouraged to be involved in the Cascades community.
            Parents and guardians are introduced to the school’s unique teaching
            approach through programs that involves the entire school and the
            participating families.
          </p>
          <p className="text-[28px] font-semibold text-customDark mt-28">
            Spiral Progression
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-customDark w-[611px]`}
          >
            The Reggio-Emilia approach is further anchored through spiral
            progression of discovery based learning. Instead of learning in a
            linear process, concepts and skills on different subjects are
            revisited at each level with increasing depth and complexity.
          </p>
        </div>
      </div>
      <Image src={longDiv} alt="longDiv" className="w-full h-[6px] my-12" />
      <div className="flex items-center justify-around pb-24">
        <Image src={image3} alt="image 3" width={304} height={304} />
        <div className="mt-12 space-y-8">
          <p className="text-[42px] leading-[1.2em] font-semibold text-[#1c6a88]">
            Check our programs
          </p>
          <div className="flex items-center justify-center w-[700px] gap-4">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-customDark`}
            >
              Cascades International School prides itself in providing a
              modified Reggio curriculum that aims to instill a lifelong love
              for learning to its students.
            </p>
            <Link
              href={"/primary-program"}
              className="text-[#1c6a88] hover:text-white hover:bg-[#1c6a88] transition-colors duration-300 text-[28px] px-4 py-4 border-[#1c6a88] rounded-lg border-[3px] italic w-[520px]"
            >
              See the offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
