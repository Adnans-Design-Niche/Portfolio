import React from "react";

export const GridItem = ({ content, rowSpan, colSpan, rowStart, colStart }) => {

  const BorderElements = () => (
    <>
      {rowStart === 1 && (
        <div className="absolute top-0 left-[5%] w-[90%] h-1 border-t-[1.5px] border-[#9AB2E5]"></div>
      )}
      {colStart === 1 && (
        <div className="absolute top-[5%] left-0 h-[90%] w-1 border-l-[1.5px] border-[#9AB2E5]"></div>
      )}
      <div className="absolute bottom-0 left-[5%] w-[90%] h-1 border-b-[1.5px] border-[#9AB2E5]"></div>
      <div className="absolute top-[5%] right-0 h-[90%] w-1 border-r-[1.5px] border-[#9AB2E5]"></div>
    </>
  );

  return (
    <div
      style={{
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
      className="relative bg-[#365BAD]"
    >
      <BorderElements />
      {content}
    </div>
  );
};
