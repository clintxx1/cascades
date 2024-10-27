import { lato } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function SecondSection() {
  return (
    <section className="py-20 lg:px-[10%] px-6 mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full lg:gap-20 gap-10">
        <div className="space-y-8 w-full">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-1-1.png"
            }
            width={208}
            height={6}
            alt="divider"
            className="lg:w-[208px] w-full lg:object-cover object-contain h-[6px]"
          />
          <p className="lg:text-[42px] text-3xl font-semibold text-[#9a5600]">
            THE ENVIRONMENT
            <br />
            IS THE THIRD TEACHER
          </p>
          <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver lg:text-start text-center">
            School Features
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center w-full lg:text-start text-justify gap-10">
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver`}
            >
              The environment is the third teacher emphasizes the crucial role
              of physical surroundings in education.
            </p>
            <Link
              href={"/features"}
              className="text-[#1c6a88] hover:text-white text-center hover:bg-[#1c6a88] transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-[#1c6a88] rounded-lg border-[3px] italic flex-shrink-0"
            >
              Read more
            </Link>
          </div>
        </div>
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/home/Pic2.png"}
          alt="Image 1"
          width={612}
          height={663}
          className="w-full flex-shrink-0 object-contain"
        />
      </div>
    </section>
  );
}
