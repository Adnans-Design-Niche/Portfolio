"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Intro = () => {
  const words = ["Designer", "Developer", "Photographer", "Writer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="mt-[4vh] p-[0.6vw]">
      <div className="relative w-[1.75vw] h-[3.5vh]">
        <Image
          className="hover-transform transition-transform duration-500 ease-in-out"
          src="/Hand-Vector.svg"
          alt="Hand"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-[0.63vw] pt-[0.5vh] hover-move-up transition-transform duration-500 ease-in-out">
        <span className="text-[0.63vw]">
          Hi, I am Adnan Siddiqui — Creative{" "}
          <span className="bg-[#E1E3FC] text-[#365BAD] mix-blend-invert px-[0.2vw]">
            {words[index]}
          </span>
        </span>
        <br className="leading-[4vh]" />
        <span className="text-[#9ab2e5] hover-color transition-transform duration-1000 ease-in-out text-[0.6vw]">
          Whether it’s Shaping Interfaces, Capturing Moments, <br />
          Weaving Narratives, or Crafting Inspiring Stories, <br />
          Writing Code, and Breathing Life into Poetry. <br />I bring Ideas to
          Life with Creativity and Curiosity.
        </span>
      </p>
    </div>
  );
};

export default Intro;
