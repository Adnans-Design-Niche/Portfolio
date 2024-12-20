import React from "react";
import Link from "next/link";

// Menu component to display navigation links
const Menu = () => {
  return (
    <div className="h-full w-full flex pt-[18vh] justify-center text-[#E1E3FC] space-x-[1.6vw] text-[1vw]">
      {/* Navigation link to the About page */}
      <Link href="/about">
        About
      </Link>

      {/* Navigation link to the Articles page */}
      <Link href="/articles">
        Articles
      </Link>

      {/* Navigation link to the Archives page */}
      <Link href="/archives">
        Archives
      </Link>
    </div>
  );
};

export default Menu;
