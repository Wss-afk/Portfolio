import type { PointerEvent, ReactNode } from "react";
import { useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX / bounds.width) - 0.5) * 8;
    const rotateX = (((offsetY / bounds.height) - 0.5) * -1) * 8;

    setRotation({ x: rotateX, y: rotateY });
  }

  function handlePointerLeave() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: prefersReducedMotion
          ? undefined
          : `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-4px)`,
        transition: "transform 180ms ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
