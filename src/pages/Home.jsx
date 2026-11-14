import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { approach, chamber, counsel, courts, faqs, matters, photos, practiceAreas, videos } from '../data/site';
import { gsap, SplitText, useGSAP, reducedMotion } from '../lib/gsap';
import SilkCanvas from '../components/SilkCanvas';
import SplitHeading from '../components/SplitHeading';
import ScrollRevealText from '../components/ScrollRevealText';
import CountUp from '../components/CountUp';
import VelocityMarquee from '../components/VelocityMarquee';
import Portrait from '../components/Portrait';
import CounselGrid from '../components/CounselGrid';
import { AccordionItem } from '../components/Accordion';
import ContactBand from '../components/ContactBand';
import { WhatsAppIcon } from '../components/Icons';
import '../styles/home.css';

const ease = [0.16, 1, 0.3, 1];

function Hero() {
  const nameRef = useRef(null);

  // The one orchestrated moment on the site: the name sets letter by letter.
  useGSAP(
    () => {
      if (reducedMotion()) return;
      let split;
      document.fonts.ready.then(() => {
        if (!nameRef.current) return;
        split = SplitText.create(nameRef.current.querySelectorAll('.hero-name-line'), {
          type: 'chars',
          mask: 'chars',
        });
        gsap.from(split.chars, {
          yPercent: 115,
          duration: 1.4,
          ease: 'expo.out',
          stagger: 0.035,
          delay: 0.15,
        });
        gsap.set(nameRef.current, { autoAlpha: 1 });
      });
      return () => split && split.revert();
    },
    { scope: nameRef },
  );

  return (
    <section className="hero">
      <SilkCanvas className="hero-silk" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Advocate
          </motion.p>
          <h1 ref={nameRef} className="hero-name">
            <span className="hero-name-line">Sarfaraz</span>
            <span className="hero-name-line">Hussain</span>
          </h1>
          <motion.div
            className="hero-detail"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
          >
            <p className="hero-courts">Supreme Court of India and High Court of Delhi</p>
            <p className="hero-quals">{chamber.qualifications}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-paper">
                Contact the chamber
              </Link>
              <a href={chamber.whatsapp} className="btn btn-outline-paper" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <motion.figure
          className="hero-portrait"
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
        >
          <Portrait src="/sarfaraz_hussain.png" alt="Sarfaraz Hussain" eager position="50% 18%" className="on-dark" />
          <figcaption>Lawyers’ Chamber Block-I, Delhi High Court</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro">
      <VelocityMarquee items={courts} />
      <div className="wrap intro-grid">
        <ScrollRevealText className="intro-text">
          Sarfaraz Hussain leads a chamber of seven advocates practising from the Delhi High Court. Most of the work is
          criminal: trials, bail, and appeals up to the Supreme Court. The rest is civil, family, property and tribunal
          practice across Delhi.
        </ScrollRevealText>
        <dl className="facts">
          <div>
            <dt>Years at the Bar</dt>
            <dd>
              <CountUp to={25} suffix="+" />
            </dd>
          </div>
          <div>
            <dt>Advocates in chambers</dt>
            <dd>
              <CountUp to={counsel.length} />
            </dd>
          </div>
          <div>
            <dt>Courts and tribunals</dt>
            <dd>
              <CountUp to={courts.length} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="home-practice">
      <div className="wrap split">
        <div className="split-aside">
          <SplitHeading className="section-title">Practice areas</SplitHeading>
          <p className="section-lead">
            Criminal defence is the core of the practice. The chamber also takes civil, family, property and tribunal
            work in Delhi.
          </p>
          <Link to="/practice-areas" className="text-link">
            Proceedings in each area
          </Link>
        </div>
        <ul className="practice-index">
          {practiceAreas.map((area) => (
            <li key={area.id}>
              <Link to={`/practice-areas#${area.id}`} className="practice-row">
                <span className="practice-row-title">{area.title}</span>
                <span className="practice-row-forum">{area.forum}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Matters() {
  const section = useRef(null);
  const track = useRef(null);

  // Pinned horizontal scroll through the case briefs on wide screens.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => track.current.scrollWidth - window.innerWidth;
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: section },
  );

  return (
    <section className="matters" ref={section}>
      <div className="matters-track" ref={track}>
        <div className="matters-intro">
          <SplitHeading className="section-title">Notable matters</SplitHeading>
          <p className="section-lead">
            A few of the reported cases in which Sarfaraz Hussain has appeared. News coverage is in the media archive.
          </p>
          <Link to="/media" className="text-link on-dark">
            Media archive
          </Link>
        </div>
        {matters.map((m) => (
          <article className="brief" key={m.id}>
            <p className="brief-forum">{m.forum}</p>
            <h3 className="brief-title">{m.title}</h3>
            <p className="brief-role">{m.role}</p>
            <p className="brief-body">{m.body}</p>
            <p className="brief-media">{m.media}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach">
      <div className="wrap">
        <SplitHeading className="section-title">How a matter is handled</SplitHeading>
        <ol className="steps">
          {approach.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            >
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Counsel() {
  return (
    <section className="home-counsel" id="counsel">
      <div className="wrap">
        <div className="section-head">
          <SplitHeading className="section-title">Counsel</SplitHeading>
          <p className="section-lead">Select an advocate to read their profile.</p>
        </div>
        <CounselGrid />
      </div>
    </section>
  );
}

function MediaTeaser() {
  const photo = photos[0];
  return (
    <section className="media-teaser">
      <div className="wrap media-teaser-grid">
        <figure className="media-teaser-photo">
          <Portrait src={photo.src} alt={photo.caption} position="50% 40%" className="landscape" />
          <figcaption>{photo.caption}</figcaption>
        </figure>
        <div>
          <SplitHeading className="section-title">In the news</SplitHeading>
          <ul className="broadcast-list">
            {videos.slice(0, 4).map((v) => (
              <li key={v.id}>
                <Link to="/media">
                  <span className="broadcast-source">{v.source}</span>
                  <span className="broadcast-title">{v.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/media" className="text-link">
            Watch broadcasts and see photographs
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq">
      <div className="wrap split">
        <div className="split-aside">
          <SplitHeading className="section-title">Questions</SplitHeading>
          <p className="section-lead">
            Anything else, call the chamber on{' '}
            <a href={chamber.phoneHref} className="inline-link">
              {chamber.phone}
            </a>
            .
          </p>
        </div>
        <div className="acc">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} title={f.q} defaultOpen={i === 0}>
              <p>{f.a}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Practice />
      <Matters />
      <Approach />
      <Counsel />
      <MediaTeaser />
      <Faq />
      <ContactBand />
    </>
  );
}
