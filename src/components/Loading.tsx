// src/components/LoadingSpinner.tsx
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const LoadingSpinner: React.FC = () => {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spinnerRef.current) {
      gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#006a64] bg-opacity-80 z-50">
      <div
        className="border-8 border-t-8 border-gray-200 border-t-[#006a64] border-solid rounded-full w-16 h-16"
        ref={spinnerRef}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
