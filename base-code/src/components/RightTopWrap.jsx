import React from "react";
import Image from "next/image";

const RightTopWrap = ({ words, index }) => {
  return (
    <div className="right-top-wrap flex items-center justify-center h-[56%] text-wrap">
      <div className="pt-32">
        <Image
          className="hover-transform transition-transform duration-500 ease-in-out"
          src="/Hand-Vector.svg"
          alt="Hand"
          width={40}
          height={40}
        />
        <p className="text-[1.05rem] pt-4 hover-move-up transition-transform duration-500 ease-in-out">
          Hi, I am Adnan Siddiqui — Creative{"   "}
          <span className="bg-[#E1E3FC] text-[#365BAD] mix-blend-invert px-1">
             {words[index]}
          </span>
          <br className="leading-[2.75rem]" />
          <span className="text-[#9ab2e5] hover-color transition-transform duration-1000 ease-in-out">
            Whether it’s Shaping Interfaces, Capturing Moments, <br />
            Weaving Narratives, or Crafting Inspiring Stories, <br />
            Writing Code, and Breathing Life into Poetry. <br />I bring Ideas to
            Life with Creativity and Curiosity.
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightTopWrap;
