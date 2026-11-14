import { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { startLenis, stopLenis } from './lib/lenis';
import Layout from './components/Layout';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const PracticeAreas = lazy(() => import('./pages/PracticeAreas'));
const Media = lazy(() => import('./pages/Media'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  useEffect(() => {
    startLenis();
    return stopLenis;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="practice-areas" element={<PracticeAreas />} />
            <Route path="services" element={<Navigate to="/practice-areas" replace />} />
            <Route path="media" element={<Media />} />
            <Route path="gallery" element={<Navigate to="/media" replace />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
