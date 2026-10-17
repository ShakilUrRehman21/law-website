import React, { useEffect, useRef } from 'react';

/**
 * Reusable ScrollReveal wrapper that triggers butter-smooth entrance
 * animations when scrolled into viewport.
 * 
 * Props:
 * - animation: 'fade-up' | 'fade' | 'scale-up' | 'slide-left' | 'slide-right' | 'stagger'
 * - delay: delay in ms (number)
 * - duration: duration in ms (number)
 * - threshold: 0 to 1
 * - className: custom classes
 * - children: React nodes
 */
export default function ScrollReveal({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 800,
    threshold = 0.12,
    className = '',
    as = 'div',
    ...rest
}) {
    const elementRef = useRef(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // Fallback if IntersectionObserver is not supported
        if (!('IntersectionObserver' in window)) {
            el.classList.add('is-revealed');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-revealed');
                    observer.unobserve(el);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [threshold]);

    const Component = as;

    const style = {
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionDuration: duration ? `${duration}ms` : undefined,
    };

    return (
        <Component
            ref={elementRef}
            className={`scroll-reveal-item reveal-${animation} ${className}`}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}

/**
 * Hook to manually observe a list of refs or container elements
 */
export function useScrollRevealObserver(dependency) {
    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;

        const elements = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [dependency]);
}
