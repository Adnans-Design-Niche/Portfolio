import React from "react";
import Link from "next/link";

// Menu component to display navigation links
const Menu = () => {
  return (
    <div className="h-full w-full flex pt-[18vh] justify-center text-[#E1E3FC] space-x-[1.6vw] text-[1vw]">
      {/* Navigation link to the About page */}
      <Link href="#">
        About
      </Link>

      {/* Navigation link to the Articles page */}
      <Link href="#">
        Articles
      </Link>

      {/* Navigation link to the Archives page */}
      <Link href="#">
        Archives
      </Link>
    </div>
  );
};

export default Menu;
