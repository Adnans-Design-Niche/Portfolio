"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RightTopWrap from "../components/RightTopWrap";

export default function Home() {
  // const words = ["Designer", "Developer", "Photographer", "Writer"];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % words.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // });

  return (
    <main className="flex flex-row h-full w-full grow divide-x divide-[#9ab2e5]">
      {/* <div className="left-wrap flex flex-col w-[67%] divide-y divide-[#9ab2e5]">
        <div className="left-top-wrap h-[56%]">
        <Image
            className="object-cover w-full h-full"
            src="/Landing-Image.png"
            alt="Person holding a Camera"
            width={500}
            height={50}
          />
        </div>
        <div className="left-bottom-wrap grow">Left Bottom</div>
      </div>
      <div className="right-wrap flex flex-col grow divide-y divide-[#9ab2e5] changeHappen relative">
        <RightTopWrap words={words} index={index} />
        <div className="right-bottom-wrap grow">Right Bottom</div>
      </div> */}
    </main>
  );
}
