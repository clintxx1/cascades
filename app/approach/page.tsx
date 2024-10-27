"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/components/infoCard";
import { lato } from "@/lib/fonts";

export default function Approach() {
  return (
    <section className="w-full h-full text-darkLiver">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
        <div className="space-y-14 grid lg:place-items-start place-items-center">
          <h2 className=" font-semibold lg:text-[42px] text-3xl">
            About Cascades
          </h2>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 lg:w-[520px] w-full lg:px-0 px-4 mb-14 lg:text-start text-justify`}
          >
            Cascades School merged the elements of a school and a home. This
            home is more than just a concept; it is a place where children will
            feel accepted, acknowledged and validated.
            <br />
            <br />
            <br />
            Cascades School shows genuine care and respect for the needs and
            capabilities of the child and their family. A relationship similar
            to home where the child will feel accepted, acknowledged, and
            validated. The school's core is practical, innovative, and accepting
            of the changes and needs of everyone in the "community." The school
            is viewed as a support or a solution so children can genuinely find
            joy in learning and see themselves as valuable active citizens in
            their communities. They will become more than prepared for whatever
            is next in their lives: grade school, high school, college,
            workforce, or community service.
          </p>
          <h2 className="text-watermelonRed font-semibold lg:text-[42px] text-3xl">
            Cascades Curriculum
          </h2>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 lg:w-[520px] w-full mb-28 lg:px-0 px-4 lg:text-start text-justify`}
          >
            The Cascades Curriculum is centered around equipping students with
            the knowledge and understanding of sustainable development. Our
            students are exposed to hands-on experiences that encourage them to
            build, innovate, and create. By emphasizing the value of work,
            resources, money, and time, our curriculum instills a sense of
            responsibility and purpose in our students.
            <br />
            <br />
            The Curriculum will emphasize collaboration and community
            involvement. Our students engage in real-world projects that make a
            tangible impact on our local community through inclusive and
            collaborative learning environments, we aim to nurture active
            citizenship and social responsibility.
          </p>
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2.png"
            }
            width={208}
            height={6}
            alt="divider"
            className="w-[208px] h-[6px]"
          />
          <InfoCard
            title="Co-teaching and Co-learning"
            description="Co-teaching and co-learning are essential in providing a well-rounded and collaborative learning experience for students. The weekly meetings among teachers at Cascades Academy allow for open communication and sharing of ideas, ensuring that all children's interests are incorporated into lesson plans. Furthermore, the designated Fridays where teachers teach other teachers provide an opportunity for continuous professional development, encouraging teachers to learn from one another and improve their instructional techniques. Through this collaborative effort, teachers can ensure that each student receives a comprehensive education that caters to their unique learning needs and preferences."
          />
        </div>
        <div className="mt-28 space-y-28 grid lg:place-items-start place-items-center">
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/approach/Pic1.png"}
            alt="image 1"
            width={858}
            height={1024}
            className="object-contain lg:w-full md:w-[758px] w-[658px]"
          />
          <div>
            <Image
              src={
                "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2.png"
              }
              width={208}
              height={6}
              alt="divider"
              className="lg:w-[208px] w-full h-[6px]"
            />
            <InfoCard
              title="Classroom Groupings"
              description="
              Wanderers (16 months to 3 years old) and Explorers (3 to 5 years old) classes are mixed age. In a mixed-age group class for children aged 3 to 5 years old, students from different age brackets learn and play together in the same space. This arrangement can provide several benefits, such as fostering a sense of community and collaboration, promoting non-competitive social interactions, and allowing younger children to learn from older peers while providing older children opportunities to develop leadership skills. Moreover, mixed age groups allow for personalized learning experiences, as children can progress at their own pace and are exposed to a wider range of social and emotional development.
              <br /><br />
              For students in Kindergarten 2 to Elementary, while they typically have separate subject area classes based on their grade level, they have the opportunity to work in mixed-age groups during big projects or school events. This setup allows them to collaborate with peers from different grades, facilitating the development of teamwork, communication, and problem-solving skills. Working on these joint initiatives also creates a sense of community and camaraderie across different age groups within the school, promoting a positive and inclusive school environment."
            />
            {/* <InfoCard
              title="Co-teaching and Co-learning"
              description="Co-teaching and co-learning are essential in providing a well-rounded and collaborative learning experience for students. The weekly meetings among teachers at Cascades Academy allow for open communication and sharing of ideas, ensuring that all children's interests are incorporated into lesson plans. Furthermore, the designated Fridays where teachers teach other teachers provide an opportunity for continuous professional development, encouraging teachers to learn from one another and improve their instructional techniques. Through this collaborative effort, teachers can ensure that each student receives a comprehensive education that caters to their unique learning needs and preferences."
            /> */}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div className="mt-8">
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/approach/Pic2.png"}
            alt="image 2"
            width={1024}
            height={850}
            className="object-contain lg:w-full md:w-[924px] w-[824px]"
          />
        </div>
        <div className="flex items-end">
          <p className="text-4xl italic font-bold lg:text-start text-center">
            Subject Areas
          </p>
        </div>
        {/* OLD UI - KEEP */}
        {/* <div className="grid gap-5 mt-28">
          <InfoCard
            title="Individualized Tracking"
            description="Teachers will document the progress of each child by tracking the
            skills and concepts acquired, which will then be shared to the
            parents. The tracking will show what skills and concepts are already
            mastered, needs improvement, or not yet introduced. The target
            skills are based on DepEd requirements, and guided by
            age-appropriate developmental milestones of a child."
          />
          <InfoCard
            title="Celebrating Creativity"
            description="The children will document their work in portfolios which will be
            showcased on a yearly exhibit, giving them the chance to earn or
            donate to the school’s supported charities."
          />
          <InfoCard
            title="Parents -Teacher Collab"
            description="Parents are encouraged to be involved in the Cascades community.
            Parents and guardians are introduced to the school’s unique teaching
            approach through programs that involves the entire school and the
            participating families."
          />
          <InfoCard
            title="Spiral Progression"
            description="The Cascades HIRAYA Curriculum is further anchored through spiral
            progression of discovery based learning. Instead of learning in a
            linear process, concepts and skills on different subjects are
            revisited at each level with increasing depth and complexity."
          />
        </div> */}
      </div>
      <div
        className={`flex lg:flex-row flex-col items-center justify-between pt-14 gap-4 ${lato.className}`}
      >
        <div className="lg:text-start text-center">
          <p className="lg:text-[28px] text-[24px] font-bold">
            ATELIER OF LIFE
          </p>
          <p className="text-base font-bold pb-5 italic">
            Talyer ng Buhay at Lupa
          </p>
          <p className="lg:text-[20px] lg:leading-[36px] leading-8">
            Explore Earth's ecosystems and elements, emphasizing the
            interconnectedness of all living things. Encourage mindfulness,
            sustainability, and active citizenship through understanding plants,
            animals, and life processes. Children will have the opportunity to
            engage with varied readings to deepen their understanding and
            research within this atelier.
          </p>
        </div>
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/approach/a1.png"}
          alt="a1"
          width={600}
          height={850}
          className="object-contain lg:w-full md:w-[924px] w-[824px]"
        />
      </div>
      <div
        className={`flex lg:flex-row flex-col items-center justify-between pt-14 gap-4 ${lato.className}`}
      >
        <div className="lg:text-start text-center">
          <p className="lg:text-[28px] text-[24px] font-bold">
            ATELIER OF MATERIALS
          </p>
          <p className="text-base font-bold pb-5 italic">
            Talyer ng Wika ng Materyales
          </p>
          <p className="lg:text-[20px] lg:leading-[36px] leading-8">
            Delve into the characteristics of various materials, often
            repurposed or discarded, to spark creativity and innovation.
            Understand how man-made materials interconnect with the natural
            environment while exploring logic, math, chemistry, and physics.
            Children will have access to different sources and references to
            expand on their exploration of the materials and its possibilities.
          </p>
        </div>
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/approach/a2.png"}
          alt="a1"
          width={600}
          height={850}
          className="object-contain lg:w-full md:w-[924px] w-[824px]"
        />
      </div>
      <div
        className={`flex lg:flex-row flex-col items-center justify-between pt-14 gap-4 ${lato.className}`}
      >
        <div className="lg:text-start text-center">
          <p className="lg:text-[28px] text-[24px] font-bold">
            ATELIER OF TASTE
          </p>
          <p className="text-base font-bold pb-5 italic">
            Talyer ng Lasa ng Kultura
          </p>
          <p className="lg:text-[20px] lg:leading-[36px] leading-8">
            Discover the world through seasonal fruits and vegetables,
            connecting nature, culture, science, and math. Engage in research,
            explore applications and gadgets, and deepen understanding of the
            environment. Children will also be exposed to readings of different
            books to aid in their discovery and research within this atelier.
          </p>
        </div>
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/approach/a3.png"}
          alt="a1"
          width={600}
          height={850}
          className="object-contain lg:w-full md:w-[924px] w-[824px]"
        />
      </div>
      <div
        className={`flex lg:flex-row flex-col items-center justify-between pt-14 gap-4 ${lato.className}`}
      >
        <div className="lg:text-start text-center">
          <p className="lg:text-[28px] text-[24px] font-bold">
            ATELIER OF MOVEMENT AND SOUND
          </p>
          <p className="text-base font-bold pb-5 italic">
            Talyer ng mga Galaw at Tunog
          </p>
          <p className="lg:text-[20px] lg:leading-[36px] leading-8">
            Embark on a journey of self-discovery through movement and sound in
            a stimulating environment equipped with mirrors, lights, and
            shadows. Connect with your body, emotions, and the world through
            diverse sounds, rhythms, and expressions. Children will reimagine
            stories they read and be inspired to create their own narratives,
            sharing them in unique and creative ways. Reading sessions will be
            incorporated to enrich their storytelling experiences.
          </p>
        </div>
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/approach/a4.png"}
          alt="a1"
          width={600}
          height={850}
          className="object-contain lg:w-full md:w-[924px] w-[824px]"
        />
      </div>
      <Image
        src={
          "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
        }
        width={1024}
        height={6}
        alt="longDiv"
        className="w-full h-[6px] my-12"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
        <div className="space-y-14">
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8 lg:w-[520px] w-full lg:text-start text-justify`}
          >
            <strong>Digital Literacy in the Cascades Approach</strong> refers to
            the development of skills and competencies in using digital
            technologies to further research and find the connection between
            self and the environment. The technology will help the children
            recognize potential and links around them. It helps them engage and
            interact with the natural environment and find solutions and
            meanings to help them innovate or create sustainable products or
            development.
          </p>
        </div>
        <div className="lg:mt-28 space-y-28 lg:w-[75%] grid lg:place-items-start place-items-end w-full">
          <Image
            src={"https://ik.imagekit.io/cascades/cascades/approach/Pic3.png"}
            alt="image 1"
            width={2402}
            height={2400}
            className="object-contain lg:w-[75%] md:w-[60%] w-[50%]"
          />
        </div>
      </div>
      <Image
        src={
          "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-1024x7.png"
        }
        width={1024}
        height={6}
        alt="longDiv"
        className="w-full h-[6px] my-12"
      />
      <div className="flex lg:flex-row flex-col items-center justify-around pb-24 lg:gap-14 gap-2">
        <Image
          src={"https://ik.imagekit.io/cascades/cascades/approach/Pic4.png"}
          alt="image 3"
          width={304}
          height={304}
        />
        <div className="mt-12 space-y-8">
          <p className="lg:text-[42px] text-3xl leading-[1.2em] font-semibold text-[#1c6a88] lg:text-start text-center">
            Check our programs
          </p>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center lg:w-[700px] w-full gap-4">
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8`}
            >
              Cascades School prides itself in providing a modified Reggio
              curriculum that aims to instill a lifelong love for learning to
              its students.
            </p>
            <Link
              href={"/primary-program"}
              className="text-[#1c6a88] text-center hover:text-white hover:bg-[#1c6a88] transition-colors duration-300 lg:text-[28px] text-[24px] px-4 py-4 border-[#1c6a88] rounded-lg border-[3px] italic lg:w-[520px] md:w-[520px]"
            >
              See the offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
