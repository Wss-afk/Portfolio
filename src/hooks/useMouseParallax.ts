import { useEffect, useEffectEvent, useState } from "react";

type PointerPosition = {
  x: number;
  y: number;
};

export function useMouseParallax(disabled: boolean) {
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 });

  const handleMove = useEffectEvent((event: MouseEvent) => {
    const nextX = ((event.clientX / window.innerWidth) - 0.5) * 2;
    const nextY = ((event.clientY / window.innerHeight) - 0.5) * 2;

    setPosition({ x: nextX, y: nextY });
  });

  useEffect(() => {
    if (disabled) {
      return;
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [disabled]);

  return disabled ? { x: 0, y: 0 } : position;
}
