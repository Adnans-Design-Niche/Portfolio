// // components/Grid.js
// export default function Grid({ dynamicContent = [] }) {
//   const gridItems = Array.from({ length: 24 });

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Grid without bottom spacing */}
//       <div className="grid grid-cols-6 grid-rows-4 w-full h-[92%] bg-blue-365BAD pt-4 pl-4 pr-4 gap-0">
//         {gridItems.map((_, index) => (
//           <div
//             key={index}
//             className="relative flex items-center justify-center bg-[#365BAD] text-white"
//           >
//             {/* Custom shorter border effect */}
//             <>
//               {/* Top border for cells 1 to 6 */}
//               {index >= 0 && index <= 5 && (
//                 <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t-[2px] border-[#9AB2E5]"></div>
//               )}
//               {/* Bottom border for cells 19 to 24 */}
//               {index >= 18 && index <= 23 && (
//                 <div className="absolute bottom-0 left-[5%] w-[90%] h-5 border-b-[2px]  border-[#9AB2E5]"></div>
//               )}
//               {/* Left border for cells 1, 7, 13, 19 */}
//               {[0, 6, 12, 18].includes(index) && (
//                 <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l-[2px]  border-[#9AB2E5]"></div>
//               )}
//               {/* Right border for cells 6, 12, 18, 24 */}
//               {[5, 11, 17, 23].includes(index) && (
//                 <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r-[2px]  border-[#9AB2E5]"></div>
//               )}
//             </>
//             <>
//               <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t border-[#9AB2E5]"></div>
//               <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l border-[#9AB2E5]"></div>
//               <div className="absolute bottom-0 left-[5%] w-[90%] h-1 border-b border-[#9AB2E5]"></div>
//               <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r border-[#9AB2E5]"></div>
//             </>
//             {dynamicContent.find((item) => item.index === index)?.content && (
//               <div className="z-10 text-sm font-bold text-center">
//                 {dynamicContent.find((item) => item.index === index)?.content}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="pl-6 pt-4">PORTFOLIO 2024</div>
//     </div>
//   );
// }

import React from "react";

const Grid = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // gap: "10px",
          padding: "1rem",
          paddingBottom: "0rem",
        }}
      >
        <div className="container1" style={containerStyle}>
          <BorderTop />
          <BorderLeft />
          <BorderElements />
        </div>
        <div className="container2" style={containerStyle}>
          <BorderTop />
          <BorderElements />
        </div>
        <div className="container3" style={containerStyle}>
          <BorderTop />
          <BorderElements />
        </div>
        <div className="container4" style={containerStyle}>
          <BorderTop />
          <BorderElements />
        </div>
        <div className="container5" style={containerStyle}>
          <BorderTop />
          <BorderElements />
        </div>
        <div className="container6" style={containerStyle}>
          <BorderTop />
          <BorderRight />
          <BorderElements />
        </div>
        <div className="container7" style={containerStyle}>
          <BorderLeft />
          <BorderElements />
        </div>
        <div className="container8" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container9" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container10" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container11" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container12" style={containerStyle}>
          <BorderRight />
          <BorderElements />
        </div>
        <div className="container13" style={containerStyle}>
          <BorderLeft />
          <BorderElements />
        </div>
        <div className="container14" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container15" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container16" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container17" style={containerStyle}>
          <BorderElements />
        </div>
        <div className="container18" style={containerStyle}>
          <BorderRight />
          <BorderElements />
        </div>
        <div className="container19" style={containerStyle}>
          <BorderBottom />
          <BorderLeft />
          <BorderElements />
        </div>
        <div className="container20" style={containerStyle}>
          <BorderBottom />
          <BorderElements />
        </div>
        <div className="container21" style={containerStyle}>
          <BorderBottom />
          <BorderElements />
        </div>
        <div className="container22" style={containerStyle}>
          <BorderBottom />
          <BorderElements />
        </div>
        <div className="container23" style={containerStyle}>
          <BorderBottom />
          <BorderElements />
        </div>
        <div className="container24" style={containerStyle}>
          <BorderRight />
          <BorderBottom />
          <BorderElements />
        </div>
      </div>
      <div className="pl-6 pt-4">PORTFOLIO 2024</div>
    </>
  );
};

const BorderElements = () => (
  <>
    <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t border-[#9AB2E5]"></div>
    <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l border-[#9AB2E5]"></div>
    <div className="absolute bottom-0 left-[5%] w-[90%] h-1 border-b border-[#9AB2E5]"></div>
    <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r border-[#9AB2E5]"></div>
  </>
);
const BorderLeft = () => (
  <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l-[2px]  border-[#9AB2E5]"></div>
);
const BorderRight = () => (
  <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r-[2px]  border-[#9AB2E5]"></div>
);
const BorderTop = () => (
  <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t-[2px] border-[#9AB2E5]"></div>
);
const BorderBottom = () => (
  <div className="absolute bottom-0 left-[5%] w-[90%] h-5 border-b-[2px]  border-[#9AB2E5]"></div>
);

const containerStyle = {
  flex: "1 0 calc(16.66% - 10px)", // 1/6th of the row with spacing
  height: "9.7rem",
  position: "relative",
  backgroundColor: "#365BAD",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  textAlign: "center",
  overflow: "hidden",
};

export default Grid;
