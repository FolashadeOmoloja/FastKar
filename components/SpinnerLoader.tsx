"use client"
import { keyframes } from '@emotion/react';

interface SpinnerProps {
  signalColor?: string;
  warning?: string;
  innerDivWidth?: string;
  innerDivHeight?: string;
  outerDivWidth?: string;
  outerDivHeight?: string;
}

interface SpinnerPropsStyle {
  signalColor: string;
  outerDivWidth: string;
  outerDivHeight: string;
}

interface InnerSpinnerPropsStyle {
  innerDivWidth: string;
  innerDivHeight: string;
}

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerLoader: React.FC<SpinnerProps> = ({
  signalColor = 'conic-gradient(from 227.1deg at 50% 50%, #75c9fa  0deg, #3EB131 360deg)',
  warning = 'Loading...',
  innerDivWidth = '115px',
  innerDivHeight = '115px',
  outerDivWidth = '140px',
  outerDivHeight = '140px',
}) => {
  return (
    <div className="flex flex-col justify-center items-center font-bold text-2xl font-poppins space-y-6">
      <div
        className={`w-[140px] h-[140px] flex justify-center items-center rounded-full border border-transparent animate-spin`}
        style={{
          background: signalColor,
          transform: 'rotate(-90deg)',
          animation: `${loadingAnimation} 2s linear infinite`,
        }}
      >
        <div
          className={`w-[115px] h-[115px] rounded-full`}
        ></div>
      </div>
      <span>{warning}</span>
    </div>
  );
};

export default SpinnerLoader;
