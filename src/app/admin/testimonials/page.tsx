"use client";

import Link from "next/link";
import TestimonialAdmin from "./TestimonialAdmin";
import { useTestimonials } from "@/hooks/useTestimonials";

export default function TestimonialsAdminPage() {
  const { 
    data: testimonials, 
    isLoading, 
    error: queryError,
    isError
  } = useTestimonials();
  
  const errorMessage = isError 
    ? (queryError instanceof Error ? queryError.message : "Failed to fetch testimonials") 
    : null;

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm italic">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>

      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}

      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
          Back to Home
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          All Testimonials ({testimonials?.length || 0})
        </h2>

        {testimonials && testimonials.length > 0 ? (
          <TestimonialAdmin testimonials={testimonials} />
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No testimonials found in the database.
          </p>
        )}
      </div>
    </div>
  );
}
