import { Link } from "react-router-dom";
import { useCounter } from "../hooks/motion.js";
import { usePointerVars } from "../hooks/motion.js";
import CaseVisual from "./CaseVisuals.jsx";

export function Rule({ className = "" }) {
  return <span className={`rule ${className}`} data-reveal="rule" aria-hidden="true" />;
}

export function Mask({ children, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`ml ${className}`}>
      <span>{children}</span>
    </Tag>
  );
}

export function SectionHead({ n, label, eyebrow, title, titleId, children }) {
  return (
    <header className="section-head">
      <div className="section-marker" data-reveal>
        <span className="section-n">{n}</span>
        <span className="section-label">{label}</span>
      </div>
      <Rule />
      <div className="section-head-body">
        <div>
          {eyebrow && <p className="eyebrow" data-reveal style={{ "--d": 1 }}>{eyebrow}</p>}
          <h2 id={titleId} className="section-title" data-reveal="mask"><Mask>{title}</Mask></h2>
        </div>
        {children && <div className="section-head-aside" data-reveal style={{ "--d": 2 }}>{children}</div>}
      </div>
    </header>
  );
}

export function PageIntro({ label, title, summary, children }) {
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <div className="shell">
        <p className="eyebrow" data-reveal>{label}</p>
        <h1 id="page-title" className="page-title" data-reveal="mask">
          <Mask>{title}<span className="heading-period">.</span></Mask>
        </h1>
        <div className="page-intro-foot">
          <p className="page-summary" data-reveal style={{ "--d": 2 }}>{summary}</p>
          {children && <div data-reveal style={{ "--d": 3 }}>{children}</div>}
        </div>
      </div>
      <Rule className="rule-bleed" />
    </section>
  );
}

export function Counter({ to, label, note }) {
  const [ref, value] = useCounter(to);
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value" aria-hidden="true">{value}</span>
      <span className="visually-hidden">{to}</span>
      <span className="stat-label">{label}</span>
      {note && <span className="stat-note">{note}</span>}
    </div>
  );
}

export function CaseStudy({ item, index, as: Heading = "h3", variant = "deck" }) {
  const pointer = usePointerVars();
  return (
    <article
      className={`case case-${variant}`}
      style={{ "--i": index }}
      aria-labelledby={`case-${item.number}-title`}
    >
      <div className="case-copy">
        <div className="case-meta">
          <span className="case-number">{item.number}</span>
          <span className="case-context">PREVIOUS DCF WORK</span>
        </div>
        <p className="case-focus">{item.focus}</p>
        <Heading className="case-title" id={`case-${item.number}-title`}>{item.title}</Heading>
        <p className="case-label">My contribution</p>
        <p className="case-text">{item.contribution}</p>
        <p className="case-label">Key areas</p>
        <ul className="chip-list" aria-label={`${item.title} key areas`}>
          {item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
        </ul>
        {item.tech.length > 0 && (
          <>
            <p className="case-label">Technologies in the text</p>
            <ul className="chip-list chip-list-tech" aria-label={`${item.title} technologies`}>
              {item.tech.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </>
        )}
        <Link className="link-arrow" to={item.href} data-cursor="Open">{item.link} <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="case-visual" ref={pointer} data-reveal style={{ "--d": 1 }}>
        <span className="case-spot" aria-hidden="true" />
        <div className="case-visual-inner">
          <CaseVisual kind={item.kind} />
        </div>
        <p className="case-note">Describes a work area — not a product screenshot.</p>
      </div>
    </article>
  );
}
