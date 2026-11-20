import { useState } from "react";
import { Link } from "react-router-dom";
import { CaseStudy, Counter, Mask, Rule, SectionHead } from "../components/Ui.jsx";
import SkillAtlas from "../components/SkillAtlas.jsx";
import StackPlate from "../components/StackPlate.jsx";
import {
  aggregateTech,
  insuranceCases,
  interests,
  marqueeTech,
  pageDescriptions,
  person,
  principles,
  services,
  skillGroups,
  totalTechnologies,
  workspacePhotos,
} from "../data/content.js";
import { usePageMeta } from "../lib/usePageMeta.js";

function Marquee({ items, label }) {
  return (
    <div className="marquee" role="group" aria-label={label}>
      <div className="marquee-track">
        <ul className="marquee-list">
          {items.map((item) => <li key={item}>{item}<i aria-hidden="true" /></li>)}
        </ul>
        <ul className="marquee-list" aria-hidden="true">
          {items.map((item) => <li key={item}>{item}<i aria-hidden="true" /></li>)}
        </ul>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-shell">
        <div className="hero-top" data-reveal>
          <p className="status-pill"><span className="availability-dot" aria-hidden="true" /> <span>Software Developer @ Blaze Technology Solutions <span className="pill-sep" aria-hidden="true">·</span> Doha, Qatar</span></p>
          <p className="hero-coords" aria-hidden="true">25.2854° N / 51.5310° E</p>
        </div>

        <h1 id="hero-title" className="hero-name" data-reveal="mask">
          <span className="hero-name-line">
            <span className="ml"><span style={{ "--d": 0 }}>Mohammed</span></span>{" "}
            <span className="ml"><span style={{ "--d": 1 }}><em>Nasib</em></span></span>
          </span>
          <span className="hero-role ml"><span style={{ "--d": 3 }}>Full Stack Developer</span></span>
        </h1>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro" data-reveal style={{ "--d": 3 }}>
              I’m Mohammed Nasib K N, a Software Developer at Blaze Technology Solutions. My work spans application layers, insurance systems, portals, and the details that connect them.
            </p>
            <div className="hero-actions" data-reveal style={{ "--d": 4 }}>
              <a className="button button-primary" href="#selected-work" data-magnetic="0.25" data-cursor="Scroll">View selected work <span aria-hidden="true">↓</span></a>
              <Link className="button button-outline" to="/resume" data-magnetic="0.25" data-cursor="Open">Résumé / Save as PDF <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="hero-socials" aria-label="Social profiles" data-reveal style={{ "--d": 5 }}>
              <a href={person.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-plate" data-reveal style={{ "--d": 2 }}>
            <StackPlate />
          </div>
        </div>

        <a className="scroll-cue" href="#about"><span className="scroll-cue-line" aria-hidden="true" /> Scroll to explore</a>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof" aria-label="Professional snapshot">
      <div className="shell proof-grid">
        <div className="proof-item" data-reveal><span className="proof-label">Based in</span><span>Doha, Qatar</span></div>
        <div className="proof-item" data-reveal style={{ "--d": 1 }}><span className="proof-label">Currently</span><span>Software Developer · Blaze</span></div>
        <div className="proof-item" data-reveal style={{ "--d": 2 }}><span className="proof-label">Working across</span><span>.NET · React · PostgreSQL</span></div>
      </div>
      <Marquee items={marqueeTech} label="Technologies from my work" />
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="shell">
        <SectionHead
          n="01"
          label="About / Approach"
          eyebrow="A PRACTICAL POINT OF VIEW"
          titleId="about-title"
          title={<>Good software starts by understanding the <em>work.</em></>}
        />
        <div className="about-grid">
          <div className="about-sticky">
            <p className="about-lead" data-reveal>I’m interested in the space between a person’s task and the system that helps them complete it.</p>
            <p className="about-body" data-reveal style={{ "--d": 1 }}>Across APIs, interfaces, data, and insurance workflows, I value clear boundaries, reusable building blocks, and experiences that make complicated processes easier to follow.</p>
            <div data-reveal style={{ "--d": 2 }}>
              <p className="mini-label">Technical interests</p>
              <ul className="chip-list" aria-label="Technical interests">
                {interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </div>
          </div>
          <div className="principles" aria-label="Development philosophy">
            {principles.map((principle, index) => (
              <article className="principle" key={principle.label} style={{ "--n": index }}>
                <span className="principle-label">{principle.label}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <span className="principle-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="stats" role="list" aria-label="Facts drawn from this portfolio">
          <div role="listitem" data-reveal><Counter to={totalTechnologies} label="Technologies listed" note="across the skills atlas" /></div>
          <div role="listitem" data-reveal style={{ "--d": 1 }}><Counter to={skillGroups.length} label="Skill groups" note="backend to tooling" /></div>
          <div role="listitem" data-reveal style={{ "--d": 2 }}><Counter to={insuranceCases.length} label="Insurance work areas" note="from DCF" /></div>
          <div role="listitem" data-reveal style={{ "--d": 3 }}><Counter to={3} label="Portal types" note="provider · member · broker" /></div>
        </div>
      </div>
    </section>
  );
}

function ServiceDiagram({ active }) {
  const order = [3, 2, 1, 0];
  return (
    <svg className="service-diagram" viewBox="0 0 340 330" role="img" aria-label="Diagram of four stacked layers: server, interface, data and domain">
      {order.map((serviceIndex, row) => {
        const y = 28 + row * 70;
        const isActive = serviceIndex === active;
        const names = ["SERVER", "INTERFACE", "DATA", "DOMAIN"];
        return (
          <g key={serviceIndex} className={`slab${isActive ? " is-active" : ""}`}>
            <path className="slab-side" d={`M40 ${y + 34}L170 ${y + 64}L300 ${y + 34}V${y + 46}L170 ${y + 76}L40 ${y + 46}Z`} />
            <path className="slab-top" d={`M40 ${y + 34}L170 ${y + 4}L300 ${y + 34}L170 ${y + 64}Z`} />
            <text className="slab-text" x="170" y={y + 38} textAnchor="middle">{names[serviceIndex]}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section className="section capabilities" aria-labelledby="services-title">
      <div className="shell">
        <SectionHead
          n="02"
          label="Capabilities"
          eyebrow="WHAT I WORK ACROSS"
          titleId="services-title"
          title={<>Systems are more than their <em>screens.</em></>}
        />
        <div className="capabilities-grid">
          <div className="accordion" data-reveal>
            {services.map((service, index) => {
              const open = active === index;
              return (
                <div className={`acc-item${open ? " is-open" : ""}`} key={service.title} onMouseEnter={() => setActive(index)}>
                  <h3 className="acc-heading">
                    <button
                      type="button"
                      className="acc-trigger"
                      aria-expanded={open}
                      aria-controls={`service-panel-${index}`}
                      id={`service-trigger-${index}`}
                      onClick={() => setActive(index)}
                      onFocus={() => setActive(index)}
                    >
                      <span className="acc-index">{service.index}</span>
                      <span className="acc-title">{service.title}</span>
                      <span className="acc-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="acc-panel" id={`service-panel-${index}`} role="region" aria-labelledby={`service-trigger-${index}`}>
                    <div className="acc-panel-inner">
                      <p>{service.text}</p>
                      <ul className="chip-list" aria-label={`${service.title} keywords`}>
                        {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="service-figure" data-reveal style={{ "--d": 2 }}>
            <ServiceDiagram active={active} />
            <p className="figure-caption">FIG. 02 / LAYERS OF A SYSTEM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkspaceInterlude() {
  return (
    <section className="section interlude" aria-labelledby="photo-interlude-title">
      <div className="shell">
        <header className="interlude-head">
          <div>
            <p className="eyebrow" data-reveal>WORKSPACES &amp; PRACTICE</p>
            <h2 id="photo-interlude-title" className="section-title" data-reveal="mask"><Mask>A little room for <em>the work.</em></Mask></h2>
          </div>
          <p data-reveal style={{ "--d": 2 }}>Representative workspace photography for atmosphere only—not Mohammed’s workplace, client work, or product screenshots.</p>
        </header>
        <div className="collage">
          {workspacePhotos.map((photo, index) => (
            <figure className={`collage-item collage-item-${index + 1}`} key={photo.src} data-reveal style={{ "--d": index }}>
              <div className="collage-frame">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={Number(photo.dimensions.split(" ")[0])}
                  height={Number(photo.dimensions.split(" ")[1])}
                  loading="lazy"
                  decoding="async"
                  data-parallax={index % 2 ? "0.05" : "-0.05"}
                />
              </div>
              <figcaption>
                <span>{photo.title}</span>
                <small>
                  Photo: {photo.creator} · <a href={photo.source} target="_blank" rel="noreferrer">Source</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a>
                </small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="section work" id="selected-work" aria-labelledby="selected-work-title">
      <div className="shell">
        <SectionHead
          n="03"
          label="Selected work / DCF"
          eyebrow="SYSTEMS AT A GLANCE"
          titleId="selected-work-title"
          title={<>A closer look at <em>connected work.</em></>}
        >
          <p>Four areas from my previous DCF insurance experience. Details describe the work; they are not product screenshots or named products.</p>
        </SectionHead>
        <div className="deck">
          {insuranceCases.map((item, index) => (
            <CaseStudy item={item} index={index} key={item.number} />
          ))}
        </div>
        <div className="work-foot">
          <p className="footnote" data-reveal><span aria-hidden="true">↗</span> No client or product names are shown; these summaries describe workflow areas only.</p>
          <aside className="tech-strip" aria-label="Technologies used across this experience" data-reveal>
            <div>
              <span className="eyebrow">TECHNOLOGIES ACROSS THIS EXPERIENCE</span>
              <p>Aggregated across the work; not mapped to individual cases.</p>
            </div>
            <ul className="chip-list chip-list-tech">
              {aggregateTech.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
          <div className="work-links" data-reveal>
            <a className="button button-outline" href={person.github} target="_blank" rel="noreferrer" data-cursor="GitHub">GitHub profile <span aria-hidden="true">↗</span></a>
            <Link className="button button-ghost" to="/insurance" data-cursor="Open">Read all four in full <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="section technology" aria-labelledby="skills-preview-title">
      <div className="shell">
        <SectionHead
          n="04"
          label="Technology"
          eyebrow="TOOLS AS BUILDING BLOCKS"
          titleId="skills-preview-title"
          title={<>A stack for shaping the <em>whole experience.</em></>}
        />
        <SkillAtlas compact />
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section className="section learning" aria-labelledby="overview-title">
      <div className="shell">
        <SectionHead
          n="05"
          label="Learning direction"
          eyebrow="NEXT, WITH INTENTION"
          titleId="overview-title"
          title={<>Curiosity with a practical <em>foundation.</em></>}
        />
        <div className="learning-grid">
          <div className="learning-copy">
            <p data-reveal>I’m exploring Frappe / ERPNext as an emerging direction. My familiarity with DocTypes and workflows comes from learning—not professional ERPNext implementation.</p>
            <p data-reveal style={{ "--d": 1 }}>That curiosity connects naturally with my interest in systems that bring people, information, and everyday operations together.</p>
            <div className="route-links" aria-label="Explore the portfolio" data-reveal style={{ "--d": 2 }}>
              <Link to="/experience" data-cursor="Open">Experience <span aria-hidden="true">↗</span></Link>
              <Link to="/erpnext" data-cursor="Open">ERPNext direction <span aria-hidden="true">↗</span></Link>
              <Link to="/contact" data-cursor="Open">Start a conversation <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <aside className="learning-card" data-reveal style={{ "--d": 2 }} aria-label="Learning status">
            <span className="status-chip"><i aria-hidden="true" /> Learning direction</span>
            <div className="learning-flow" aria-hidden="true">
              <span>DocTypes</span>
              <i />
              <span>Workflows</span>
            </div>
            <p>Familiar with DocTypes and workflows. Not professional ERPNext implementation experience.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="shell">
        <Rule />
        <div className="cta-grid">
          <h2 id="cta-title" className="cta-title" data-reveal="mask">
            <span className="ml"><span>Let’s build</span></span>
            <span className="ml"><span style={{ "--d": 1 }}><em>something useful.</em></span></span>
          </h2>
          <div className="cta-side" data-reveal style={{ "--d": 2 }}>
            <Link className="cta-orb" to="/contact" data-magnetic="0.35" data-cursor="Talk">
              <span>Start a<br />conversation</span>
              <span className="cta-orb-arrow" aria-hidden="true">↗</span>
            </Link>
            <a className="cta-mail" href={`mailto:${person.email}`}>{person.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  usePageMeta("Software Developer", pageDescriptions.home);
  return (
    <>
      <Hero />
      <Proof />
      <About />
      <Capabilities />
      <WorkspaceInterlude />
      <SelectedWork />
      <Technology />
      <Learning />
      <ContactCta />
    </>
  );
}
