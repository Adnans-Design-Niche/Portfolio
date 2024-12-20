"use client"; // Ensures the component runs only on the client-side

import React, { useState, useEffect } from "react";

const DateComponent = () => {
  // State to store the formatted date
  const [date, setDate] = useState("");

  useEffect(() => {
    // Function to update the date in "DD.MM.YYYY" format
    const updateDate = () => {
      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "."); // Replace "/" with "." for the desired format

      setDate(formattedDate);
    };

    updateDate(); // Initial call to set the date immediately

    // Set an interval to update the date every 24 hours
    const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute left-[1vw] bottom-[2vh]">
      <div className="text-[0.75vw] font-light">{date}</div>
    </div>
  );
};

export default DateComponent;
