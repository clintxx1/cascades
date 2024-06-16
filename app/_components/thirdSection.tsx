import { lato } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function ThirdSection() {
  return (
    <section className="lg:px-[10%] px-6 mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center w-full gap-12">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/home_experience@2x.jpg"
          }
          alt="Image 1"
          width={612}
          height={663}
          className="w-full flex-shrink-0 object-contain"
        />
        <div className="space-y-8">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2-1.png"
            }
            height={6}
            width={208}
            alt="divider"
            className="lg:w-[208px] w-full lg:object-cover object-contain h-[6px]"
          />
          <p className="lg:text-[42px] text-3xl font-semibold text-watermelonRed">
            Experience Cascades.
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-full lg:text-start text-justify`}
          >
            We are more than happy to welcome you to our home. Come see our
            first class facilities and see for yourself why this school is the
            best fit for your child.
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-5">
            <Link
              href={"/contact"}
              className="flex-shrink-0 hover:text-watermelonRed hover:bg-transparent text-center text-white bg-[#c04545] transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-[#c04545] rounded-lg border-[3px] italic"
            >
              Book a tour!
            </Link>
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-full`}
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
