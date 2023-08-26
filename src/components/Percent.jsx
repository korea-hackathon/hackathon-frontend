import React, { useState, useEffect } from "react";

const PercentageAnimation = ({ target, onPercentageChange }) => {
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    if (percentage < target) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + 1;
          if (newPercentage >= target) {
            clearInterval(interval);
          }
          onPercentageChange(newPercentage); // Notify the parent component
          return newPercentage;
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [percentage, target, onPercentageChange]);

  return <h2>{`${percentage}%`}</h2>;
};

export default PercentageAnimation;
