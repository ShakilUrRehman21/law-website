import { Link } from 'react-router-dom';
import { chamber } from '../data/site';
import '../styles/pages.css';

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="wrap page-hero-inner">
        <h1 className="page-title">This page doesn’t exist</h1>
        <p className="page-lead">
          The link may be out of date. Go to the home page, or call the chamber on{' '}
          <a href={chamber.phoneHref} className="inline-link on-dark">
            {chamber.phone}
          </a>
          .
        </p>
        <div className="hero-actions">
          <Link to="/" className="btn btn-paper">
            Go to the home page
          </Link>
          <Link to="/practice-areas" className="btn btn-outline-paper">
            Practice areas
          </Link>
        </div>
      </div>
    </section>
  );
}
