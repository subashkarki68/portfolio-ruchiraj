import { gsap } from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface CircleProps {
  size: "sm" | "md" | "lg";
  delay: number;
}

export interface CircleHandle {
  moveTo: (x: number, y: number) => void;
}

const Circle = forwardRef<CircleHandle, CircleProps>(({ size, delay }, ref) => {
  const el = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      moveTo(x: number, y: number) {
        if (el.current) {
          gsap.to(el.current, { x, y, delay });
        }
      },
    }),
    [delay]
  );

  return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
});

export default Circle;
