import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const LineConnectingDots = ({ dots, pShipPos }) => {
  const lineStyle = {
    stroke: "#B3DBFF",
    strokeWidth: 3,
  };

  const SvgPos = styled.svg`
    position: absolute;
  `;

  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (animationProgress < dots.length - 1) {
        setAnimationProgress(animationProgress + 1);
      }
    };

    const animationInterval = setInterval(animate, 1000); // Adjust the interval as needed

    return () => {
      clearInterval(animationInterval);
    };
  }, [animationProgress, dots]);

  const renderDotsAndLines = () => {
    const dotComponents = dots.map((dot, index) => (
      <circle
        key={index}
        cx={dot.x}
        cy={dot.y}
        r={12.5}
        fill={animationProgress >= index ? "#B3DBFF" : "transparent"}
      />
    ));

    const lineComponents = [];
    for (let i = 0; i < animationProgress; i++) {
      lineComponents.push(
        <line
          key={i}
          x1={dots[i].x}
          y1={dots[i].y}
          x2={dots[i + 1].x}
          y2={dots[i + 1].y}
          style={lineStyle}
        />
      );
    }

    return [...dotComponents, ...lineComponents];
  };

  const [shipPosition, setShipPosition] = useState({
    x: dots[0].x,
    y: dots[0].y,
  });

  useEffect(() => {
    const animate = () => {
      if (animationProgress < dots.length - 1) {
        setAnimationProgress(animationProgress + 1);
        const nextDot = dots[animationProgress + 1];
        setShipPosition({ x: nextDot.x, y: nextDot.y });
        pShipPos({ x: nextDot.x, y: nextDot.y });
      }
    };

    const animationInterval = setInterval(animate, 1000); // Adjust the interval as needed

    return () => {
      clearInterval(animationInterval);
    };
  }, [animationProgress, dots]);
  return (
    <SvgPos width="1920" height="475">
      {renderDotsAndLines()}
    </SvgPos>
  );
};

export default LineConnectingDots;
