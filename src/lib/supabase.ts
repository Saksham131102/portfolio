import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

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
  
  return data as Testimonial[];
}

// Function to submit a new testimonial
export async function submitTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'approved'>) {
  const { data, error } = await supabase
    .from('testimonials')
    .insert([{ ...testimonial, approved: false }])
    .select();
  
  if (error) {
    console.error('Error submitting testimonial:', error);
    throw error;
  }
  
  return data?.[0] as Testimonial;
} 