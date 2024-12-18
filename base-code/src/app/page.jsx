import React from "react";
import { GridItem } from "@/components/GridItem";
import Intro from "@/components/intro";
import Image from "next/image";
import Time from "@/components/time";
import Date from "@/components/date";
import Menu from "@/components/menu";
import Socials from "@/components/socials";

export default function Page() {
  const gridContent = [
    // First Row
    {
      content: (
        <div className="h-full w-full p-[7vh]">
          <div className="relative h-full w-full ">
            <Image
              src="/Logo(Text).svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
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
    { content: <><Time/><Date/></>, rowSpan: 1, colSpan: 1, rowStart: 1, colStart: 6 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 1 },
    {
      content: (
        <div className="h-full w-full p-2">
          <div className="relative h-full w-full">
            <Image
              src="/Landing-Image.png"
              alt="Landing Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ),
      rowSpan: 2,
      colSpan: 2,
      rowStart: 2,
      colStart: 2,
    },
    {
      content: <Intro/>,
      rowSpan: 1,
      colSpan: 1,
      rowStart: 2,
      colStart: 4,
    },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 5 },
    { content: <Menu/>, rowSpan: 1, colSpan: 1, rowStart: 2, colStart: 6 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 1 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 4 },
    {
      content: (
        <div className="h-full w-full p-[7vh]">
          <div className="relative h-full w-full">
            <Image
              src="/Logo-Vector.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      ),
      rowSpan: 1,
      colSpan: 1,
      rowStart: 3,
      colStart: 5,
    },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 3, colStart: 6 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 1 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 2 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 3 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 4 },
    { content: "", rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 5 },
    { content: <Socials/>, rowSpan: 1, colSpan: 1, rowStart: 4, colStart: 6 },
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
