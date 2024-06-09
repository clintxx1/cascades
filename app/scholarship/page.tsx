import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Scholarships | Cascades.ph",
};
export default function Scholarship() {
  return (
    <section className="w-full">
      <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver my-16">
        Admissions
      </p>
      <div className="flex items-start justify-center gap-20 w-full">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/scholarship_banner_2x-1024x974.jpg"
          }
          alt="Image 1"
          width={448}
          height={427}
        />
        <div className="space-y-8">
          <p className="lg:text-[42px] text-4xl font-semibold text-meatBrown">
            Scholarship
          </p>
          <p className="lg:text-[28px] text-[24px] font-semibold text-darkLiver">
            Kids & Ideas
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-[580px]`}
          >
            Cascades School supports its own foundation, Kids and Ideas, which
            gives a Reggio Emilia quality education to children from
            underprivileged families.
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
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/Group-5-1024x6.png"}
          alt="longDiv1"
          width={1024}
          height={6}
          className="w-full h-[6px]"
        />
      </div>
      <div className="flex items-end justify-start pb-24 w-full px-36">
        <div className="mt-4 space-y-8">
          <p className="lg:text-[42px] text-4xl leading-[1.2em] font-semibold text-customBrown">
            Get in touch
          </p>
          <div className="flex items-center justify-center w-[500px] gap-4">
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver`}
            >
              To learn more about how you can be a part of Kids & Ideas, visit
              our Contact Us page:
            </p>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="text-customBrown text-center hover:text-white hover:bg-customBrown transition-colors duration-300 lg:text-[28px] text-[24px] px-8 py-4 border-customBrown rounded-2xl border-[3px] italic"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
