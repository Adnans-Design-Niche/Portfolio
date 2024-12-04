import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="h-full w-full flex border-b border-[#9ab2e5] divide-x divide-[#9ab2e5]">
      <div className="h-full w-[33%] flex items-center pl-24 justify-left text-[#9ab2e5] space-x-20 text-sm">
        {/* Bug: Fix this URL to go to Landing */}
        {/* Bug: Remove dragging ability */}
        {/* Bug: Update Cursor to grow on nearby hover*/}
        {/* <Image
          className="pointer-events-none"
          src="/Logo-Vector.svg"
          href="/"
          alt="Logo"
          width={20}
          height={20}
        /> */}
        <Link href="/about">About</Link>
        <Link href="/archives">Archives</Link>
        <Link href="/archives">Articles</Link>
      </div>
      <div className="h-full w-[34%] flex items-center justify-center text-[#9ab2e5] space-x-20 text-sm">
        {/* Feature: On hover change the color and increase the cursor radius */}
        {/* <Link href="/about">About</Link>
        <Link href="/archives">Archives</Link>
        <Link href="/archives">Articles</Link> */}
        <Image
          className="pointer-events-none"
          src="/Logo-Vector.svg"
          href="/"
          alt="Logo"
          width={20}
          height={20}
        />
        {/* Feature: Create another Link and page for for Blog */}
      </div>
      <div className="h-full w-[18%] flex items-center justify-center text-[#9ab2e5] space-x-10">
        {/* Bug: Remove dragging ability for all social icons */}
        {/* Bug: Update Cursor to grow on nearby hover*/}
        <a
          href="https://github.com/Adnans-Design-Niche"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://instagram.com/adn.memos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/adn-memos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      {/* Bug: Fix this issue of redirecting to contact page */}
      <div className="contact-wrap h-full w-[15%] flex items-center justify-center text-[#9ab2e5]">
        <Link className="hover-color transition-transform duration-100 ease-in-out" href="/contact" >Let&apos;s Talk</Link>
      </div>
    </nav>
  );
};

export default Nav;