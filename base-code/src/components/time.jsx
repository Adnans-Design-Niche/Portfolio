"use client";
import React, { useState, useEffect } from 'react';

const Time = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            const dayOptions = { weekday: 'long' };

            const timePart = date.toLocaleTimeString([], timeOptions);
            const dayPart = date.toLocaleDateString([], dayOptions);

            setTime(`${timePart}, ${dayPart}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="absolute right-[1vw] top-[2vh]">
            <div className="text-[0.8vw] font-normal">
                {time}
            </div>
        </div>
    );
};

export default Time;
