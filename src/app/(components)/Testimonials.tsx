"use client";

import Link from "next/link";
// import { getTopTestimonials } from '@/lib/supabase';
import TestimonialList from "@/components/TestimonialList";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

// Ensure this component is dynamically rendered
export const dynamic = "force-dynamic";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  rating: number;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/testimonials?lim=4&approved=true");
        const data = await res.json();
        setTestimonials(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-sm italic">
        Loading...
      </p>
    );
  }

  return (
    <div className="text-sm pb-16">
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

      {testimonials.length > 0 ? (
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
