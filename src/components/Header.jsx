import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { chamber, navLinks } from '../data/site';
import { lockScroll } from '../lib/lenis';


export default function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !menuOpen);
  });

  useEffect(() => {
    lockScroll(menuOpen);
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${solid && !menuOpen ? 'is-solid' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="wrap header-inner">
          <Link to="/" onClick={() => setMenuOpen(false)} className="wordmark" aria-label={`${chamber.name}, ${chamber.title}, home`}>
            <span className="wordmark-name">{chamber.name}</span>
            <span className="wordmark-title">{chamber.title}</span>
          </Link>

          <nav className="header-nav" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink key={l.path} to={l.path} className="nav-link">
                {l.name}
              </NavLink>
            ))}
          </nav>

          <a className="btn btn-small header-call" href={chamber.phoneHref}>
            {chamber.phone}
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="wrap mobile-nav" aria-label="Mobile">
              {[{ name: 'Home', path: '/' }, ...navLinks].map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink to={l.path} end className="mobile-link" onClick={() => setMenuOpen(false)}>
                    {l.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                className="mobile-contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href={chamber.phoneHref}>{chamber.phone}</a>
                <a href={`mailto:${chamber.email}`}>{chamber.email}</a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
