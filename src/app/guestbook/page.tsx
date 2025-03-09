import { Metadata } from 'next';
import GuestbookForm from './GuestbookForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guestbook | My Portfolio',
  description: 'Leave your feedback about my portfolio.',
};

export default async function GuestbookPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="container px-5 lg:w-[860px] md:w-[780px] w-full md:px-[60px] py-12 text-sm">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">Guestbook</h1> */}
      
      <div className="my-12">
        {/* <h2 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono mb-6">Leave Your Feedback</h2> */}
        <div className="flex items-center justify-between mt-12 mb-6">
        <h1 className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono">leave your feedback</h1>
        <Link 
          href="/" 
          className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
        >
          back to home
        </Link>
      </div>
        <p className="dark:text-[#b3b3b3] text-black mb-6">
          I'd love to hear what you think about my portfolio! Your feedback helps me improve and grow.
          The top rated comments will be featured on the homepage.
        </p>
        <GuestbookForm />
      </div>
    </div>
    </main>
  );
} 