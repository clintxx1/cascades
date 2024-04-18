import { Metadata } from "next";
import React from "react";
import { lato } from "../layout";
import Image from "next/image";
import image1 from "@/public/scholarship_banner_2x-1024x974.jpg";
import longDiv1 from "@/public/Group-5-1024x6.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scholarships | Cascades.ph",
};
export default function Scholarship() {
  return (
    <section className="w-full">
      <p className="text-[28px] italic font-semibold text-darkLiver my-16">
        Admissions
      </p>
      <div className="flex items-start justify-center gap-20 w-full">
        <Image src={image1} alt="Image 1" width={448} height={427} />
        <div className="space-y-8">
          <p className="text-[42px] font-semibold text-meatBrown">
            Scholarship
          </p>
          <p className="text-[28px] font-semibold text-darkLiver">
            Kids & Ideas
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver w-[580px]`}
          >
            Cascades International School supports its own foundation, Kids and
            Ideas, which gives a Reggio Emilia quality education to children
            from underprivileged families.
            <br />
            <br />
            We give the kids special programs, training and educational
            materials for free. Their parents will also be trained by
            professional artists, bakers, farmers and furniture makers. Giving
            them skills to produce quality products that can be sold locally and
            abroad to generate income for their families.
          </p>
        </div>
      </div>
      <div className="my-16 px-32">
        <Image src={longDiv1} alt="longDiv1" className="w-full h-[6px]" />
      </div>
      <div className="flex items-end justify-start pb-24 w-full px-36">
        <div className="mt-4 space-y-8">
          <p className="text-[42px] leading-[1.2em] font-semibold text-customBrown">
            Get in touch
          </p>
          <div className="flex items-center justify-center w-[500px] gap-4">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              To learn more about how you can be a part of Kids & Ideas, visit
              our Contact Us page:
            </p>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="text-customBrown text-center hover:text-white hover:bg-customBrown transition-colors duration-300 text-[28px] px-8 py-4 border-customBrown rounded-2xl border-[3px] italic"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
