"use client";

import Link from "next/link";
import TestimonialList from "@/components/TestimonialList";
import { FaArrowRight } from "react-icons/fa6";
import { useTopTestimonials } from "@/hooks/useTestimonials";

// Ensure this component is dynamically rendered
export const dynamic = "force-dynamic";

export default function Testimonials() {
  const { data: testimonials, isLoading, error } = useTopTestimonials(4);

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
    <div className="text-sm pt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-0">
          what others are saying
        </h2>
        <Link
          href="/testimonials"
          className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
        >
          view all
        </Link>
      </div>

      {testimonials && testimonials.length > 0 ? (
        <TestimonialList testimonials={testimonials} gridLayout={true} />
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-4">
          No testimonials yet. Be the first to leave feedback!
        </p>
      )}

      <div className="pt-2">
        <Link
          href="/guestbook"
          className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
        >
          leave your feedback
          <FaArrowRight className="ml-1 inline-block" />
        </Link>
      </div>
    </div>
  );
}
