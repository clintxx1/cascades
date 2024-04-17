"use client";
import React from "react";
import image1 from "@/public/Features_bannera2_2x.jpg";
import image2 from "@/public/Features_bannerb2_2x.jpg";
import image3 from "@/public/Features_bannerc2_2x.jpg";
import image4 from "@/public/Features_bannerd2_2x.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CustomCarousel() {
  const data = [
    {
      key: 1,
      image: image1,
    },
    {
      key: 2,
      image: image2,
    },
    {
      key: 3,
      image: image3,
    },
    {
      key: 4,
      image: image4,
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
    >
      {data.map((item) => (
        <Image key={item.key} src={item.image} alt={`${item.key}`} />
      ))}
    </Carousel>
  );
}
