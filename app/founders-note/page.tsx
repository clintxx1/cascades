import React from "react";
import Image from "next/image";
import { josefinSans, lato } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Founder | Cascades.ph",
};
export default function FoundersNote() {
  return (
    <section className="w-full">
      <div className="flex items-start justify-center gap-8 w-full pb-24">
        <div className="space-y-8">
          <p className="text-[28px] italic font-semibold text-darkLiver mt-16">
            Founder&apos;s Note
          </p>
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/Group-Copy.png"}
            width={189}
            height={216}
            alt="image 1"
          />
          <div className="text-darkLiver text-[20px]">
            <p>
              Irene Theresa
              <br />
              M. Mawo
              <br />
              Founder/Directress
            </p>
          </div>
        </div>
        <div
          className={`${lato.className} text-[20px] text-darkLiver w-[550px] mt-32 text-justify`}
        >
          “Hello there,
          <br />
          <br />
          <p
            className={`${josefinSans.className} text-[42px] leading-[1.2em] text-crystalBlue w-[550px] font-semibold`}
          >
            My name is Irene, a teacher and a mother to two beautiful children,
            Aeon and Sage.
          </p>
          <br />
          When my husband and I decided to have kids, the teacher in me began
          thinking about the kind of school I wanted for my children.
          <br />
          <br />
          <br />
          As children, we develop our early sensibilities towards the world from
          home. As an educator, I realized the school’s role in the development
          of these sensibilities. This became the key inspiration to build
          Cascades International School by merging the elements of a house,
          school and home.
          <br />
          <br />
          <br />
          At Cascades, our house is more than a structure; it is a space where
          children will feel safe and comfortable to explore. Our school goes
          beyond prepackaged education; it respects the many ways a child can
          learn. Our home is more than a concept; it is a place where children
          will feel accepted, acknowledged and validated.
          <br />
          <br />
          <br />
          We have so much to offer and we are so proud to welcome you at
          Cascades International School!
          <br />
          <br />
          <br />
          In our house, you will find well-designed facilities that ensure
          enriching experiences for children and parents alike. It provides
          areas for parents to work, relax and foster new friendships. In our
          school, you will find the most passionate teachers and staff, trained
          and equipped to provide children with the best education to help them
          succeed in life. In our home, you will find unique services, such as
          the in-school baby-sitting program. It provides help for parents by
          following the child’s routine at home within a healthy community.
          <br />
          <br />
          <br />
          Here you will find all types of learners, welcoming children with
          special needs. We promote diversity, celebrate individuality and
          respect every child’s learning process.
          <br />
          <br />
          <br />
          At Cascades International School, you will find a second home, the
          kind of school I want my own children to be in. “
        </div>
      </div>
    </section>
  );
}
