import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { chamber } from '../data/site';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 600));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="whatsapp-fab"
          href={chamber.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <WhatsAppIcon size={18} />
          <span>WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
