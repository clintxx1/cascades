"use client";
import Image from "next/image";
import React from "react";
import InfoCard from "@/components/infoCard";
import { lato } from "@/lib/fonts";

export default function Philosophy() {
  return (
    <section className="w-full h-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <p className="lg:text-[28px] text-[24px] italic font-semibold text-darkLiver mt-16 mb-8">
            Cascades HIRAYA Curriculum
          </p>
          <p
            className={`${lato.className} text-darkLiver text-[20px] leading-[36px] w-full`}
          >
            The HIRAYA Curriculum is centered around equipping students with the
            knowledge and understanding of sustainable development. Our students
            are exposed to hands-on experiences that encourage them to build,
            innovate, and create. By emphasizing the value of work, resources,
            money, and time, our curriculum instills a sense of responsibility
            and purpose in our students.
            <br />
            <br />
            The Curriculum will emphasize collaboration and community
            involvement. Our students engage in real-world projects that make a
            tangible impact on our local community through inclusive and
            collaborative learning environments, we aim to nurture active
            citizenship and social responsibility.
          </p>
          <div className="mt-8">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/philosophy_banner_2x-861x1024.jpg"
              }
              alt="image 1"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mt-36">
          <p
            className={`${lato.className} text-darkLiver text-[20px] leading-[36px] w-[520px]`}
          >
            Cascades School aims to produce independent learners by promoting
          </p>
          <h2 className="text-meatBrown font-semibold lg:text-[42px] text-4xl w-[500px] leading-[1.2em]">
            diverse methods of learning, problem solving through different
            approaches and discovery
          </h2>
          <p
            className={`${lato.className} text-darkLiver text-[20px] leading-[36px] w-[520px] mb-28`}
          >
            An educational philosophy wherein there are three educators; the
            teacher, the child and the environment. Children are active
            participators in their own learning and teachers encourage child
            initiated activities. Learning is done through multiple ways a child
            can learn.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div className="space-y-2">
          <div className="pt-14">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2-1.png"
              }
              alt="divider"
              width={208}
              height={6}
              className="w-[208px] h-[6px]"
            />
          </div>
          <h2 className="text-watermelonRed font-semibold lg:text-[42px] text-4xl">
            Guiding Principles
          </h2>
          <InfoCard
            title="View of the child."
            description="Every child is an artist, an explorer, a creator, and a competent learner. 
            Every child is viewed as strong, passionate, and resilient. Each one a contributing 
            member of the community and given equal rights."
          />
          <InfoCard
            title="Collaboration and Interaction."
            description="The Reggio inspired classroom setting is designed for children to interact, 
            be connected, and build relationships. Self-directed manipulatives and materials allow 
            the children to be more open and flexible in the different ways of learning."
          />
          <InfoCard
            title="Environment as the third teacher."
            description="The layout of the physical space fosters encounters, communication, and 
            relationships. The environment is designed to encourage kids to learn independently. 
            The environment will teach the children that each individual is an important part of 
            a bigger community."
          />
        </div>
        <div>
          <div className="-mt-28">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/philosophy_principles_2x-1024x1016.png"
              }
              alt="image 2"
              width={550}
              height={550}
            />
          </div>
          <InfoCard
            title="Teachers and children are partners in learning"
            titleCN="w-[500px]"
            description="Teachers are seen as researchers learning along with the children through 
            exchanges and negotiations. Teachers will use the inquiry-based approach to bring out 
            the interest of the children, and motivate them to discover more."
          />
          <InfoCard
            title="Documentation is powerful."
            description="Activities are compiled in albums for each program which guides teachers 
            and caregivers on the children’s level and skill. The exhibits and portfolios put 
            together by the children makes them feel that their works are appreciated when 
            displayed and shared."
          />
          <InfoCard
            title="Children has “hundred languages”."
            description="Every child has hundred different ways of learning with numerous ways of 
            showing the cognitive and symbolic expressions of their learning processes. Instead of 
            prepackaged knowledge, their hundred languages will be tapped and utilized in their 
            education."
          />
        </div>
      </div>
      <div className="py-9">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={6}
          className="w-full h-[6px]"
        />
      </div>
      <div className="space-y-8">
        <p className="text-[#1C5D5B] text-center text-5xl font-semibold">
          Cascades Pillar
        </p>
        <div className="flex items-center justify-around">
          <div className="w-[200px]">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/hiraya-curriculum.png"
              }
              alt="longDiv"
              width={1206}
              height={2075}
            />
          </div>
          <div className="w-[200px]">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/sustainable-wellness.png"
              }
              alt="longDiv"
              width={1206}
              height={1950}
            />
          </div>
          <div className="w-[200px]">
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/active-citizenship.png"
              }
              alt="longDiv"
              width={1206}
              height={1941}
            />
          </div>
          <div className="w-[200px]">
            <Image
              src={"https://ik.imagekit.io/cascades/cascades/batang-pinoy.png"}
              alt="longDiv"
              width={1206}
              height={2022}
            />
          </div>
        </div>
      </div>
      <div className="py-9">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
          }
          alt="longDiv"
          width={1024}
          height={6}
          className="w-full h-[6px]"
        />
      </div>
    </section>
  );
}
