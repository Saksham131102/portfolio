"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import Image from "next/image";
import { images } from "./data";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CarouselImage: React.FC = () => {
  const swiperRef = useRef(null);
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <style>
        {`.swiper-pagination-bullet {
          background-color: white;
        }`}
      </style>
      <div className="pt-8">
        <div className="mb-4 text-[#B3B3B3] dark:text-[#ededed] text-sm font-ibm-plex-mono">
          my best pics
        </div>
        <div className="border-2 dark:border border-black dark:border-gray-800 rounded-xl overflow-hidden">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="">
                <Image
                  src={image.image}
                  alt="images"
                  className={`object-cover transition-transform duration-300 hover:scale-105`}
                  width={1000}
                  height={1000}
                  priority
                />
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CarouselImage;
