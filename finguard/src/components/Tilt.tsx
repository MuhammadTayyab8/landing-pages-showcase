import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

/**
 * Wraps content in a 3D stage that tilts toward the pointer,
 * with a soft light glare that follows the cursor.
 */
export function Tilt({ children, max = 14, className = '' }: { children: React.ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 160, damping: 18 });
  const sy = useSpring(py, { stiffness: 160, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glare = useTransform(
    [sx, sy] as never,
    ([x, y]: number[]) => `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,140,60,0.28), transparent 55%)`,
  );

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={className} style={{ perspective: 1100 }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative h-full w-full">
        {children}
        <motion.div aria-hidden className="pointer-events-none absolute -inset-16 rounded-full" style={{ background: glare }} />
      </motion.div>
    </div>
  );
}
