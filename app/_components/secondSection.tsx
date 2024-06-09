import { lato } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function SecondSection() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full lg:gap-20 gap-10">
        <div className="space-y-8 lg:w-3/4 w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-1-1.png"
            }
            width={208}
            height={6}
            alt="divider"
            className="w-[208px] h-[6px]"
          />
          <p className="lg:text-[42px] text-4xl font-semibold text-[#9a5600]">
            Student Health, Safety
            <br />
            and Well-being a Priority.
          </p>
          <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver lg:text-start text-center">
            School Features
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center lg:w-[600px] w-full lg:text-start text-justify lg:gap-0 gap-10">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-darkLiver`}
            >
              The school safeguards its students to explore and learn in a risk
              free environment. The facilities and services are constantly
              improved to ensure a safe and nurturing environment for each
              child.
            </p>
            <Link
              href={"/features"}
              className="text-[#1c6a88] hover:text-white text-center hover:bg-[#1c6a88] transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-[#1c6a88] rounded-lg border-[3px] italic lg:w-[600px]"
            >
              Read more
            </Link>
          </div>
        </div>
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/homepage_features_2x-1-1024x950.jpg"
          }
          alt="Image 1"
          width={612}
          height={663}
          className="lg:w-full lg:h-full md:w-[512px] md:h-[563px] w-[412px] h-[463px] flex-shrink-0 object-contain"
        />
      </div>
    </section>
  );
}
