import Image from "next/image";
import { Card } from "../../components/card";
import Link from "next/link";
import { lato } from "@/lib/fonts";

export default function FirstSection() {
  const programItems = [
    {
      icon: "https://ik.imagekit.io/cascades/cascades/Group-1-o9huxdwud2prv6i94n374a0uhto5mn9pg7eokvt8lq.png",
      title: "Primary Program",
      description:
        "Programs that are progressive and developmentally appropriate for children ages 16 months to 9 years old.",
    },
    {
      icon: "https://ik.imagekit.io/cascades/cascades/Group-3-o9huxfshw1n8peuwrodcqzfx85dovxlztnciniyv40.png",
      title: "Special Programs",
      description:
        "Additional programs and skillset development that further scaffolds the primary programs.",
    },
  ];
  return (
    <section className="space-y-20 lg:w-fit w-full lg:px-[10%] px-6 mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:gap-20 gap-10">
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/home/Pic1.png"}
          alt="Image 1"
          width={612}
          height={663}
          className="w-full flex-shrink-0 object-contain"
        />
        <div className="w-full space-y-8 grid lg:place-items-start place-items-center">
          <p className="lg:text-[32px] text-[24px] font-semibold text-crystalBlue lg:text-start text-center">
            A reggio-approach in education
          </p>

          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2.png"
            }
            height={6}
            width={208}
            alt="divider"
            className="lg:w-[208px] w-full lg:object-cover object-contain h-[6px]"
          />
          <p className="lg:text-[42px] leading-[48px] text-3xl font-semibold text-crystalBlue lg:text-start text-center">
            Every child is viewed as <br className="sm:block hidden" /> capable
            contributor, <br className="sm:block hidden" />
            an active citizen of the world.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
        <div className="w-full space-y-8">
          <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver lg:text-start text-center">
            Importance of expression
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-full lg:text-start text-justify`}
          >
            In Cascades, we believe that our children are born ready to learn
            and excited for the future. Our job is to help them retain the
            courage to bring out their natural talents and use them as their
            voice to express their ideas and understanding of the world. This
            kind of education will help the children live life with the
            authenticity and courage to be who they are regardless of their
            limitations.
          </p>
        </div>
        <div className="w-full space-y-8">
          <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver lg:text-start text-center">
            Active Citizenship
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 text-darkLiver w-full lg:text-start text-justify`}
          >
            The Cascades approach focuses on the understanding that even a child
            can be an active citizen of the community. Their "smallness" does
            not diminish their value or capabilities to contribute to the
            community's progress. Cascades Hiraya's goal is to make the
            community realize this truth and, in turn, create more opportunities
            for children to be involved and exercise their citizenship.
          </p>
        </div>
      </div>
      <div className="mt-5 m-auto space-y-14 lg:w-[calc(100%_-_30dvw)] w-full">
        <div className="grid place-items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          {programItems.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex lg:justify-start justify-center">
          <Link
            href={"/primary-program"}
            className="text-crystalBlue hover:text-white hover:bg-crystalBlue transition-colors duration-300 lg:text-[28px] text-[24px] px-7 py-5 border-crystalBlue rounded-lg border-[3px] italic"
          >
            Check our programs
          </Link>
        </div>
      </div>
    </section>
  );
}
