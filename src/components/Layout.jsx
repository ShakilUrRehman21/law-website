import { Suspense, useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ScrollTrigger } from '../lib/gsap';
import { scrollToTop } from '../lib/lenis';
import Header from './Header';
import Footer from './Footer';
import DisclaimerModal from './DisclaimerModal';
import WhatsAppButton from './WhatsAppButton';

const titles = {
  '/': 'Sarfaraz Hussain, Advocate | Supreme Court & Delhi High Court',
  '/about': 'About | Sarfaraz Hussain, Advocate',
  '/practice-areas': 'Practice areas | Sarfaraz Hussain, Advocate',
  '/media': 'Media | Sarfaraz Hussain, Advocate',
  '/contact': 'Contact | Sarfaraz Hussain, Advocate',
};

export default function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    scrollToTop();
    document.title = titles[pathname] ?? 'Page not found | Sarfaraz Hussain, Advocate';
    const id = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <DisclaimerModal />
      <Header />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Suspense fallback={<div className="route-loading" />}>{outlet}</Suspense>
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
