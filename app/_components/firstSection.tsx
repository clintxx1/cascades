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
    <section className="space-y-20 lg:w-fit w-full">
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:gap-20 gap-10">
        <Image
          src={
            "https://ik.imagekit.io/cascades/cascades/home_programs_2x-944x1024.jpg"
          }
          alt="Image 1"
          width={612}
          height={663}
          className="lg:w-full lg:h-full md:w-[512px] md:h-[563px] w-[412px] h-[463px] flex-shrink-0 object-contain"
        />
        <div className="w-full space-y-8 grid lg:place-items-start place-items-center">
          <Image
            src={
              "https://ik.imagekit.io/cascades/cascades/header_copy_divider_XL_teal-2.png"
            }
            height={6}
            width={208}
            alt="divider"
            className="w-[208px] h-[6px]"
          />
          <p className="text-[42px] font-semibold text-crystalBlue">
            Cascades Four Teachers
          </p>
          <p className="text-[28px] italic font-semibold text-darkLiver lg:text-start text-center">
            The First and Second Teachers
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver lg:px-0 px-14 lg:w-[611px] w-full lg:text-start text-justify`}
          >
            As an expert educator for young children, I firmly believe in the
            concept of adults serving as the first teacher in the classroom, and
            the children as the second teacher. Adults play a central role in
            modeling behavior, providing guidance, and facilitating learning
            experiences for young learners. By creating a nurturing and
            enriching learning environment, educators lay the foundation for
            children's growth and development. Simultaneously, the children
            themselves, through their unique perspectives, interests, and
            interactions, become invaluable contributors to the learning
            process, enlightening educators about their needs, preferences, and
            learning styles. This dynamic interaction empowers students to take
            an active role in their education, fostering a sense of agency and
            autonomy in their learning journey. Embracing this partnership
            between adults and children as the first and second teachers in the
            classroom allows for a symbiotic relationship that enhances the
            overall educational experience for young learners.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div className="w-full space-y-8">
          <p className="text-[28px] italic font-semibold text-darkLiver lg:text-start text-center">
            The Third Teacher
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver lg:px-0 px-14 lg:w-[611px] w-full lg:text-start text-justify`}
          >
            &apos;The environment is the third teacher&apos; emphasizes the
            crucial role of physical surroundings in education. By designing
            learning spaces that inspire creativity and exploration, educators
            can enhance the learning experience for students. Thoughtful
            consideration of factors such as lighting, layout, and materials can
            foster student engagement and autonomy. Embracing the environment as
            a teaching tool empowers students to take an active role in their
            learning journey.
          </p>
        </div>
        <div className="w-full space-y-8">
          <p className="text-[28px] italic font-semibold text-darkLiver lg:text-start text-center">
            The Fourth Teacher
          </p>
          <p
            className={`${lato.className} text-[20px] leading-[36px] text-darkLiver lg:px-0 px-14 lg:w-[611px] w-full lg:text-start text-justify`}
          >
            Plants and animals into the classroom environment can serve as the
            "fourth teacher" for students. By incorporating living organisms,
            such as classroom pets and indoor plants, educators can create
            opportunities for hands-on learning and meaningful experiences.
            These living elements foster a sense of responsibility and empathy
            among students as they learn to care for and observe the needs of
            these living beings. Additionally, the presence of plants and
            animals in the classroom provides natural opportunities for
            scientific inquiry, as children can engage in firsthand observations
            and investigations, igniting their curiosity and wonder about the
            natural world. Ultimately, embracing plants and animals as the
            "fourth teacher" in the classroom cultivates an environment that
            promotes respect for all living things and enhances the overall
            learning experience for young learners.
          </p>
        </div>
      </div>
      <div className="mt-5 w-[590px] mx-auto space-y-14">
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
            className="text-crystalBlue hover:text-white hover:bg-crystalBlue transition-colors duration-300 text-[28px] px-7 py-5 border-crystalBlue rounded-lg border-[3px] italic"
          >
            Check our programs
          </Link>
        </div>
      </div>
    </section>
  );
}
