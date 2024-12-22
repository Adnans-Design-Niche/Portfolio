import React from "react";
import Grid from "@/components/grid";
import Intro from "@/components/introduction";

// Page component to render a grid layout with various content items
export default function Page() {
  // Array defining the grid content, positions, and spans
  const gridContent = [
    // First Row
    { content: "Content 1", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 1 },
    { content: "Content 2", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 2 },
    { content: "Content 3", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 3 },
    { content: "Content 4", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 4 },
    { content: "Content 5", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 5 },
    { content: "Content 6", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 6 },

    // Image Placeholder spanning 2 rows x 2 columns
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

    // Second Row
    { content: "Content 7", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 1 },
    { content: "Content 8", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 4 },
    { content: "Content 9", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 5 },
    { content: "Content 10", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 6 },

    // Third Row
    { content: "Content 11", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 1 },
    { content: "Content 12", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 4 },
    { content: "Content 13", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 5 },
    { content: "Content 14", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 6 },

    // Fourth Row
    { content: "Content 15", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 1 },
    { content: "Content 16", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 2 },
    { content: "Content 17", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 3 },
    { content: <Intro key="intro-component" />, rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 4 },
    { content: "Content 18", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 5 },
    { content: "Content 19", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 6 },
  ];

  return (
    <>
      {/* Render each Grid based on gridContent configuration */}
      {gridContent.map((item, index) => (
        <Grid
          key={index}               // Unique key for each grid item
          content={item.content}    // Content to be rendered inside the grid item
          rowSpan={item.rowSpan}    // Number of rows the item spans
          colSpan={item.colSpan}    // Number of columns the item spans
          rowStart={item.rowStart}  // Starting row position
          colStart={item.colStart}  // Starting column position
        />
      ))}
    </>
  );
}
