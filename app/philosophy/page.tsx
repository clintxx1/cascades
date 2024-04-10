import Image from "next/image";
import React from "react";
import { lato } from "../layout";
import image1 from "@/public/philosophy_banner_2x-861x1024.jpg";
import image2 from "@/public/philosophy_principles_2x-1024x1016.png";
import divider from "@/public/header_copy_divider_XL_teal-2-1.png";
import InfoCard from "@/components/infoCard";
import longDiv from "@/public/divider-XL-red-long-1024x7.png";

export default function Philosophy() {
  return (
    <section className="w-full h-full">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p className="text-[28px] italic font-semibold text-customDark mt-16">
            Philosophy
          </p>
          <div className="mt-8">
            <Image src={image1} alt="image 1" width={500} height={500} />
          </div>
        </div>
        <div className="mt-36">
          <p
            className={`${lato.className} text-customDark text-[20px] leading-[36px] w-[520px]`}
          >
            Cascades International School aims to produce independent learners
            by promoting
          </p>
          <h2 className="text-[#ebaf3c] font-semibold text-[42px] w-[500px] leading-[1.2em]">
            diverse methods of learning, problem solving through different
            approaches and discovery
          </h2>
          <p
            className={`${lato.className} text-customDark text-[20px] leading-[36px] w-[520px] mb-28`}
          >
            An educational philosophy wherein there are three educators; the
            teacher, the child and the environment. Children are active
            participators in their own learning and teachers encourage child
            initiated activities. Learning is done through multiple ways a child
            can learn.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <Image src={divider} alt="divider" className="w-[208px] h-[6px]" />
          <h2 className="text-customRed font-semibold text-[42px]">
            Guiding Principles
          </h2>
          <InfoCard
            title="View of the child."
            descriptionCN="w-[500px]"
            description="Every child is an artist, an explorer, a creator, and a competent learner. Every child is viewed as strong, passionate, and resilient. Each one a contributing member of the community and given equal rights."
          />
          <InfoCard
            title="Collaboration and Interaction."
            descriptionCN="w-[500px]"
            description="The Reggio inspired classroom setting is designed for children to interact, be connected, and build relationships. Self-directed manipulatives and materials allow the children to be more open and flexible in the different ways of learning."
          />
          <InfoCard
            title="Environment as the third teacher."
            descriptionCN="w-[500px]"
            description="The layout of the physical space fosters encounters, communication, and relationships. The environment is designed to encourage kids to learn independently. The environment will teach the children that each individual is an important part of a bigger community."
          />
        </div>
        <div>
          <div className="-mt-28">
            <Image src={image2} alt="image 2" width={550} height={550} />
          </div>
          <InfoCard
            title="Teachers and children are partners in learning"
            titleCN="w-[500px]"
            descriptionCN="w-[500px]"
            description="Teachers are seen as researchers learning along with the children through exchanges and negotiations. Teachers will use the inquiry-based approach to bring out the interest of the children, and motivate them to discover more."
          />
          <InfoCard
            title="Documentation is powerful."
            descriptionCN="w-[500px]"
            description="Activities are compiled in albums for each program which guides teachers and caregivers on the children’s level and skill. The exhibits and portfolios put together by the children makes them feel that their works are appreciated when displayed and shared."
          />
          <InfoCard
            title="Children has “hundred languages”."
            descriptionCN="w-[500px]"
            description="Every child has hundred different ways of learning with numerous ways of showing the cognitive and symbolic expressions of their learning processes. Instead of prepackaged knowledge, their hundred languages will be tapped and utilized in their education."
          />
        </div>
      </div>
      <div className="py-9">
        <Image src={longDiv} alt="longDiv" className="w-full h-[6px]" />
      </div>
    </section>
  );
}
