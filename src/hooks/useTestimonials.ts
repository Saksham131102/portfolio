import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ITestimonial } from "@/types/testimonial";

// Fetch all testimonials (for admin)
export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      return data.data as ITestimonial[];
    },
  });
}

// Fetch approved testimonials (for public display)
export function useApprovedTestimonials() {
  return useQuery({
    queryKey: ["testimonials", "approved"],
    queryFn: async () => {
      const res = await fetch("/api/testimonials?approved=true");
      const data = await res.json();
      return data.data as ITestimonial[];
    },
  });
}

// Fetch top rated approved testimonials (limited number, for homepage)
export function useTopTestimonials(limit = 4) {
  return useQuery({
    queryKey: ["testimonials", "top", limit],
    queryFn: async () => {
      const res = await fetch(`/api/testimonials?lim=${limit}&approved=true`);
      const data = await res.json();
      return data.data as ITestimonial[];
    },
  });
}

// Fetch a single testimonial by ID
export function useTestimonial(id: string) {
  return useQuery({
    queryKey: ["testimonials", id],
    queryFn: async () => {
      const res = await fetch(`/api/testimonials?id=${id}`);
      const data = await res.json();
      return data.data as ITestimonial;
    },
    enabled: !!id, // Only run query if id is provided
  });
}

// Update a testimonial (for admin)
export function useUpdateTestimonial() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ 
      id, 
      testimonialData 
    }: { 
      id: string; 
      testimonialData: Partial<ITestimonial> 
    }) => {
      const res = await fetch(`/api/testimonials?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonialData),
      });
      
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.error || "Failed to update testimonial");
      }
      
      return data.data as ITestimonial;
    },
    onSuccess: (data) => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials", "approved"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials", "top"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials", data._id] });
    },
  });
}

// Delete a testimonial (for admin)
export function useDeleteTestimonial() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/testimonials?id=${id}`, {
        method: "DELETE",
      });
      
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.error || "Failed to delete testimonial");
      }
      
      return id;
    },
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials", "approved"] });
      queryClient.invalidateQueries({ queryKey: ["testimonials", "top"] });
    },
  });
}

// Create a new testimonial (for visitors)
export function useCreateTestimonial() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (testimonialData: Omit<ITestimonial, "_id" | "createdAt" | "updatedAt">) => {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonialData),
      });
      
      const data = await res.json();
      
      if (!data.success) {
        throw new Error(data.error || "Failed to create testimonial");
      }
      
      return data;
    },
    onSuccess: () => {
      // Only invalidate admin queries since new testimonials need approval
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
} 