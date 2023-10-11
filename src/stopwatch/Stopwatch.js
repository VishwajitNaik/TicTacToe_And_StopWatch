import React, { useState, useRef } from 'react';
import "./stopwatch.css"

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(remainingSeconds).padStart(2, '0')
    );
  };

  return (
    <div className="stopwatch">
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
};

export default Stopwatch;
