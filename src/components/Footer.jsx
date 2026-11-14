import { Link } from 'react-router-dom';
import { chamber, navLinks } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-name">{chamber.name}</p>
            <p className="footer-sub">
              {chamber.title}, {chamber.courts}
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <p className="footer-head">Pages</p>
            <Link to="/">Home</Link>
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path}>
                {l.name}
              </Link>
            ))}
          </nav>

          {chamber.offices.map((o) => (
            <address className="footer-col" key={o.name}>
              <p className="footer-head">{o.name}</p>
              {o.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          ))}

          <div className="footer-col">
            <p className="footer-head">Contact</p>
            <a href={chamber.phoneHref}>{chamber.phone}</a>
            <a href={`mailto:${chamber.email}`}>{chamber.email}</a>
            <a href={chamber.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-base">
          <p>
            © {new Date().getFullYear()} {chamber.firm}
          </p>
          <p className="footer-bci">
            In accordance with the rules of the Bar Council of India, this website is for information only and is not
            an advertisement or solicitation of work.
          </p>
        </div>
      </div>
    </footer>
  );
}
