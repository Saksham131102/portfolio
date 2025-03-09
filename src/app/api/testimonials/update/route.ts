import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

// Create a server-side admin Supabase client that bypasses RLS
function createAdminClient() {
  // For local development, add this to your .env.local:
  // SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-supabase-project-settings
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  
  // If we don't have a service key, fall back to anonymous key
  const supabaseKey = supabaseServiceKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export async function POST(request: Request) {
  try {
    const { id, approved } = await request.json();
    
    if (!id || typeof approved !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request parameters' },
        { status: 400 }
      );
    }
    
    // Use admin client instead of public client
    const supabase = createAdminClient();
    
    // Update the testimonial
    const { error } = await supabase
      .from('testimonials')
      .update({ approved })
      .eq('id', id);
    
    if (error) {
      console.error('Error updating testimonial:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    // Fetch the updated testimonial to confirm the change
    const { data: updatedTestimonial, error: fetchError } = await supabase
      .from('testimonials')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError) {
      console.warn('Error fetching updated testimonial:', fetchError);
      // Continue anyway as the update might have succeeded
    }
    
    // Verify the update was successful
    if (updatedTestimonial && updatedTestimonial.approved !== approved) {
      return NextResponse.json(
        { error: 'Update failed to apply correctly' },
        { status: 500 }
      );
    }
    
    // Revalidate paths that might display testimonials
    revalidatePath('/');
    revalidatePath('/guestbook');
    revalidatePath('/testimonials');
    revalidatePath('/admin/testimonials');
    
    return NextResponse.json({ 
      success: true, 
      data: updatedTestimonial || { id, approved }
    });
  } catch (error) {
    console.error('Error in testimonial update endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 