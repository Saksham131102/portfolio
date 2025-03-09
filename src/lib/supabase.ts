import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl) {
  console.error('NEXT_PUBLIC_SUPABASE_URL is not defined');
}

if (!supabaseAnonKey) {
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Guestbook testimonial type
export type Testimonial = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  approved: boolean;
}

// Function to get top testimonials by rating
export async function getTopTestimonials(limit = 5) {
  console.log(`Fetching top ${limit} testimonials...`);
  
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('rating', { ascending: false })
      .limit(limit);
    
    if (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
    
    console.log(`Successfully fetched ${data?.length || 0} testimonials`);
    return data as Testimonial[];
  } catch (err) {
    console.error('Exception in getTopTestimonials:', err);
    return [];
  }
}

// Function to submit a new testimonial
export async function submitTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) {
  console.log('Submitting testimonial:', { ...testimonial, email: '***hidden***' });
  
  try {
    // Check if we have a proper connection to Supabase
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase credentials are missing');
    }
    
    // Ensure we're inserting with approved=false
    const dataToInsert = { ...testimonial, approved: false };
    
    const { data, error } = await supabase
      .from('testimonials')
      .insert([dataToInsert])
      .select();
    
    if (error) {
      console.error('Error submitting testimonial:', error);
      console.error('Error details:', error.details, error.hint, error.code);
      throw error;
    }
    
    if (!data || data.length === 0) {
      console.warn('No data returned after insert, but no error either');
      return null;
    }
    
    console.log('Testimonial submitted successfully with ID:', data[0]?.id);
    return data[0] as Testimonial;
  } catch (error) {
    console.error('Exception in submitTestimonial:', error);
    throw error;
  }
} 