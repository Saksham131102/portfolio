import { Metadata } from 'next';
import Link from 'next/link';
import TestimonialAdmin from './TestimonialAdmin';

export const metadata: Metadata = {
  title: 'Testimonials Admin | Portfolio',
  description: 'Admin panel to manage testimonials',
};

async function fetchAllTestimonials() {
  try {
    // Use the fetch API to bypass client-side Supabase RLS
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/admin/testimonials`, {
      cache: 'no-store', // Don't cache this request
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.status}`);
    }
    
    const data = await response.json();
    return { 
      testimonials: data.testimonials || [],
      error: null
    };
  } catch (error) {
    console.error('Error fetching all testimonials:', error);
    return { 
      testimonials: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export default async function TestimonialsAdminPage() {
  // Fetch all testimonials, including unapproved ones
  const { testimonials, error } = await fetchAllTestimonials();
  
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
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 mr-4"
        >
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