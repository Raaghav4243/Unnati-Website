import React, { useState, useEffect } from "react";

import {
  ProgressBoxContainer,
  ProgressSVGContainer,
  OuterCircle,
  InnerCircle,
  ProgressText,
} from "./ProgressElements";

export const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
  content,
}) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <ProgressBoxContainer>
        <ProgressSVGContainer width={size} height={size}>
          {/* <ProgressSVGContainer> */}
          <OuterCircle
            stroke={circleOneStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          ></OuterCircle>
          <InnerCircle
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          ></InnerCircle>
          <ProgressText x={center} y={center}>
            {progress}%
          </ProgressText>
        </ProgressSVGContainer>
      </ProgressBoxContainer>
    </>
  );
};
