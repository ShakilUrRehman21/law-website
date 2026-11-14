import { useRef } from 'react';
import { gsap, SplitText, useGSAP, reducedMotion } from '../lib/gsap';

// Line-by-line masked reveal (GSAP SplitText). Plays on load or when scrolled into view.
export default function SplitHeading({ as: Tag = 'h2', children, className, onLoad = false, delay = 0 }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (reducedMotion()) return;
      let split;
      document.fonts.ready.then(() => {
        if (!ref.current) return;
        split = SplitText.create(ref.current, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'split-line',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.1,
              ease: 'expo.out',
              stagger: 0.09,
              delay,
              scrollTrigger: onLoad ? undefined : { trigger: ref.current, start: 'top 85%', once: true },
            }),
        });
        gsap.set(ref.current, { autoAlpha: 1 });
      });
      return () => split && split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`split-heading ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
