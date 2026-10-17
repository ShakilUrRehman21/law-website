import React, { useEffect, useState, useRef } from 'react';

/**
 * Animated number counter that counts up when scrolled into view
 */
export default function AnimatedCounter({ end = 100, suffix = '', prefix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const el = counterRef.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.unobserve(el);

                    const startTime = performance.now();
                    const target = end;

                    const step = (now) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Easing out quint
                        const easedProgress = 1 - Math.pow(1 - progress, 4);
                        const currentVal = Math.floor(easedProgress * target);

                        setCount(currentVal);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [end, duration, hasAnimated]);

    return (
        <span ref={counterRef} className="animated-counter-val">
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}
