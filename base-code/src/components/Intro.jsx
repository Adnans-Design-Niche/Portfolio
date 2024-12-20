"use client"; // Ensures this component runs on the client-side only

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Intro = () => {
  // Array of words to cycle through
  const words = ["Designer", "Developer", "Photographer", "Writer"];

  // State to track the current word index
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Interval to update the word index every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]); // Dependency ensures the effect re-runs if the words array changes

  return (
    <div className="mt-[4vh] p-[0.6vw]">
      {/* Hand image with a hover transform effect */}
      <div className="relative w-[1.75vw] h-[3.5vh]">
        <Image
          className="hover-transform transition-transform duration-500 ease-in-out"
          src="/Hand-Vector.svg"
          alt="Hand"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Introduction text with animated word changes */}
      <p className="text-[0.63vw] pt-[0.5vh] hover-move-up transition-transform duration-500 ease-in-out">
        <span>
          Hi, I am Adnan Siddiqui — Creative{" "}
          <span className="bg-[#E1E3FC] text-[#365BAD] px-[0.2vw]">
            {words[index]}
          </span>
        </span>

        <br className="leading-[4vh]" />

        {/* Description text with a subtle transition effect */}
        <span className="text-[#9AB2E5] transition-transform duration-1000 ease-in-out text-[0.6vw]">
          Whether it’s Shaping Interfaces, Capturing Moments, <br />
          Weaving Narratives, or Crafting Inspiring Stories, <br />
          Writing Code, and Breathing Life into Poetry. <br />
          I bring Ideas to Life with Creativity and Curiosity.
        </span>
      </p>
    </div>
  );
};

export default Intro;
