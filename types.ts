import { StaticImageData } from "next/image";

export interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}
