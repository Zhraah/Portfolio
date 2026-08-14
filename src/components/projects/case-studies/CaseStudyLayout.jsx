import "../../../styles/project-case-studies.css";

function CaseIntro({ eyebrow, title }) {
  return (
    <div className="case-intro" aria-hidden="true">
      <div className="case-intro-copy">
        <span>{eyebrow}</span>
        <strong>{title}</strong>
        <i />
      </div>
    </div>
  );
}

export function SectionTitle({ children, icon, eyebrow }) {
  return (
    <header className="case-section-title">
      {icon ? <img src={icon} alt="" /> : null}
      <div>
        {eyebrow ? <span>{eyebrow}</span> : null}
        <h2>{children}</h2>
      </div>
    </header>
  );
}

export function CaseImage({ src, alt, className = "" }) {
  return <img className={`case-image ${className}`} src={src} alt={alt} loading="lazy" />;
}

export function CaseShell({ children, className, eyebrow, hero, onBack, title }) {
  return (
    <article className={`project-case-study ${className}`}>
      <CaseIntro eyebrow={eyebrow} title={title} />

      <div className="case-toolbar">
        <button type="button" className="case-back" onClick={onBack}>
          <span aria-hidden="true">←</span> Back to Work
        </button>
      </div>

      <header className="case-hero" id="case-cover" data-case-anchor="cover">
        <img src={hero} alt="" />
        <div className="case-hero-shade" />
        <div className="case-hero-copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </header>

      {children}

      <footer className="case-footer case-reveal">
        <span>End of case study</span>
        <button type="button" onClick={onBack}>
          Back to featured work <span aria-hidden="true">↗</span>
        </button>
      </footer>
    </article>
  );
}
