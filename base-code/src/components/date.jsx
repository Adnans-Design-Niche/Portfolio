"use client";
import React, { useState, useEffect } from 'react';

const DateComponent = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            setDate(`${day}.${month}.${year}`);
        };

        updateDate();
        const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="absolute left-[1vw] bottom-[2vh]">
            <div className="text-[0.75vw] font-light">
                {date}
            </div>
        </div>
    );
};

export default DateComponent;
