import { StaticImageData } from "next/image";

export interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface InfoCardProps {
  className?: string;
  title: string;
  titleCN?: string;
  description: string;
  descriptionCN?: string;
  hasHeader?: boolean;
  headerImage?: StaticImageData;
}

export interface NavItem {
  label: string;
  page: string;
}

export interface CommunityCardProps {
  className?: string;
  firstImage: StaticImageData;
  firstTitle: string;
  firstName: string;
  firstDescription?: string;
  hasDivider?: boolean;
  hasSecondData?: boolean;
  isReversed?: boolean;
  secondImage?: StaticImageData;
  secondTitle?: string;
  secondName?: string;
  secondDescription?: string;
}

export interface CommunityDataUIProps {
  image?: StaticImageData;
  title: string;
  name: string;
  description?: string;
}

export interface DetailsProps {
  mainCN?: string;
  labelCN?: string;
  valueCN?: string;
  label: string;
  value: string;
  onClick?: () => void;
}
