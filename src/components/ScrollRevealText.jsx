import { useRef } from 'react';
import { gsap, SplitText, useGSAP, reducedMotion } from '../lib/gsap';

// Words brighten as the paragraph scrolls through the viewport (after React Bits' ScrollReveal).
export default function ScrollRevealText({ children, className }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (reducedMotion()) return;
      const split = SplitText.create(ref.current, { type: 'words', wordsClass: 'reveal-word' });
      gsap.fromTo(
        split.words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      );
      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}
