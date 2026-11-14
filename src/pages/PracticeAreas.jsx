import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { courts, practiceAreas } from '../data/site';
import { getLenis } from '../lib/lenis';
import PageHero from '../components/PageHero';
import ContactBand from '../components/ContactBand';
import '../styles/pages.css';

export default function PracticeAreas() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (!el) return;
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(el, { offset: -100 });
      else el.scrollIntoView();
    }, 450);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <>
      <PageHero
        title="Practice areas"
        lead="The proceedings the chamber takes on, and the courts in which it appears."
      >
        <nav className="area-jump" aria-label="Practice areas on this page">
          {practiceAreas.map((a) => (
            <a key={a.id} href={`#${a.id}`}>
              {a.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="areas">
        <div className="wrap">
          {practiceAreas.map((a) => (
            <article key={a.id} id={a.id} className="area">
              <div className="area-head">
                <h2 className="area-title">{a.title}</h2>
                <p className="area-forum">{a.forum}</p>
              </div>
              <div className="area-body">
                <p className="area-summary">{a.summary}</p>
                <ul className="area-items">
                  {a.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="forums">
        <div className="wrap forums-grid">
          <h2 className="section-title">Courts and tribunals</h2>
          <ul className="forums-list">
            {courts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
