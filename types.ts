import { StaticImageData } from "next/image";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramContentProps {
  value: string;
  label: string;
  description: string;
}

export interface InfoCardProps {
  className?: string;
  title: string;
  titleCN?: string;
  description: string;
  descriptionCN?: string;
  hasHeader?: boolean;
  headerImage?: string;
  isDropdown?: boolean;
  dropdownData?: ProgramContentProps[] | [];
}

export interface NavItem {
  label: string;
  page: string;
}

export interface CommunityCardProps {
  className?: string;
  firstImage: string;
  firstTitle: string;
  firstName: string;
  firstDescription?: string;
  hasDivider?: boolean;
  hasSecondData?: boolean;
  isReversed?: boolean;
  secondImage?: string;
  secondTitle?: string;
  secondName?: string;
  secondDescription?: string;
}

export interface CommunityDataUIProps {
  image?: string;
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
