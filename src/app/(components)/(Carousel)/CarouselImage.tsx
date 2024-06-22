"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { images } from "./data";

const CarouselImage = () => {
  return (
    <div className="pb-16">
      <div className="mb-4 text-[#B3B3B3] text-sm font-ibm-plex-mono">
        my best pics
      </div>
      <Carousel
        autoplay
        loop
        autoplayDelay={4000}
        className="rounded-xl border-2 border-black"
        placeholder="image carousel"
        onPointerEnterCapture={() => console.log("Pointer entered")}
        onPointerLeaveCapture={() => console.log("Pointer left")}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt="images"
            className={`object-cover ${image.dark ? "dark-image" : ""}`}
            width={1000}
            height={1000}
            priority
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
