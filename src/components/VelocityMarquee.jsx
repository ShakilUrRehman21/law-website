import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';

const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// A slow marquee that speeds up and reverses with scroll velocity (after React Bits' ScrollVelocity).
export default function VelocityMarquee({ items, baseVelocity = -1.6 }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 300 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const dir = useRef(1);
  const translate = useTransform(x, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    if (factor.get() < 0) dir.current = -1;
    else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * factor.get();
    x.set(x.get() + move);
  });

  const row = (
    <>
      {items.map((item) => (
        <span key={item} className="marquee-item">
          {item}
          <span className="marquee-sep" aria-hidden="true" />
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee" aria-label={items.join(', ')}>
      <motion.div className="marquee-track" style={{ x: translate }} aria-hidden="true">
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}
