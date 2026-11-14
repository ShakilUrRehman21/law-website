import { Link } from 'react-router-dom';
import { chamber, matters, memberships, publicRoles } from '../data/site';
import PageHero from '../components/PageHero';
import Portrait from '../components/Portrait';
import SplitHeading from '../components/SplitHeading';
import Reveal from '../components/Reveal';
import ContactBand from '../components/ContactBand';
import '../styles/pages.css';

export default function About() {
  return (
    <>
      <PageHero
        title="About Sarfaraz Hussain"
        lead="An engineer who became an advocate, and has practised in the courts of Delhi for more than twenty-five years."
      />

      <section className="bio">
        <div className="wrap bio-grid">
          <Reveal className="bio-photo">
            <Portrait src="/sarfaraz_hussain.png" alt="Sarfaraz Hussain" position="50% 15%" />
          </Reveal>
          <div className="bio-text prose">
            <p className="bio-lede">
              Sarfaraz Hussain trained as a civil engineer before qualifying in law, and holds an LL.M. in criminal law.
            </p>
            <p>
              He practises before the Supreme Court of India and the Delhi High Court from Lawyers’ Chamber Block-I, and
              leads a team of advocates who appear across Delhi’s District and Sessions Courts and tribunals. The
              chamber works with a wider panel of advocates in the National Capital Region and in other states when a
              matter calls for it.
            </p>
            <p>
              Most of his work is criminal: trial defence, bail, quashing petitions and appeals, including Special Leave
              Petitions in the Supreme Court. The chamber also handles civil suits and appeals, family matters, cheque
              dishonour cases, consumer and motor accident claims, and Waqf and property disputes.
            </p>
            <dl className="bio-facts">
              <div>
                <dt>Qualifications</dt>
                <dd>{chamber.qualifications}</dd>
              </div>
              <div>
                <dt>Courts</dt>
                <dd>{chamber.courts}</dd>
              </div>
              <div>
                <dt>Chambers</dt>
                <dd>Lawyers’ Chamber Block-I, Delhi High Court; Batla House, Jamia Nagar</dd>
              </div>
            </dl>
            <Link to="/practice-areas" className="text-link">
              Practice areas
            </Link>
          </div>
        </div>
      </section>

      <section className="about-matters">
        <div className="wrap">
          <SplitHeading className="section-title">Notable matters</SplitHeading>
          <div className="matters-list">
            {matters.map((m) => (
              <article key={m.id} className="matter-row">
                <p className="matter-forum">{m.forum}</p>
                <div>
                  <h3 className="matter-title">{m.title}</h3>
                  <p className="matter-role">{m.role}</p>
                  <p className="matter-body">{m.body}</p>
                  <Link to="/media" className="text-link small">
                    {m.media}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roles">
        <div className="wrap roles-grid">
          <div>
            <SplitHeading className="section-title">Bar associations</SplitHeading>
            <ul className="plain-list">
              {memberships.map((m) => (
                <li key={m.name}>
                  <span>{m.name}</span>
                  <span className="muted">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SplitHeading className="section-title">Public life</SplitHeading>
            <p className="section-lead">
              Outside court, Sarfaraz Hussain has served community and welfare bodies in Jamia Nagar and Okhla for many
              years.
            </p>
            <ul className="plain-list">
              {publicRoles.map((r) => (
                <li key={r.org}>
                  <span>{r.org}</span>
                  <span className="muted">{r.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
