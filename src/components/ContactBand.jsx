import { Link } from 'react-router-dom';
import { chamber } from '../data/site';
import SplitHeading from './SplitHeading';
import { WhatsAppIcon } from './Icons';

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div className="wrap contact-band-grid">
        <div>
          <SplitHeading className="contact-band-title">Speak to the chamber</SplitHeading>
          <a className="contact-band-phone" href={chamber.phoneHref}>
            {chamber.phone}
          </a>
          <div className="contact-band-actions">
            <a className="btn btn-paper" href={chamber.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
            <Link className="btn btn-outline-paper" to="/contact">
              Send a message
            </Link>
          </div>
        </div>
        <dl className="contact-band-hours">
          {chamber.hours.map(([d, h]) => (
            <div key={d}>
              <dt>{d}</dt>
              <dd>{h}</dd>
            </div>
          ))}
          {chamber.offices.map((o) => (
            <div key={o.name}>
              <dt>{o.name}</dt>
              <dd>{o.lines.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
