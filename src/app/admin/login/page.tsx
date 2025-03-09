import { Metadata } from 'next';
import { Suspense } from 'react';
import AdminLoginForm from './AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login | Portfolio',
  description: 'Login to access admin features',
};

// Make login page dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function LoginFormWithSuspense() {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <AdminLoginForm />
    </Suspense>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <LoginFormWithSuspense />
      </div>
    </div>
  );
} 