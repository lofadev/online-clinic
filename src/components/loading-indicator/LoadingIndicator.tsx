import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SvgProps {
  small?: boolean;
}

type Props = SvgProps;

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

const Svg = styled.svg<SvgProps>`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: ${(p) => (p.small ? '1.25rem' : '3rem')};
  width: ${(p) => (p.small ? '1.25rem' : '3rem')};
  transform-origin: center;
`;

const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: ${(p) => p.theme.primary};
  stroke-linecap: round;
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIndicator: React.FC<Props> = ({ small }) => (
  <LoadingWrapper>
    <Svg viewBox="-24 -24 48 48" small={small}>
      <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
    </Svg>
  </LoadingWrapper>
);

export default LoadingIndicator;
