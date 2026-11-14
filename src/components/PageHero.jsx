import SplitHeading from './SplitHeading';

// Shared opening band for inner pages.
export default function PageHero({ title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <SplitHeading as="h1" className="page-title" onLoad delay={0.1}>
          {title}
        </SplitHeading>
        {lead && <p className="page-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
