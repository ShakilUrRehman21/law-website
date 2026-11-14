import { useEffect, useRef } from 'react';
import { animate, useInView } from 'motion/react';

// Counts from zero when first scrolled into view (after React Bits' CountUp).
export default function CountUp({ to, suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('en-IN') + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      0{suffix}
    </span>
  );
}
