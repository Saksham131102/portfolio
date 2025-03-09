import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Head from "next/head";
import Docker from "./(components)/Docker";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saksham | My Portfolio",
  description: "A Full-Stack Developer with more than a year of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <div className="bg"></div> */}
          <div className="h-screen overflow-auto scroll-smooth">
            <Navbar />
            {children}
          </div>
          <Docker />
        </ThemeProvider>
      </body>
    </html>
  );
}
