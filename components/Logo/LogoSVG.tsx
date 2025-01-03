import React from 'react';

const LogoSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" rx="16" fill="#F04B4B" />
      <text
        x="100"
        y="85"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="42"
        fontWeight="600"
      >
        Satlok
      </text>
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fill="white"
        fontFamily="sans-serif"
        fontSize="32"
      >
        Ashram
      </text>
    </svg>
  );
};

export default LogoSVG;
