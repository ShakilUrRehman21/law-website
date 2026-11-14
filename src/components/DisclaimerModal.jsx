import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { lockScroll } from '../lib/lenis';

const KEY = 'barCouncilAgreed';

const readAgreed = () => {
  try {
    return localStorage.getItem(KEY) === 'true';
  } catch {
    return false;
  }
};

export default function DisclaimerModal() {
  const [open, setOpen] = useState(() => !readAgreed());
  const agreeRef = useRef(null);

  useEffect(() => {
    lockScroll(open);
    if (open) agreeRef.current?.focus();
  }, [open]);

  const agree = () => {
    try {
      localStorage.setItem(KEY, 'true');
    } catch {
      /* storage unavailable: agreement lasts for this visit */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="disclaimer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="disclaimer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="disclaimer-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 id="disclaimer-title">Disclaimer</h2>
            <div className="disclaimer-body" data-lenis-prevent>
              <p>
                The Bar Council of India does not permit advocates to advertise or solicit work. By choosing “I agree”
                you confirm that:
              </p>
              <ul>
                <li>
                  there has been no advertisement, personal communication, solicitation or inducement of any kind from
                  us or any of our members to seek work through this website;
                </li>
                <li>you are seeking information about us for your own use, at your own request;</li>
                <li>
                  using this website, or anything obtained from it, does not create an advocate–client relationship;
                </li>
                <li>nothing on this website is a legal opinion or legal advice.</li>
              </ul>
              <p>
                We are not liable for any action taken in reliance on material on this website. Anyone with a legal
                problem should obtain independent legal advice.
              </p>
            </div>
            <div className="disclaimer-actions">
              <button ref={agreeRef} type="button" className="btn btn-ink" onClick={agree}>
                I agree
              </button>
              <a className="btn btn-quiet" href="https://www.google.com">
                Leave this site
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
