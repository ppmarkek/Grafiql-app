import React, { useState } from 'react';

export default function ErrorPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const domainX = [0, document.body.clientWidth];
    const domainY = [0, document.body.clientHeight];
    const range = [-10, 10];

    const translate = {
      x:
        range[0] +
        ((event.clientX - domainX[0]) * (range[1] - range[0])) /
          (domainX[1] - domainX[0]),
      y:
        range[0] +
        ((event.clientY - domainY[0]) * (range[1] - range[0])) /
          (domainY[1] - domainY[0]),
    };

    setPosition({ x: translate.x, y: translate.y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div>
      <div className="stars">
        {Array.from({ length: 80 }, (_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
      <div className="center">
        <div className="circle circle--outer"></div>
        <div className="circle circle--inner">
          <div className="four four--1">4</div>
          <div className="four four--2">4</div>

          <div
            className="circle oh"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          ></div>
        </div>
        <div className="button">GO HOME</div>
      </div>
      <div className="sorry">Oops! Sorry, page not found.</div>
    </div>
  );
}
