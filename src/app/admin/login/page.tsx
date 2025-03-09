import { Metadata } from 'next';
import AdminLoginForm from './AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login | Portfolio',
  description: 'Login to access admin features',
};

export default function AdminLoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto px-4 py-12">
      <div className="max-w-md w-full border border-[#b3b3b3] dark:border-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <AdminLoginForm />
      </div>
    </div>
  );
} 