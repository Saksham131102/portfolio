"use client";

import Link from "next/link";
import TestimonialsWithSearch from "./TestimonialsWithSearch";
import { FaArrowRight } from "react-icons/fa6";
import { useApprovedTestimonials } from "@/hooks/useTestimonials";

export default function TestimonialsPage() {
  const { 
    data: approvedTestimonials, 
    isLoading, 
    error 
  } = useApprovedTestimonials();

  if (isLoading) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-sm italic">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 dark:text-red-400 text-sm italic">
        Error loading testimonials
      </p>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <div className="container p-5 lg:w-[860px] md:w-[780px] w-full md:px-[60px] pt-12 text-sm">
        <div className="flex items-center justify-between mt-12 mb-4">
          <h1 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono">
            testimonials
          </h1>
          <Link
            href="/"
            className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
          >
            back to home
          </Link>
        </div>

        <p className="dark:text-[#b3b3b3] text-black mb-4">
          Here&apos;s what people are saying about my portfolio. Thank you for
          all the feedback!
        </p>

        <TestimonialsWithSearch testimonials={approvedTestimonials || []} />

        <div className="mt-10 text-center">
          <Link
            href="/guestbook"
            className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
          >
            leave your feedback
            <FaArrowRight className="ml-1 font-bold inline-block" />
          </Link>
        </div>
      </div>
      <div className="pt-20"></div>
    </main>
  );
}
