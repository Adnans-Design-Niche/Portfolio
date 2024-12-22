import React from "react";

// Grid component to render individual grid cells with borders
export const Grid = ({ content, rowSpan, colSpan, rowStart, colStart }) => {
  // Renders border elements around the grid item based on position
  const BorderElements = () => (
    <>
      {/* Top border for the first row items */}
      {rowStart === 1 && (
        <div className="absolute top-0 left-[5%] w-[90%] h-[1px] border-t-[1.5px] border-[#9AB2E5]" />
      )}
      
      {/* Left border for the first column items */}
      {colStart === 1 && (
        <div className="absolute top-[5%] left-0 h-[90%] w-[1px] border-l-[1.5px] border-[#9AB2E5]" />
      )}
      
      {/* Bottom border for all items */}
      <div className="absolute bottom-0 left-[5%] w-[90%] h-[1px] border-b-[1.5px] border-[#9AB2E5]" />
      
      {/* Right border for all items */}
      <div className="absolute top-[5%] right-0 h-[90%] w-[1px] border-r-[1.5px] border-[#9AB2E5]" />
    </>
  );

  return (
    <div
      style={{
        // Define grid position and span dynamically
        gridColumn: `${colStart} / span ${colSpan}`,
        gridRow: `${rowStart} / span ${rowSpan}`,
      }}
      className="relative bg-[#365BAD]" // Background color and relative positioning for border placement
    >
      <BorderElements />
      {content} {/* Render the content passed as a prop */}
    </div>
  );
};

export default Grid;