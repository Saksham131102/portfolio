/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip generating admin pages during build - they'll be dynamic at runtime
  output: 'standalone',
  
  // Configure the admin pages as fully dynamic routes
  experimental: {
    // This specifies that admin routes should be server-rendered at runtime, not pre-rendered
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  }
};

export default nextConfig;
