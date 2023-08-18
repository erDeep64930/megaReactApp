import React, { useState, useEffect } from 'react';
// import './AnalogClock.css'; // Create this CSS file for styling

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  return (
    <div className="analog-clock">
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      ></div>
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      ></div>
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogClock;
