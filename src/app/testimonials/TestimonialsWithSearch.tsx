"use client";

import { useState, useMemo } from "react";
import TestimonialList from "@/components/TestimonialList";
import { ITestimonial } from "@/types/testimonial";

interface TestimonialsWithSearchProps {
  testimonials: ITestimonial[];
}

export default function TestimonialsWithSearch({
  testimonials,
}: TestimonialsWithSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minRating, setMinRating] = useState(0);

  // Filtered testimonials based on search term and minimum rating
  const filteredTestimonials = useMemo(() => {
    if (!testimonials) return [];

    return testimonials.filter((testimonial) => {
      const matchesSearch =
        searchTerm === "" ||
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.message.toLowerCase().includes(searchTerm.toLowerCase());

      const meetsRating = testimonial.rating >= minRating;

      return matchesSearch && meetsRating;
    });
  }, [testimonials, searchTerm, minRating]);

  return (
    <div>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-2">
              Search Testimonials
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name or content"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-[#b3b3b3] dark:border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium mb-2">
              Minimum Rating
            </label>
            <select
              id="rating"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full px-3 py-2 border border-[#b3b3b3] dark:border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-transparent"
            >
              <option value="0">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Star</option>
            </select>
          </div>
        </div>

        <div className="text-sm text-[#8e8e92] dark:text-[#b3b3b3]">
          Showing {filteredTestimonials.length} of {testimonials.length}{" "}
          testimonials
        </div>
      </div>

      {filteredTestimonials.length > 0 ? (
        <TestimonialList
          testimonials={filteredTestimonials}
          gridLayout={true}
        />
      ) : (
        <div className="text-center p-12 border border-[#b3b3b3] dark:border-gray-800 rounded-lg">
          <p className="dark:text-[#b3b3b3] text-black">
            No testimonials match your search criteria. Try adjusting your
            filters.
          </p>
        </div>
      )}
    </div>
  );
}
