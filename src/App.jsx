import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PracticeAreas from './pages/PracticeAreas';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Initialize Lenis for luxurious, butter-smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false,
    });

    window.__lenis = lenis;

    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: false, // Animates on both scroll down and up!
      offset: 60,
      delay: 50,
      mirror: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Sync Lenis scroll with AOS and custom reveals
    const handleScrollMotion = () => {
      AOS.refresh();

      const items = document.querySelectorAll('.scroll-reveal-item:not(.is-revealed)');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30) {
          item.classList.add('is-revealed');
        }
      });
    };

    lenis.on('scroll', handleScrollMotion);
    window.addEventListener('scroll', handleScrollMotion, { passive: true });

    // Initial check
    setTimeout(() => {
      AOS.refresh();
      handleScrollMotion();
    }, 250);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScrollMotion);
      window.__lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
