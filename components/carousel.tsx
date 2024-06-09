"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CustomCarousel() {
  const data = [
    {
      key: 1,
      image:
        "https://ik.imagekit.io/cascades/cascades/Features_bannera2_2x.jpg",
    },
    {
      key: 2,
      image:
        "https://ik.imagekit.io/cascades/cascades/Features_bannerb2_2x.jpg",
    },
    {
      key: 3,
      image:
        "https://ik.imagekit.io/cascades/cascades/Features_bannerc2_2x.jpg",
    },
    {
      key: 4,
      image:
        "https://ik.imagekit.io/cascades/cascades/Features_bannerd2_2x.jpg?updatedAt=1713776121604",
    },
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={5000}
      showArrows={false}
      showStatus={false}
      animationHandler={"fade"}
      transitionTime={1000}
      showThumbs={false}
    >
      {data.map((item) => (
        <Image
          key={item.key}
          width={892}
          height={1240}
          src={item.image}
          alt={`${item.key}`}
        />
      ))}
    </Carousel>
  );
}
