import React from "react";
import { GridItem } from "@/components/GridItem";
import Intro from "@/components/Intro";
import Image from "next/image";
import Time from "@/components/time";
import Date from "@/components/date";
import Menu from "@/components/menu";
import Socials from "@/components/socials";

export default function Page() {
  // Define the grid content with items, positions, and spans
  const gridContent = [
    // First Row
    {
      // Logo Image in the first cell
      content: (
        <div className="h-full w-full p-[7vh]">
          <div className="relative h-full w-full">
            <Image src="/Logo(Text).svg" alt="Logo" layout="fill" objectFit="contain" />
          </div>
        </div>
      ),
      rowSpan: 1,
      colSpan: 1,
      rowStart: 1,
      colStart: 1,
    },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 2 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 3 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 4 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 5 },
    {
      // Time and Date components in the last cell of the first row
      content: (
        <>
          <Time />
          <Date />
        </>
      ),
      rowSpan: 1,
      colSpan: 1,
      rowStart: 1,
      colStart: 6,
    },

    // Second Row
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 1 },
    {
      // Landing Image spanning two rows and two columns
      content: (
        <div className="h-full w-full p-2">
          <div className="relative h-full w-full">
            <Image src="/Landing-Image.png" alt="Landing Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      ),
      rowSpan: 2,
      colSpan: 2,
      rowStart: 2,
      colStart: 2,
    },
    {
      // Intro component in the second row
      content: <Intro />,
      rowSpan: 1,
      colSpan: 1,
      rowStart: 2,
      colStart: 4,
    },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 5 },
    {
      // Menu component in the last cell of the second row
      content: <Menu />,
      rowSpan: 1,
      colSpan: 1,
      rowStart: 2,
      colStart: 6,
    },

    // Third Row
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 1 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 4 },
    {
      // Logo Vector image in the third row
      content: (
        <div className="h-full w-full p-[7vh]">
          <div className="relative h-full w-full">
            <Image src="/Logo-Vector.svg" alt="Logo" layout="fill" objectFit="contain" />
          </div>
        </div>
      ),
      rowSpan: 1,
      colSpan: 1,
      rowStart: 3,
      colStart: 5,
    },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 6 },

    // Fourth Row
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 1 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 2 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 3 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 4 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 5 },
    {
      // Socials component in the last cell of the fourth row
      content: <Socials />,
      rowSpan: 1,
      colSpan: 1,
      rowStart: 4,
      colStart: 6,
    },
  ];

  return (
    <>
      {/* Map through gridContent to render each GridItem */}
      {gridContent.map((item, index) => (
        <GridItem
          key={index}               // Unique key for each GridItem
          content={item.content}    // Content to display in the grid cell
          rowSpan={item.rowSpan}    // Number of rows to span
          colSpan={item.colSpan}    // Number of columns to span
          rowStart={item.rowStart}  // Starting row position
          colStart={item.colStart}  // Starting column position
        />
      ))}
    </>
  );
}
