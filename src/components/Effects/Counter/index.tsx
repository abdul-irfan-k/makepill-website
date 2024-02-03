import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({
  from = 0,
  end = 100,
  direction = "up",
}: {
  from: number;
  end: number;
  direction?: "up" | "down";
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(direction == "up" ? 0 : end);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(spanRef, { once: true, margin: "-100px" });
  useEffect(() => {
    // if (isInView) {
      motionValue.set(direction === "down" ? 0 : 100);
    // }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (spanRef.current) {
          spanRef.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span ref={spanRef} />;
};

export default Counter;
