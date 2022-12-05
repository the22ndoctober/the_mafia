import React, { useEffect, useState } from "react";

const CircularProgress = ({ size, strokeWidth, seconds, color }) => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(seconds);
  }, [seconds]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * (100 / 60) * circumference) / 100;

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      <svg
        style={{ position: "absolute" }}
        width={size}
        height={size}
        viewBox={viewBox}
      >
        <circle
          fill="none"
          stroke="#fff"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          style={{transitionDuration:'1s'}}
        />
      </svg>
      <h1
        style={{
          margin: "0 auto",
          fontSize: "62px",
          color: '#fff'
        }}
      >{`${seconds}s`}</h1>
    </div>
  );
};

export default CircularProgress;