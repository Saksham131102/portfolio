'use server';

import { submitTestimonial } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function submitGuestbookEntry(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const rating = parseInt(formData.get('rating') as string);
    
    if (!name || !email || !message || isNaN(rating)) {
      return { success: false, error: 'All fields are required' };
    }
    
    if (rating < 1 || rating > 5) {
      return { success: false, error: 'Rating must be between 1 and 5' };
    }
    
    await submitTestimonial({
      name,
      email,
      message,
      rating
    });
    
    // Revalidate the paths where testimonials are displayed
    revalidatePath('/');
    revalidatePath('/guestbook');
    
    return { 
      success: true, 
      message: 'Thank you for your feedback! It will be reviewed before appearing in the testimonials.' 
    };
  } catch (error) {
    console.error('Error submitting guestbook entry:', error);
    return { 
      success: false, 
      error: 'Something went wrong. Please try again later.'
    };
  }
} 