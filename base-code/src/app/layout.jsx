import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "@/components/cursor";
import React, { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  /* Update: Add better metadata with SEO optimization */
  title: "Adnan's Portfolio",
  description: "Portfolio of Adnan Siddiqui showcasing projects and skills.",
  keywords: "Adnan Siddiqui, Portfolio, Web Developer, Projects, Skills",
  openGraph: {
    title: "Adnan's Portfolio",
    description: "Portfolio of Adnan Siddiqui showcasing projects and skills.",
    url: "{/* Add your domain here */}",
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
  /* Update: Add a real Favicon */
  icons: {
    icon: "/Logo-Vector.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-screen antialiased selection:bg-[#E1E3FC] selection:text-[#365BAD]`}
        >
        {/* Update: Update the loading page look*/}
        <Suspense fallback={<loading/>}>
          <div className="grid grid-rows-4 grid-cols-6 m-[2.4vh] gap-0 h-[90vh]">
            {children}
          </div>
        </Suspense>
        <div className="pl-[1.75vw] text-[1vw] font-normal">PORTFOLIO 2024</div>
        <Cursor />
      </body>
    </html>
  );
}
