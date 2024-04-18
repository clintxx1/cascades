import image1 from "@/public/home_programs_2x-944x1024.jpg";
import divider from "@/public/header_copy_divider_XL_teal-2.png";
import Image from "next/image";
import { lato } from "@/app/layout";
import primaryLogo from "@/public/Group-1-o9huxdwud2prv6i94n374a0uhto5mn9pg7eokvt8lq.png";
import specialLogo from "@/public/Group-3-o9huxfshw1n8peuwrodcqzfx85dovxlztnciniyv40.png";
import { Card } from "../card";
import Link from "next/link";

export default function FirstSection() {
  const programItems = [
    {
      icon: primaryLogo,
      title: "Primary Program",
      description:
        "Programs that are progressive and developmentally appropriate for children ages 0-5.",
    },
    {
      icon: specialLogo,
      title: "Special Programs",
      description:
        "Additional programs and skillset development that further scaffolds the primary programs.",
    },
  ];
  return (
    <section className="flex flex-col items-center mb-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-20">
        <Image src={image1} alt="Image 1" width={612} height={663} />
        <div className="w-full space-y-8">
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <p className="text-[42px] font-semibold text-crystalBlue">
            The environment is
            <br />
            the third teacher.
          </p>
          <p className="text-[28px] italic font-semibold text-darkLiver">
            Programs Offered
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver w-[611px]`}
          >
            Adhering to the teaching principles of Reggio Emilia, the school is
            built like a ‘house’, with child-sized furniture and tools made from
            refurbished materials.
            <br />
            <br />
            The materials/tools are strategically planned to help the children
            understand the concepts being taught while fueling their creativity
            through the unique environment.
          </p>
        </div>
      </div>
      <div className="mt-5 w-[590px] flex flex-col items-start gap-12">
        <div className="grid grid-cols-2 gap-6">
          {programItems.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Link
          href={"/primary-program"}
          className="text-crystalBlue hover:text-white hover:bg-crystalBlue transition-colors duration-300 text-[28px] px-7 py-5 border-crystalBlue rounded-lg border-[3px] italic"
        >
          Check our programs
        </Link>
      </div>
    </section>
  );
}
