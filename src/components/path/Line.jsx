import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const SvgPos = styled.svg`
  position: absolute;
  @keyframes dash {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const LineConnectingDots = ({ dots, shipPos }) => {
  const lineStyle = {
    stroke: "#1E6BC5",
    strokeWidth: 3,
    strokeDasharray: 1,
    strokeDashoffset: 0,
    animation: "dash 200ms linear",
  };

  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (animationProgress < dots.length - 1) {
        setAnimationProgress(animationProgress + 1);
      }
    };

    const animationInterval = setInterval(animate, 200); // Adjust the interval as needed

    return () => {
      clearInterval(animationInterval);
    };
  }, [animationProgress, dots]);

  const renderDotsAndLines = () => {
    const dotComponents = dots.map((dot, index) => (
      <circle
        key={index + "circle"}
        cx={dot.x}
        cy={dot.y}
        r={12.5}
        // fill={animationProgress >= index ? "#fff" : "white"}
        fill={
          shipPos === index
            ? animationProgress >= index
              ? "#1e6bc5"
              : "#fff"
            : "white"
        }
        stroke={animationProgress >= index ? "#1E6BC5" : "white"}
        strokeWidth="3"
      />
    ));

    const lineComponents = [];
    for (let i = 0; i < animationProgress; i++) {
      lineComponents.push(
        <line
          key={i + "line"}
          x1={dots[i].x}
          y1={dots[i].y}
          x2={dots[i + 1].x}
          y2={dots[i + 1].y}
          style={lineStyle}
          pathLength="1"
        />
      );
    }

    return [, ...lineComponents, ...dotComponents];
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
      }
    };

    const animationInterval = setInterval(animate, 200); // Adjust the interval as needed

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
