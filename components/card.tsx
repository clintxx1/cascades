import { lato } from "@/app/layout";
import { CardProps } from "@/types";
import Image from "next/image";

export const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="grid gap-3 w-full">
      <Image src={icon} alt={title} className="h-16 w-16 object-contain" />
      <p className="text-3xl font-semibold">{title}</p>
      <p className={`${lato.className} text-[20px] leading-[36px] h-[144px]`}>
        {description}
      </p>
    </div>
  );
};