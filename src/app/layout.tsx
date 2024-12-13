import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saksham - Portfolio",
  description: "A Full-Stack Developer with more than a year of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/icon-72x72.png" sizes="72x72" />
        <link rel="icon" href="/icon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/icon-144x144.png" sizes="144x144" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/icon-512x512.png" sizes="512x512" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="AppName" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <body className={inter.className}>
        {/* <div className="bg"></div> */}
        <div className="h-screen overflow-auto">
          <Navbar />
          {children}
        </div>
        {/* <div className="absolute flex-none w-full z-50 hover:bg-blue-gray-500 bottom-10 flex justify-center text-xl">
          Docker
        </div> */}
      </body>
    </html>
  );
}
