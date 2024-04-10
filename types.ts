import { StaticImageData } from "next/image";

export interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface InfoCardProps {
  title: string;
  titleCN?: string;
  description: string;
  descriptionCN?: string;
}

export interface NavItem {
  label: string;
  page: string;
}
