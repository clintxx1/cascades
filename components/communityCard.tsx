import React from "react";
import longDiv from "@/public/divider-XL-red-long-Copy-4-1024x7.png";
import Image from "next/image";
import { CommunityCardProps, CommunityDataUIProps } from "@/types";
import { lato } from "@/app/layout";
import { cn } from "@/lib/utils";

export default function CommunityCard({
  className,
  firstImage,
  firstTitle,
  firstName,
  firstDescription = "",
  hasDivider = false,
  hasSecondData = false,
  isReversed = false,
  secondImage,
  secondTitle = "",
  secondName = "",
  secondDescription = "",
}: CommunityCardProps) {
  const dataUI = (data: CommunityDataUIProps) => {
    const { image, title, name, description = "" } = data;
    return (
      <div
        className={`flex items-center justify-center w-full gap-8 ${isReversed && "flex-row-reverse"}`}
      >
        {image ? (
          <Image
            src={image}
            alt="image 3"
            className={`${hasSecondData ? "w-[190px] h-[200px]" : "w-[340px] h-[350px"}`}
          />
        ) : null}
        <div className="text-darkLiver space-y-2 w-[500px]">
          <p className="text-[28px] leading-[36px] w-[200px]">{title}</p>
          <p className={`${lato.className} text-[20px] leading-[36px]`}>
            {name}
          </p>
          {description ? (
            <p className={`${lato.className} text-[20px] leading-[36px]`}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  };
  return (
    <div className="py-6">
      <Image
        src={longDiv}
        alt="longDiv"
        className="w-full h-[6px] my-12 mx-8"
      />
      <div
        className={`flex items-center justify-center ${hasSecondData && "px-28"}`}
      >
        <div className={cn("w-[500px]", className)}>
          {dataUI({
            image: firstImage,
            title: firstTitle,
            name: firstName,
            description: firstDescription,
          })}
        </div>
        {hasDivider ? (
          <div className="w-full flex items-center justify-center">
            <div className="h-[200px] w-[1px] p bg-black"></div>
          </div>
        ) : null}
        {hasSecondData ? (
          <div className="w-[500px]">
            {dataUI({
              image: secondImage,
              title: secondTitle,
              name: secondName,
              description: secondDescription,
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}