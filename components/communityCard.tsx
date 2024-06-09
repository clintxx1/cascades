import React from "react";
import Image from "next/image";
import { CommunityCardProps, CommunityDataUIProps } from "@/types";
import { cn } from "@/lib/utils";
import { lato } from "@/lib/fonts";

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
        className={`flex lg:flex-row md:flex-row flex-col items-center justify-center w-full gap-8 ${isReversed && "flex-row-reverse"}`}
      >
        {image ? (
          <Image
            src={image}
            alt="image 3"
            height={350}
            width={340}
            className={`${hasSecondData ? "w-[190px] h-[200px]" : "w-[340px] h-[350px]"}`}
          />
        ) : null}
        <div className="text-darkLiver space-y-2 lg:w-[500px] w-full lg:text-start md:text-start text-center">
          <p className="lg:text-[28px] text-[24px] leading-[36px] lg:w-[200px] w-full">
            {title}
          </p>
          <p
            className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8`}
          >
            {name}
          </p>
          {description ? (
            <p
              className={`${lato.className} lg:text-[20px] lg:leading-[36px] leading-8`}
            >
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
        src={
          "https://ik.imagekit.io/cascades/cascades/divider-XL-red-long-Copy-4-1024x7.png"
        }
        alt="longDiv"
        height={6}
        width={1024}
        className="w-full h-[6px] my-12"
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
          <div className="w-full flex items-center justify-center mx-5">
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
