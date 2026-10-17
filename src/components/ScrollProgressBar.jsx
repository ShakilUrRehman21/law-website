import React, { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                const percent = (scrollTop / scrollHeight) * 100;
                setScrollPercentage(percent);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        if (window.__lenis) {
            window.__lenis.on('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (window.__lenis) {
                window.__lenis.off('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollPercentage}%`,
                height: '3.5px',
                background: 'linear-gradient(90deg, #c5a059 0%, #e45735 50%, #dfc28b 100%)',
                zIndex: 999999,
                boxShadow: '0 0 10px rgba(197, 160, 89, 0.7)',
                transition: 'width 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none'
            }} 
            aria-hidden="true"
        />
    );
}
