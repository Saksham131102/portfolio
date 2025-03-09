import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import TestimonialsWithSearch from './TestimonialsWithSearch';
import { FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: 'Testimonials | My Portfolio',
  description: 'Read what others have to say about my portfolio.',
};

export default async function TestimonialsPage() {
  // Fetch all approved testimonials
  const { data: testimonials, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('approved', true)
    .order('rating', { ascending: false });
    
  if (error) {
    console.error('Error fetching testimonials:', error);
  }

  return (
    <main className="flex flex-col items-center">
      <div className="container p-5 lg:w-[860px] md:w-[780px] w-full md:px-[60px] pt-12 text-sm">
      <div className="flex items-center justify-between mt-12 mb-4">
        <h1 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono">testimonials</h1>
        <Link 
          href="/" 
          className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
        >
          back to home
        </Link>
      </div>
      
      <p className="dark:text-[#b3b3b3] text-black mb-4">
        Here's what people are saying about my portfolio. Thank you for all the feedback!
      </p>
      
      <TestimonialsWithSearch testimonials={testimonials || []} />
      
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
    </main>
  );
} 