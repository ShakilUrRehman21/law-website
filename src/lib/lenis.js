import Lenis from 'lenis';
import { gsap, ScrollTrigger, reducedMotion } from './gsap';

let lenis = null;

export function startLenis() {
  if (lenis || reducedMotion()) return lenis;
  lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time) => lenis && lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  lenis._tick = tick;
  return lenis;
}

export function stopLenis() {
  if (!lenis) return;
  gsap.ticker.remove(lenis._tick);
  lenis.destroy();
  lenis = null;
}

export const getLenis = () => lenis;

export function lockScroll(locked) {
  document.documentElement.style.overflow = locked ? 'hidden' : '';
  if (lenis) (locked ? lenis.stop() : lenis.start());
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}
