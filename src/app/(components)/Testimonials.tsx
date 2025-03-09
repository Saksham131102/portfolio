import Link from 'next/link';
import { getTopTestimonials } from '@/lib/supabase';
import TestimonialList from '@/components/TestimonialList';
import { FaArrowRight } from "react-icons/fa6";

// Ensure this component is dynamically rendered
export const dynamic = 'force-dynamic';

export default async function Testimonials() {
  console.log('Home page: Fetching testimonials component data');
  
  // Try a direct query instead of using getTopTestimonials
  try {
    // Import needed at runtime to avoid build issues
    const { supabase } = await import('@/lib/supabase');
    
    // Direct query to ensure we get all approved testimonials
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('rating', { ascending: false })
      .limit(6);
    
    if (error) {
      console.error('Home page: Error fetching testimonials:', error);
      return (
        <div className='text-sm pb-16'>
          <p>Error loading testimonials</p>
        </div>
      );
    }
    
    console.log(`Home page: Successfully fetched ${data?.length || 0} testimonials`);
    
    // If no testimonials, don't show this section
    if (!data || data.length === 0) {
      return null;
    }
    
    return (
      <div className='text-sm pb-16'>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-0">what others are saying</h2>
          <Link 
            href="/testimonials" 
            className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
          >
            view all
          </Link>
        </div>
        
        {data.length > 0 ? (
          <TestimonialList testimonials={data} gridLayout={true} />
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
  } catch (err) {
    console.error('Home page: Exception in Testimonials component:', err);
    return null;
  }
} 