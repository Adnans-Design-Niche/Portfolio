"use client"; // Ensures this component runs only on the client-side

import React, { useState, useEffect } from "react";

// Time component to display the current time and day
const Time = () => {
  // State to store the formatted time and day
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update the time and day
    const updateTime = () => {
      const date = new Date();
      const timePart = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const dayPart = date.toLocaleDateString([], { weekday: "long" });
      setTime(`${timePart}, ${dayPart}`);
    };

    updateTime(); // Initial call to display the time immediately

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute right-[1vw] top-[2vh]">
      <div className="text-[0.8vw] font-normal">
        {time} {/* Display the formatted time and day */}
      </div>
    </div>
  );
};

export default Time;
