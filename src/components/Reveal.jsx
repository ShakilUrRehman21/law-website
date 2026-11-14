import { motion } from 'motion/react';

// Small, single-use entrance for content blocks that need one (not applied to every section).
export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </M>
  );
}
