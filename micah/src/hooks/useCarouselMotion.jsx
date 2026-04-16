// useCarouselMotion.js
import { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

export function useCarouselMotion({
  length,
  autoDelay = 10000,
  dragBuffer = 50,
  spring = { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  height = "90%"
}) {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);

  // AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setIndex(prev => (prev === length - 1 ? 0 : prev + 1));
      }
    }, autoDelay);

    return () => clearInterval(interval);
  }, [length, autoDelay, dragX]);

  // DRAG END LOGIC
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -dragBuffer && index < length - 1) {
      setIndex(prev => prev + 1);
    } else if (x >= dragBuffer && index > 0) {
      setIndex(prev => prev - 1);
    }

    dragX.set(0);
  };

  // MOTION PROPS FOR THE CONTAINER
  const containerMotion = {
    drag: "x",
    dragConstraints: { left: 0, right: 0 },
    animate: { translateX: `-${index * 100}%` },
    transition: spring,
    whileTap: { cursor: "grabbing" },
    onDragEnd,
    style: {
      x: dragX,
      display: "flex",
      alignItems: "center",
      cursor: "grab",
      height: height || "90%",
    }
  };

  return { index, setIndex, containerMotion };
}