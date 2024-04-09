import image1 from "@/public/home_experience@2x.jpg";
import divider from "@/public/header_copy_divider_XL_teal-2-1.png";
import Image from "next/image";
import { lato } from "@/app/layout";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ThirdSection() {
  return (
    <section>
      <div className="flex items-center justify-between w-full gap-12">
        <Image src={image1} alt="Image 1" width={612} height={663} />
        <div className="space-y-8">
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <p className="text-[42px] font-semibold text-customRed">
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
              className="w-1/3 hover:text-customRed hover:bg-transparent text-white bg-[#c04545] transition-colors duration-300 text-[28px] px-4 py-4 border-[#c04545] rounded-lg border-[3px] italic"
            >
              Book a tour!
            </Link>
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-customDark w-2/3`}
            >
              or read the{" "}
              <a
                href="/enrollment"
                className="text-customRed italic font-semibold cursor-pointer underline"
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
