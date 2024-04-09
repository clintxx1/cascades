import image1 from "@/public/homepage_features_2x-1-1024x950.jpg";
import divider from "@/public/header_copy_divider_XL_teal-1-1.png";
import Image from "next/image";
import { lato } from "@/app/layout";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SecondSection() {
  return (
    <section>
      <div className="flex items-center justify-between w-full gap-3">
        <div className="space-y-8 w-3/4">
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <p className="text-[42px] font-semibold text-[#9a5600]">
            Student Health, Safety
            <br />
            and Well-being a Priority.
          </p>
          <p className="text-[28px] italic font-semibold text-customDark">
            School Features
          </p>
          <div className="flex items-center justify-center w-[600px]">
            <p
              className={`${lato.className} text-[20px] leading-[36px] text-customDark`}
            >
              The school safeguards its students to explore and learn in a risk
              free environment. The facilities and services are constantly
              improved to ensure a safe and nurturing environment for each
              child.
            </p>
            <Link
              href={"/features"}
              className="text-[#1c6a88] hover:text-white hover:bg-[#1c6a88] transition-colors duration-300 text-[28px] px-4 py-4 border-[#1c6a88] rounded-lg border-[3px] italic w-[600px]"
            >
              Read more
            </Link>
          </div>
        </div>
        <Image src={image1} alt="Image 1" width={612} height={663} />
      </div>
    </section>
  );
}
