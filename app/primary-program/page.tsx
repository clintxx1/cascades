import { LazyImage } from "@/components/ui/lazy-image";
import React from "react";
import InfoCard from "@/components/infoCard";
import Link from "next/link";
import PromoSection from "@/components/promoSection";
import { Metadata } from "next";
import { josefinSans, lato } from "@/lib/fonts";
import { ProgramContentProps } from "@/types";

export const metadata: Metadata = {
  title: "Our Curriculum | Cascades.ph",
};

const CURRENT_OFFERED: ProgramContentProps[] = [
  {
    label: "Wanderers Program (16 Months - 3 Years Old)",
    value: "wanderer",
    description: `Wanderers Program empowers children to show what they know, can know, see, hear, and feel.<br />
      The program will give our little wanderers opportunities to explore their environment joyfully.
    `,
  },
  {
    label: "Explorers Program (3 years old until Kinder 2)",
    value: "explorer",
    description: `The program will allow the Cascadians to understand that their talents and skills are also tools for creating ways to show kindness. The exposure to inspiring individuals and groups with diverse backgrounds will open their hearts and minds to the excitement of celebrating self, home, and community through meaningful projects and events. The experiences will be their driving force to focus, learn, expand, and connect to the process of creating. `,
  },
  {
    label: "Navigators Program (Grade 1 - Grade 2)",
    value: "navigators",
    description: `The Projects in the Navigators Program will lead to children understanding the challenges and issues in their community and doing something about it.`,
  },
];

const OPENSY26: ProgramContentProps[] = [
  {
    label: "Discovers Program (Grade 3 - 4)",
    value: "discoverer",
    description: `The Program will help the children be mindful of the materials and products they will create. They will learn how to use their skills and talents to communicate, earn, and solve some issues in the community.
    `,
  },
  {
    label: "Validators Program (Grade 5 - 6)",
    value: "validator",
    description: `The Program will allow the children to understand the importance of research and guided works to create a more meaningful output or projects. They will be exposed to different inspiring mentors and consultants to guide them in their chosen project.`,
  },
];

const OPENSY27: ProgramContentProps[] = [
  {
    label: "Groundbreakers (Grade 7 -8)",
    value: "groundbreaker",
    description: `The Program will allow the children to understand the importance of research and guided works to create a more meaningful output or projects. They will be exposed to different inspiring mentors and consultants to guide them in their chosen project.`,
  },
  {
    label: "Trailblazers (Grade 9 -10)",
    value: "trailblazer",
    description: `The Program will highlight the children's ability to lead and inspire others to design, create, and run sustainable projects or creations.`,
  },
];

