'use client';

import { useState, useEffect } from 'react';
import { Testimonial } from '@/lib/supabase';
import { DisplayRating } from '@/components/ui/star-rating';

interface TestimonialAdminProps {
  testimonials: Testimonial[];
}

// Helper function to format date consistently
function formatDate(dateString: string) {
  const date = new Date(dateString);
  
  // Format as "04 Mar, 2025"
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  
  return `${day} ${month}, ${year}`;
}

export default function TestimonialAdmin({ testimonials: initialTestimonials }: TestimonialAdminProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<{id: number, approved: boolean} | null>(null);

  const handleApprove = async (id: number, approved: boolean) => {
    setIsUpdating(id);
    setError(null);
    setSuccess(null);
    setLastAction({ id, approved });
    
    try {
      // Add a timestamp to avoid caching issues
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/testimonials/update?t=${timestamp}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, approved }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        console.error('Error response:', result);
        throw new Error(result.error || 'Failed to update testimonial');
      }
      
      if (!result.success) {
        throw new Error('Update was not successful');
      }
      
      // Update local state with the returned data if available
      if (result.data && result.data.id) {
        setTestimonials(testimonials.map(t => 
          t.id === id ? { ...t, ...result.data } : t
        ));
      } else {
        // Fallback to local update if no data returned
        setTestimonials(testimonials.map(t => 
          t.id === id ? { ...t, approved } : t
        ));
      }
      
      setSuccess(`Testimonial ${approved ? 'approved' : 'unapproved'} successfully!`);
      
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err) {
      console.error('Error updating testimonial:', err);
      setError(err instanceof Error ? err.message : 'Failed to update testimonial');
    } finally {
      setIsUpdating(null);
    }
  };

  const handleRetry = () => {
    if (lastAction) {
      setError(null);
      handleApprove(lastAction.id, lastAction.approved);
    }
  };

  // Count approved and pending testimonials
  const approvedCount = testimonials.filter(t => t.approved).length;
  const pendingCount = testimonials.length - approvedCount;

  return (
    <div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
          <div className="mt-2">
            <button 
              onClick={handleRetry}
              className="bg-red-200 hover:bg-red-300 text-red-800 font-semibold py-1 px-3 rounded mr-2"
            >
              Retry
            </button>
            <button 
              onClick={() => setError(null)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-3 rounded"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 relative">
          {success}
          <button 
            onClick={() => setSuccess(null)}
            className="absolute top-3 right-3 text-green-700 hover:text-green-900"
          >
            ✕
          </button>
        </div>
      )}
      
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-2">
            {approvedCount} Approved
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
            {pendingCount} Pending
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Rating</th>
              <th className="py-2 px-4 text-left">Message</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {testimonials.map((testimonial) => (
              <tr key={testimonial.id}>
                <td className="py-2 px-4">
                  {formatDate(testimonial.created_at)}
                </td>
                <td className="py-2 px-4">
                  {testimonial.name}<br />
                  <span className="text-xs text-gray-500">{testimonial.email}</span>
                </td>
                <td className="py-2 px-4">
                  <DisplayRating rating={testimonial.rating} />
                </td>
                <td className="py-2 px-4 max-w-xs truncate">
                  {testimonial.message}
                </td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    testimonial.approved
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {testimonial.approved ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleApprove(testimonial.id, !testimonial.approved)}
                    disabled={isUpdating === testimonial.id}
                    className={`px-3 py-1 text-sm rounded ${
                      testimonial.approved
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isUpdating === testimonial.id 
                      ? 'Updating...' 
                      : testimonial.approved 
                        ? 'Unapprove' 
                        : 'Approve'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {testimonials.length === 0 && (
        <p className="text-center text-gray-500 my-4">No testimonials yet.</p>
      )}
    </div>
  );
} 