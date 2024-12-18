import React from "react";
import Link from "next/link";
import Image from "next/image";

const Socials = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full p-[2vh] space-y-[3.2vh]">
        <div className="h-full w-full flex justify-center text-[#E1E3FC] space-x-[1.2vw] text-[0.68vw] font-light"> 
          <Link
            href="https://github.com/Adnans-Design-Niche"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
          <Link
            href="https://instagram.com/adn.memos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            href="https://www.behance.net/adn-memos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </Link>
          <Link
            href="https://linkedin.com/in/adn-memos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
        <div className="relative h-full w-full p-[4vh]" >
        <Image src="/star-vector.svg" alt="Logo" layout="fill"  objectFit="contain"/>
        </div>
        <Link
          href="mailto:adn.memos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E1E3FC] text-[0.65vw] font-light"
        >
          adn.memos@gmail.com
        </Link>
      </div>
    </>
  );
};

export default Socials;
