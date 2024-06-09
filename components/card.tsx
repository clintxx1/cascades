import { lato } from "@/lib/fonts";
import { CardProps } from "@/types";
import Image from "next/image";

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="grid lg:place-items-start place-items-center gap-3 w-full">
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
      />
      <p className="text-3xl font-semibold">{title}</p>
      <p className={`${lato.className} text-[20px] leading-[36px] h-[144px]`}>
        {description}
      </p>
    </div>
  );
};
