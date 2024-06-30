"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { images } from "./data";

const CarouselImage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="pb-16">
      <div className="mb-4 text-[#B3B3B3] text-sm font-ibm-plex-mono">
        my best pics
      </div>
      <div>
        <Carousel
          plugins={[plugin.current]}
          className="border-2 border-black"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.image}
                alt="images"
                className={` object-cover ${image.dark ? "dark-image" : ""}`}
                width={1000}
                height={1000}
                priority
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
  // return (
  //   <div className="pb-16">
  //     <div className="mb-4 text-[#B3B3B3] text-sm font-ibm-plex-mono">
  //       my best pics
  //     </div>
  //     <Carousel
  //       autoplay
  //       loop
  //       autoplayDelay={4000}
  //       className="rounded-xl border-2 border-black"
  //       placeholder="image carousel"
  //       onPointerEnterCapture={() => console.log("Pointer entered")}
  //       onPointerLeaveCapture={() => console.log("Pointer left")}
  //     >
  //       {images.map((image, index) => (
  //         <Image
  //           key={index}
  //           src={image.image}
  //           alt="images"
  //           className={`object-cover ${image.dark ? "dark-image" : ""}`}
  //           width={1000}
  //           height={1000}
  //           priority
  //         />
  //       ))}
  //     </Carousel>
  //   </div>
  // );
};

export default CarouselImage;
