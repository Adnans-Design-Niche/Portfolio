"use client";
import React from "react";
// import RootLayout from "../layout.jsx";

import Grid from "../components/Grid";

export default function Page() {
  // Define content for specific grid cells
  const content = [
    <h1 className="text-xl font-bold">Heading 1</h1>, // Cell 1
    <button className="px-4 py-2 bg-green-500 text-white rounded">
      Click Me
    </button>, // Cell 2
    <img
      src="https://via.placeholder.com/100"
      alt="Placeholder"
      className="rounded"
    />, // Cell 3
    <p className="text-sm text-gray-300">This is a paragraph in Cell 4.</p>, // Cell 4
    null, // Cell 5 (default content will show)
    <h2 className="text-lg font-semibold">Another Heading</h2>, // Cell 6
    // Add more content or leave null for other cells
  ];

  return <Grid content={content} />;
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import RightTopWrap from "../components/RightTopWrap";

// export default function Home() {
// const words = ["Designer", "Developer", "Photographer", "Writer"];
// const [index, setIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prevIndex) => (prevIndex + 1) % words.length);
//   }, 2000);

//   return () => clearInterval(interval);
// });

//   return <div></div>;
// }

// <main className="flex flex-row h-full w-full grow divide-x divide-[#9ab2e5]">
{
  /* <div className="left-wrap flex flex-col w-[67%] divide-y divide-[#9ab2e5]">
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
  </div> */
  /* </main> */
}
// "use client";
// import React from "react";
// import Grid from "../components/Grid";

// export default function Home() {
//   const cellContents = [
//     <div key="cell-1">Content for Cell 1</div>,
//     // Add more content for other cells if needed
//   ];

//   return (
//     <div>
//       <Grid cellContents={cellContents} />
//     </div>
//   );
// }
