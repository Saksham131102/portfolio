'use server';

import { submitTestimonial } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function submitGuestbookEntry(formData: FormData) {
  try {
    console.log('Server action: submitGuestbookEntry called');
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const rating = parseInt(formData.get('rating') as string);
    
    if (!name || !email || !message || isNaN(rating)) {
      console.error('Server action: Invalid form data', { name: !!name, email: !!email, message: !!message, rating });
      return { success: false, error: 'All fields are required' };
    }
    
    if (rating < 1 || rating > 5) {
      console.error('Server action: Invalid rating', { rating });
      return { success: false, error: 'Rating must be between 1 and 5' };
    }
    
    console.log('Server action: Submitting testimonial data');
    const testimonialData = {
      name,
      email,
      message,
      rating
    };
    
    try {
      const result = await submitTestimonial(testimonialData);
      console.log('Server action: Testimonial submitted successfully', { id: result?.id });
      
      // Revalidate the paths where testimonials are displayed
      revalidatePath('/');
      revalidatePath('/guestbook');
      revalidatePath('/testimonials');
      
      return { 
        success: true, 
        message: 'Thank you for your feedback! It will be reviewed before appearing in the testimonials.' 
      };
    } catch (dbError: any) {
      console.error('Server action: Database error when submitting testimonial:', dbError);
      return {
        success: false,
        error: 'Database error: ' + (dbError.message || 'Failed to save your feedback')
      };
    }
  } catch (error: any) {
    console.error('Server action: Unexpected error in submitGuestbookEntry:', error);
    return { 
      success: false, 
      error: 'Something went wrong. Please try again later.'
    };
  }
} 