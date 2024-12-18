import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    // <div className="h-full w-full flex pt-[8.5rem] justify-center text-[#E1E3FC] space-x-6 text-base">
    //   <Link href="/about">About</Link>
    //   <Link href="/archives">Articles</Link>
    //   <Link href="/archives">Archives</Link>
    // </div>
    <div className="h-full w-full flex pt-[18vh] justify-center text-[#E1E3FC] space-x-[1.6vw] text-[1vw]">
      <Link
      href="/about"
        // className="text-sm md:text-base lg:text-lg xl:text-xl"
      >
        About
      </Link>
      <Link
        href="/articles"
        // className="text-sm md:text-base lg:text-lg xl:text-xl"
      >
        Articles
      </Link>
      <Link
        href="/archives"
        // className="text-sm md:text-base lg:text-lg xl:text-xl"
      >
        Archives
      </Link>
    </div>
  );
};

export default Menu;
