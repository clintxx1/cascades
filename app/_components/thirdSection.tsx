import { lato } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function ThirdSection() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full gap-12">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/home_experience@2x.jpg"
          }
          alt="Image 1"
          width={612}
          height={663}
          className="lg:w-full lg:h-full md:w-[512px] md:h-[563] w-[412px] h-[463px] flex-shrink-0 object-contain"
        />
        <div className="space-y-8">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2-1.png"
            }
            height={6}
            width={208}
            alt="divider"
            className="w-[208px] h-[6px]"
          />
          <p className="lg:text-[42px] text-3xl font-semibold text-watermelonRed">
            Experience Cascades.
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver lg:w-[500px] w-full lg:text-start text-justify`}
          >
            We are more than happy to welcome you to our home. Come see our
            first class facilities and see for yourself why this school is the
            best fit for your child.
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center lg:w-[600px] w-full gap-5">
            <Link
              href={"/contact"}
              className="lg:w-1/3 w-full hover:text-watermelonRed hover:bg-transparent text-center text-white bg-[#c04545] transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-[#c04545] rounded-lg border-[3px] italic"
            >
              Book a tour!
            </Link>
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver lg:w-2/3 w-full`}
            >
              or read the{" "}
              <a
                href="/enrollment"
                className="text-watermelonRed italic font-semibold cursor-pointer underline"
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
