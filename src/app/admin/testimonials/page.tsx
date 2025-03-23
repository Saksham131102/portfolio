"use client";

import Link from "next/link";
import TestimonialAdmin from "./TestimonialAdmin";
import { useEffect, useState } from "react";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  rating: number;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
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

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
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