export default function PrimaryProgram() {
  return (
    <section className="w-full text-darkLiver">
      <p className="lg:text-[28px] text-[24px] italic font-semibold mt-16">
        Cascades Programs
      </p>
      <p
        className={`${lato.className}  lg:text-[20px] lg:leading-[36px] leading-8 w-full mt-8 mb-20`}
      >
        Cascades Approach has aligned learning programs from toddlers to grade
        school. <br className="sm:block hidden" />
        It will ensure that the learning gains in an early childhood setting
        will develop as they grow. <br className="sm:block hidden" /> The
        children will be given proper guidance and mentoring to have a higher
        chance of getting the career they truly want to pursue.
      </p>
      <div className="pb-20 m-0">
        <LazyImage
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-2-1024x8.png"
          }
          alt="longDiv"
          width={1024}
          height={6}
          className="w-full h-[6px] px-4"
        />
      </div>
      {/* PRESCHOOL */}
      <div className="flex flex-col gap-4 w-fulll">
        <LazyImage
          src={"https://ik.imagekit.io/cascades/cascades/Group-3-Copy.png"}
          alt={"primaryLogo"}
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
        <p className="lg:text-[42px] italic text-3xl leading-[1.2em] font-semibold text-crystalBlue">
          PRESCHOOL
        </p>
        <div className="w-full flex sm:flex-row flex-col sm:items-start items-center justify-center gap-20">
          <div className="space-y-6">
            <LazyImage
              src={
                "https://ik.imagekit.io/cascades/cascades/programs/pre-1.png"
              }
              alt={"image1"}
              width={223}
              height={250}
              className="object-contain"
            />
            <div className="text-center">
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                WANDERERS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                16 Months to 3 years old
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <LazyImage
              src={"https://ik.imagekit.io/cascades/cascades/programs/pre2.png"}
              alt={"image1"}
              width={250}
              height={250}
              className="object-contain"
            />
            <div className="flex flex-col text-center">
              <div>
                <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                  EXPLORERS
                </p>
                <p className="italic lg:text-base md:text-base text-sm">
                  3 years old to 4 years old
                </p>
              </div>
              <div>
                <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                  SR. EXPLORERS
                </p>
                <p className="italic lg:text-base md:text-base text-sm">
                  5 years old
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex items-start justify-around lg:gap-52 md:gap-52 sm:gap-52">
          <div>
            <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
              WANDERERS
            </p>
            <p className="italic lg:text-base md:text-base text-sm">
              16 Months to 3 years old
            </p>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                EXPLORERS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                3 years old to 4 years old
              </p>
            </div>
            <div>
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                SR. EXPLORERS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                5 years old
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* ELEMENTARY */}
      <div className="flex flex-col gap-4 w-fulll">
        <LazyImage
          src={"https://ik.imagekit.io/cascades/cascades/Group-3-Copy.png"}
          alt={"primaryLogo"}
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
        <p className="lg:text-[42px] italic text-3xl leading-[1.2em] font-semibold text-crystalBlue">
          ELEMENTARY
        </p>
        <div className="w-full flex sm:flex-row flex-col sm:items-start items-center justify-center gap-20">
          <div className="space-y-6">
            <LazyImage
              src={
                "https://ik.imagekit.io/cascades/cascades/programs/elem1.png"
              }
              alt={"image1"}
              width={220}
              height={250}
              className="object-contain"
            />
            <div className="text-center">
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                NAVIGATORS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                6 years old to 8 years old <br />
                Grade 1 - 3
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <LazyImage
              src={
                "https://ik.imagekit.io/cascades/cascades/programs/elem2.png"
              }
              alt={"image1"}
              width={250}
              height={250}
              className="object-contain"
            />
            <div className="text-center">
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                DISCOVERERS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                9 years old to 11 years old <br />
                Grade 4 - 6
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex items-center justify-center">
          <LazyImage src={"https://ik.imagekit.io/cascades/cascades/programs/Pic2.png"}
            alt={"image1"}
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="w-full flex items-start lg:justify-center md:justify-center sm:justify-center justify-between lg:gap-40 md:gap-40 sm:gap-40">
          <div>
            <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
              NAVIGATORS
            </p>
            <p className="italic lg:text-base md:text-base text-sm">
              6 years old to 8 years old <br />
              Grade 1 - 3
            </p>
          </div>
          <div>
            <div>
              <p className="lg:text-2xl md:text-2xl text-lg italic font-semibold">
                DISCOVERERS
              </p>
              <p className="italic lg:text-base md:text-base text-sm">
                9 years old to 11 years old <br />
                Grade 4 - 6
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* OLD UI - KEEP */}
      {/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-0">
        <div className="mt-24">
          <div className="flex flex-col gap-4 w-fulll">
            <LazyImage src={"https://ik.imagekit.io/cascades/cascades/Group-3-Copy.png"}
              alt={"primaryLogo"}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <p className="lg:text-[42px] italic text-3xl leading-[1.2em] font-semibold text-crystalBlue">
              PRESCHOOL
            </p>
            <div className="w-full bg-red-300">
              <LazyImage src={
                  "https://ik.imagekit.io/cascades/cascades/programs/Pic1.png"
                }
                alt={"image1"}
                width={1024}
                height={502}
                className="object-contain snap-center"
              />
            </div>

          </div>
          <InfoCard
            title="Currently Offered:"
            description=""
            isDropdown
            dropdownData={CURRENT_OFFERED}
          />
          <InfoCard
            title="Opens SY 25-26"
            description=""
            isDropdown
            dropdownData={OPENSY26}
          />
        </div>
        <div className="lg:space-y-14 flex lg:flex-col flex-col-reverse">
          <div className="lg:w-[700px] w-full object-contain">
            <LazyImage src={
                "https://ik.imagekit.io/cascades/cascades/primary_banner_2x-1024x502.jpg"
              }
              alt={"image1"}
              width={1024}
              height={502}
              className="object-contain"
            />
          </div>
          <InfoCard
            title="Opens SY 26-27"
            description=""
            isDropdown
            dropdownData={OPENSY27}
          />
        </div>
      </div> */}
      <PromoSection />
      <div className="flex lg:flex-row flex-col items-center justify-start w-full gap-12 pb-20">
        <LazyImage
          src={
            "https://ik.imagekit.io/cascades/cascades/home_experience@2x.jpg"
          }
          alt="Image 1"
          width={388}
          height={388}
          className="object-contain"
        />
        <div className="space-y-8 grid lg:place-items-start place-items-center">
          <p className="lg:text-[42px] flex flex-1 text-3xl font-semibold text-meatBrown">
            Experience Cascades.
          </p>
          <p
            className={`${lato.className} lg:text-[20px] text-base lg:leading-[36px] leading-8 lg:w-[500px] w-full lg:text-start text-justify`}
          >
            We are more than happy to welcome you to our home. Come see our
            first class facilities and see for yourself why this school is the
            best fit for your child.
          </p>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center lg:w-[600px] w-full gap-5">
            <Link
              href={"/contact"}
              className="lg:w-1/3 md:w-1/3 hover:text-meatBrown hover:bg-transparent text-center text-white bg-meatBrown transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-meatBrown rounded-lg border-[3px] italic"
            >
              Book a tour!
            </Link>
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 lg:w-2/3 md:w-2/3 w-full lg:text-start md:text-start text-center`}
            >
              or read the &nbsp;
              <a
                href="/enrollment"
                className={`italic cursor-pointer underline ${josefinSans.className}`}
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
