"use client"; // Ensures this component runs on the client-side only

import React, { useEffect, useState } from "react";

const Cursor = () => {
  // State to track the cursor position (x and y coordinates)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // State to track the visibility of the cursor
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Show cursor on mouse enter
    const handleMouseEnter = () => setVisible(true);

    // Hide cursor on mouse leave
    const handleMouseLeave = () => setVisible(false);

    // Add event listeners for mouse movements and visibility changes
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Render the custom cursor only when visible
  return visible ? (
    <div
      className="fixed w-4 h-4 bg-[#E1E3FC] rounded-full pointer-events-none transition-transform duration-100"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)", // Center the cursor
      }}
    />
  ) : null;
};

export default Cursor;
