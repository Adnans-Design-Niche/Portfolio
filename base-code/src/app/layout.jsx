import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "@/components/cursor";
import React, { Suspense } from "react";

// Initialize the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// SEO and Open Graph metadata configuration
export const metadata = {
  title: "Adnan's Portfolio",
  description: "Portfolio of Adnan Siddiqui showcasing projects and skills.",
  keywords: "Adnan Siddiqui, Portfolio, Web Developer, Projects, Skills",
  openGraph: {
    title: "Adnan's Portfolio",
    description: "Portfolio of Adnan Siddiqui showcasing projects and skills.",
    url: "https://yourdomain.com", // Replace with your actual domain URL
    siteName: "Adnan's Portfolio",
    images: [
      {
        url: "/Logo-Vector.svg",
        width: 800,
        height: 600,
        alt: "Adnan's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/Logo-Vector.svg",
  },
};

// Root layout component for wrapping all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen w-screen antialiased selection:bg-[#E1E3FC] selection:text-[#365BAD]`}>
        <Suspense>
          {/* Grid layout for organizing page content */}
          <div className="grid grid-rows-4 grid-cols-6 m-[2.4vh] gap-0 h-[90vh]">
            {children}
          </div>
        </Suspense>

        {/* Footer text */}
        <div className="pl-[1.75vw] text-[1vw] font-normal">PORTFOLIO 2024</div>

        {/* Custom cursor component */}
        <Cursor />
      </body>
    </html>
  );
}
