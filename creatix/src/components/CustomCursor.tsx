import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

/**
 * Agency-style cursor: a precise lime dot plus a trailing ring that
 * grows over interactive elements. Only enabled on mouse/trackpad devices.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(!!(e.target as Element | null)?.closest?.(INTERACTIVE));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.addEventListener('pointerleave', leave);
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('pointerleave', leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1000] rounded-full border border-[#b8ff2c] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 64 : 36,
          height: hovering ? 64 : 36,
          backgroundColor: hovering ? 'rgba(184,255,44,1)' : 'rgba(184,255,44,0)',
          scale: pressed ? 0.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1001] h-1.5 w-1.5 rounded-full bg-[#b8ff2c]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
      />
    </>
  );
}
