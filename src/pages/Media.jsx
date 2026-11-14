import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { photos, videos } from '../data/site';
import { lockScroll } from '../lib/lenis';
import PageHero from '../components/PageHero';
import SplitHeading from '../components/SplitHeading';
import '../styles/pages.css';

const ease = [0.16, 1, 0.3, 1];
const thumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1280`;
const embed = (id) => `https://drive.google.com/file/d/${id}/preview`;
const share = (id) => `https://drive.google.com/file/d/${id}/view`;

function useDialog(open, onClose, extraKeys) {
  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      extraKeys?.(e);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, extraKeys]);
}

function VideoThumb({ video, onOpen, featured }) {
  const [failed, setFailed] = useState(false);
  return (
    <button type="button" className={`video ${featured ? 'is-featured' : ''}`} onClick={() => onOpen(video)}>
      <span className="video-frame">
        {failed ? (
          <span className="video-fallback" aria-hidden="true">
            {video.source}
          </span>
        ) : (
          <img src={thumb(video.id)} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
        )}
        <span className="video-play" aria-hidden="true">
          <Play size={featured ? 22 : 18} strokeWidth={1.5} fill="currentColor" />
        </span>
      </span>
      <span className="video-source">{video.source}</span>
      <span className="video-title">{video.title}</span>
      <span className="video-note">{video.note}</span>
    </button>
  );
}

function VideoPlayer({ video, onClose }) {
  useDialog(true, onClose);
  return (
    <motion.div className="dialog-backdrop dark" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="player"
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.45, ease }}
      >
        <div className="player-bar">
          <p>
            <span className="muted">{video.source}</span> {video.title}
          </p>
          <a href={share(video.id)} target="_blank" rel="noopener noreferrer" className="player-link">
            Open in Google Drive <ArrowUpRight size={14} />
          </a>
          <button type="button" className="icon-btn" onClick={onClose} autoFocus>
            <X size={20} strokeWidth={1.5} />
            <span className="visually-hidden">Close video</span>
          </button>
        </div>
        <div className="player-frame">
          <iframe src={embed(video.id)} title={video.title} allow="autoplay; encrypted-media" allowFullScreen />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ index, setIndex }) {
  const close = useCallback(() => setIndex(null), [setIndex]);
  const step = useCallback((d) => setIndex((i) => (i + d + photos.length) % photos.length), [setIndex]);
  const keys = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    },
    [step],
  );
  useDialog(true, close, keys);
  const p = photos[index];

  return (
    <motion.div className="dialog-backdrop dark" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease }}
          >
            <img src={p.src} alt={p.caption} />
            <figcaption>
              {p.caption}
              <span className="muted">
                {index + 1} of {photos.length}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="lightbox-controls">
          <button type="button" className="icon-btn" onClick={() => step(-1)}>
            <ChevronLeft size={22} strokeWidth={1.5} />
            <span className="visually-hidden">Previous photograph</span>
          </button>
          <button type="button" className="icon-btn" onClick={() => step(1)}>
            <ChevronRight size={22} strokeWidth={1.5} />
            <span className="visually-hidden">Next photograph</span>
          </button>
          <button type="button" className="icon-btn" onClick={close} autoFocus>
            <X size={22} strokeWidth={1.5} />
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Media() {
  const [video, setVideo] = useState(null);
  const [photo, setPhoto] = useState(null);
  const closeVideo = useCallback(() => setVideo(null), []);
  const [first, ...others] = videos;

  return (
    <>
      <PageHero
        title="Media"
        lead="Television coverage of matters in which Sarfaraz Hussain appeared, and photographs from court."
      />

      <section className="videos">
        <div className="wrap">
          <SplitHeading className="section-title">Broadcasts</SplitHeading>
          <div className="video-grid">
            <VideoThumb video={first} onOpen={setVideo} featured />
            {others.map((v) => (
              <VideoThumb key={v.id} video={v} onOpen={setVideo} />
            ))}
          </div>
          <p className="fineprint">Footage belongs to the respective broadcasters and is hosted on Google Drive.</p>
        </div>
      </section>

      <section className="photos">
        <div className="wrap">
          <SplitHeading className="section-title">Photographs</SplitHeading>
          <div className="photo-grid">
            {photos.map((p, i) => (
              <button key={p.src} type="button" className="photo" onClick={() => setPhoto(i)}>
                <img src={p.src} alt={p.caption} loading="lazy" width={p.w} height={p.h} />
                <span className="photo-caption">{p.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>{video && <VideoPlayer video={video} onClose={closeVideo} />}</AnimatePresence>
      <AnimatePresence>{photo !== null && <Lightbox index={photo} setIndex={setPhoto} />}</AnimatePresence>
    </>
  );
}
