import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { chamber, practiceAreas } from '../data/site';
import PageHero from '../components/PageHero';
import { WhatsAppIcon } from '../components/Icons';
import '../styles/pages.css';

const ENDPOINT = 'https://formsubmit.co/ajax/sanskariscout@gmail.com';
const empty = { name: '', phone: '', email: '', matter: '', message: '' };
const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Website enquiry: ${form.matter || 'General'}`,
          _captcha: 'false',
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          Matter: form.matter,
          Message: form.message,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        title="Contact"
        lead="Call or WhatsApp the chamber, or send a short note about your matter and you will be called back."
      />

      <section className="contact">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <div className="contact-block">
              <h2 className="contact-head">Telephone and WhatsApp</h2>
              <a className="contact-phone" href={chamber.phoneHref}>
                {chamber.phone}
              </a>
              <a className="btn btn-ink" href={chamber.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} />
                Message on WhatsApp
              </a>
            </div>

            <div className="contact-block">
              <h2 className="contact-head">Email</h2>
              <a className="inline-link" href={`mailto:${chamber.email}`}>
                {chamber.email}
              </a>
            </div>

            {chamber.offices.map((o) => (
              <div className="contact-block" key={o.name}>
                <h2 className="contact-head">{o.name}</h2>
                <address>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
                <p className="muted">{o.note}</p>
              </div>
            ))}

            <div className="contact-block">
              <h2 className="contact-head">Hours</h2>
              <dl className="hours">
                {chamber.hours.map(([d, h]) => (
                  <div key={d}>
                    <dt>{d}</dt>
                    <dd>{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="contact-form-wrap">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  className="form-sent"
                  role="status"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <h2 className="form-title">Message sent</h2>
                  <p>
                    Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}. The chamber will call you on{' '}
                    {form.phone} within one working day. For anything urgent, call {chamber.phone}.
                  </p>
                  <button
                    type="button"
                    className="btn btn-quiet"
                    onClick={() => {
                      setForm(empty);
                      setStatus('idle');
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" className="form" onSubmit={submit} exit={{ opacity: 0, y: -10 }}>
                  <h2 className="form-title">Send a message</h2>
                  <p className="form-note">
                    Please don’t include confidential details here. A short outline is enough for a first call.
                  </p>

                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" autoComplete="name" required value={form.name} onChange={update} />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={update}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">
                        Email <span className="muted">(optional)</span>
                      </label>
                      <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="matter">Type of matter</label>
                    <select id="matter" name="matter" value={form.matter} onChange={update} required>
                      <option value="" disabled>
                        Choose one
                      </option>
                      {practiceAreas.map((a) => (
                        <option key={a.id}>{a.title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Outline of the matter</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Which court, what stage the case is at, and any date coming up."
                      value={form.message}
                      onChange={update}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="form-error" role="alert">
                      The message didn’t send. Check your connection and try again, or call {chamber.phone}.
                    </p>
                  )}

                  <button type="submit" className="btn btn-ink btn-block" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          title="Map showing the chamber"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50736.76256254008!2d77.2162897582031!3d28.566107100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38a6cfefc51%3A0x52b130a99342d649!2sSarfaraz%20Hussain-Advocate!5e1!3m2!1sen!2sus!4v1772139932318!5m2!1sen!2sus"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
