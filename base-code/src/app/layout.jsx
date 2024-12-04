import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "../components/cursor";
import Grid from "components//grid";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  /* Feature: Add better metadata with SEO optimization */
  title: "Adnan's Portfolio",
  description: "Portfolio of Adnan Siddiqui",
};

export default function RootLayout({ children }) {
  return (
    /* Feature: Add a suspense with a loading spinner component here whenever possible*/
    <html lang="en">
      <body
        className={`${inter.className} h-full antialiased selection:bg-[#E1E3FC] selection:text-[#365BAD]`}
      >
        <Grid/>
        {children}
        <Cursor />
      </body>
    </html>
  );
}
