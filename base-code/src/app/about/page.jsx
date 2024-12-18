// import React from "react";

// const page = () => {
//   const BorderElements = () => (
//     <>
//       <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t border-[#9AB2E5]"></div>
//       <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l border-[#9AB2E5]"></div>
//       <div className="absolute bottom-0 left-[5%] w-[90%] h-1 border-b border-[#9AB2E5]"></div>
//       <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r border-[#9AB2E5]"></div>
//     </>
//   );
//   return (
//     <>
//      <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> Today is not lovely
//       </div>
//       <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> 13924
//       </div>
//       <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> 
//       </div>
//       <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> 43524
//       </div>
//       <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> 432543
//       </div>
//       <div className="relative row-span-5 col-span-1 bg-[#365BAD]">
//         <BorderElements /> 435gwf
//       </div>
//      </>
//   );
// };

// export default page;

// import React from "react";
// import { GridItem } from "../../components/GridItem";

// export default function Page() {
//   const gridContent = [
//     { content: "Today is lovely", rowSpan: 1, colSpan: 1 },
//     { content: "2", rowSpan: 1, colSpan: 1 },
//     { content: "Today", rowSpan: 1, colSpan: 1 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "", rowSpan: 1, colSpan: 1 },
//     // Image placeholder spanning cells (2,2)-(3,3)
//     {
//       content: <div className="bg-gray-300 w-full h-full flex items-center justify-center text-xl text-black">Image Placeholder</div>,
//       rowSpan: 2,
//       colSpan: 2,
//       rowStart: 2,
//       colStart: 2,
//     },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "", rowSpan: 1, colSpan: 1 },
//     { content: "Today is lovely", rowSpan: 1, colSpan: 1 },
//     { content: "2", rowSpan: 1, colSpan: 1 },
//     { content: "2", rowSpan: 1, colSpan: 1 },
//     { content: "", rowSpan: 2, colSpan: 2 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "", rowSpan: 1, colSpan: 1 },
//     { content: "Today is lovely", rowSpan: 1, colSpan: 1 },
//     { content: "2", rowSpan: 1, colSpan: 1 },
//     { content: "Today", rowSpan: 1, colSpan: 1 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//     { content: "4", rowSpan: 1, colSpan: 1 },
//   ];

//   return (
//     <>
//       {gridContent.map((item, index) => (
//         <GridItem
//           key={index}
//           content={item.content}
//           rowSpan={item.rowSpan}
//           colSpan={item.colSpan}
//           rowStart={item.rowStart}
//           colStart={item.colStart}
//         />
//       ))}
//     </>
//   );
// }


import React from "react";
import { GridItem } from "../../components/GridItem";
import Intro from "../../components/intro";

export default function Page() {
  const gridContent = [
    // First Row
    { content: "Content 1", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 1 },
    { content: "Content 2", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 2 },
    { content: "Content 3", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 3 },
    { content: "Content 4", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 4 },
    { content: "Content 5", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 5 },
    { content: "Content 6", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 6 },

    // Image Placeholder (Spans 2 rows x 3 columns)
    {
      content: (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          Image Placeholder
        </div>
      ),
      rowSpan: 2,
      colSpan: 2,
      rowStart: 2,
      colStart: 2,
    },

    // Remaining Content
    { content: "Content 7", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 1 },
    { content: "Content 7", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 4 },
    { content: "Content 8", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 5 },
    { content: "Content 9", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 6 },
    { content: "Content 10", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 1 },
    { content: "Content 10", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 4 },
    { content: "Content 11", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 5 },
    { content: "Content 12", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 6 },
    { content: "Content 13", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 1 },
    { content: "Content 14", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 2 },
    { content: "Content 15", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 3 },
    { content: <Intro key="right-top-wrap" />, rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 4 },
    { content: "Content 17", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 5 },
    { content: "Content 18", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 6 },
  ];

  return (
    <>
      {gridContent.map((item, index) => (
        <GridItem
          key={index}
          content={item.content}
          rowSpan={item.rowSpan}
          colSpan={item.colSpan}
          rowStart={item.rowStart}
          colStart={item.colStart}
        />
      ))}
    </>
  );
}
