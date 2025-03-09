import { Metadata } from 'next';
import Link from 'next/link';
import TestimonialAdmin from './TestimonialAdmin';
import { createClient } from '@supabase/supabase-js';
import { Testimonial } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Testimonials Admin | Portfolio',
  description: 'Admin panel to manage testimonials',
};

// Force this page to be dynamically rendered
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Create admin Supabase client
function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export default async function TestimonialsAdminPage() {
  // Only run in browser, skip during build
  if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
    // During build, return empty testimonials
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Testimonials Admin</h1>
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
            Back to Home
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">All Testimonials (0)</h2>
          <p className="text-gray-600 dark:text-gray-400">Loading testimonials...</p>
        </div>
      </div>
    );
  }
  
  let testimonials: Testimonial[] = [];
  let error: string | null = null;
  
  try {
    // Get direct access to Supabase during rendering
    const supabase = createAdminClient();
    
    const { data, error: supabaseError } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (supabaseError) {
      throw supabaseError;
    }
    
    testimonials = data as Testimonial[];
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    error = err instanceof Error ? err.message : 'Unknown error fetching testimonials';
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