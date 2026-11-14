import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { counsel } from '../data/site';
import { lockScroll } from '../lib/lenis';
import Portrait from './Portrait';

const ease = [0.16, 1, 0.3, 1];

function CounselDialog({ person, onClose }) {
  useEffect(() => {
    lockScroll(true);
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="dialog-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="counsel-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${person.id}-name`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.55, ease }}
      >
        <motion.div layoutId={`portrait-${person.id}`} className="counsel-dialog-photo">
          <Portrait src={person.img} alt="" eager />
        </motion.div>
        <div className="counsel-dialog-body" data-lenis-prevent>
          <button type="button" className="icon-btn dialog-close" onClick={onClose} autoFocus>
            <X size={20} strokeWidth={1.5} />
            <span className="visually-hidden">Close profile</span>
          </button>
          <p className="counsel-role">{person.role}</p>
          <h3 id={`${person.id}-name`} className="counsel-dialog-name">
            {person.name}
          </h3>
          <p className="counsel-dialog-bio">{person.bio}</p>
          <dl className="counsel-facts">
            <div>
              <dt>Qualifications</dt>
              <dd>{person.qualification}</dd>
            </div>
            <div>
              <dt>Appears before</dt>
              <dd>{person.court}</dd>
            </div>
            {person.standing && (
              <div>
                <dt>Standing</dt>
                <dd>{person.standing}</dd>
              </div>
            )}
            <div>
              <dt>Main work</dt>
              <dd>{person.focus}</dd>
            </div>
          </dl>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Card({ person, large = false, onSelect }) {
  return (
    <button
      type="button"
      className={`counsel-card ${large ? 'is-large' : ''}`}
      onClick={() => onSelect(person)}
      aria-haspopup="dialog"
    >
      <motion.div layoutId={`portrait-${person.id}`} className="counsel-photo">
        <Portrait src={person.img} alt="" position={large ? '50% 15%' : '50% 25%'} />
      </motion.div>
      <span className="counsel-name">{person.name}</span>
      <span className="counsel-role">{person.role}</span>
    </button>
  );
}

export default function CounselGrid() {
  const [active, setActive] = useState(null);
  const [lead, ...rest] = counsel;


  return (
    <>
      <div className="counsel-grid">
        <Card person={lead} large onSelect={setActive} />
        {rest.map((p) => (
          <Card key={p.id} person={p} onSelect={setActive} />
        ))}
      </div>
      <AnimatePresence>
        {active && <CounselDialog person={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
