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
  hasSubtitle?: boolean;
  subtitle?: string;
}

export interface NavItem {
  label: string;
  page: string;
  className?: string;
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
  hasThirdData?: boolean;
  thirdImage?: string;
  thirdTitle?: string;
  thirdName?: string;
  thirdDescription?: string;
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

export type UseDebounce = (
  callback: () => void,
  delay: number,
  dependencies: any[]
) => void;

export type BranchCardProps = {
  image: string;
  name: string;
  branch: string;
  address: string;
};
