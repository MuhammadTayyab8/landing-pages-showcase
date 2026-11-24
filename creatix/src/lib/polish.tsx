import { useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Smooth (inertia) scrolling with Lenis.
 * - Disabled for users who prefer reduced motion.
 * - Pauses page scrolling while any full-screen overlay (modal / drawer) is open.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: true, allowNestedScroll: true });
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });

    const root = document.documentElement;
    const syncOverlayLock = () => {
      const overlayOpen = document.querySelector('.fixed.inset-0') !== null;
      if (overlayOpen) {
        lenis.stop();
        root.style.overflow = 'hidden';
      } else {
        lenis.start();
        root.style.removeProperty('overflow');
      }
    };
    const observer = new MutationObserver(syncOverlayLock);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress({ color }: { color: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, background: color }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[999] h-[3px] origin-left"
    />
  );
}

/** Fades + lifts its children into view the first time they scroll on screen. */
export function Reveal({ children, delay = 0, y = 48 }: { children: ReactNode; delay?: number; y?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Floating "back to top" button that appears after the first screen. */
export function BackToTop({ className = '' }: { className?: string }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => scrollY.on('change', (y) => setVisible(y > window.innerHeight)), [scrollY]);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
      className={`fixed bottom-6 right-6 z-[90] grid h-12 w-12 place-items-center rounded-full shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  );
}
