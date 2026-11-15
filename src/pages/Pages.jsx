import { useEffect } from "react";
import { Link } from "react-router-dom";

const pageDescriptions = {
  home: "Software developer at Blaze Technology Solutions in Doha, Qatar. Explore Mohammed Nasib K N’s experience, technical skills, insurance work, and ERPNext learning direction.",
  experience: "Professional experience at Blaze Technology Solutions and previous insurance-domain work at DCF.",
  skills: "Mohammed Nasib K N’s software development skills across .NET, React, APIs, data, identity, integrations, and delivery tools.",
  insurance: "Insurance management workflows, portals, CMS, identity, and integrations from Mohammed Nasib K N’s previous DCF work.",
  erpnext: "Mohammed Nasib K N’s emerging Frappe and ERPNext career direction, including familiarity with DocTypes and workflows.",
  contact: "Contact Mohammed Nasib K N in Doha, Qatar about software development and Frappe or ERPNext opportunities.",
  notFound: "The requested page could not be found. Browse Mohammed Nasib K N’s portfolio.",
};

function usePageMeta(title, description) {
  useEffect(() => {
    document.title = `${title} — Mohammed Nasib K N`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}

function PageIntro({ label, title, summary, children }) {
  return (
    <section className="page-intro section-shell" aria-labelledby="page-title">
      <p className="eyebrow">{label}</p>
      <h1 id="page-title">{title}<span className="heading-period">.</span></h1>
      <p className="page-summary">{summary}</p>
      {children}
    </section>
  );
}

const skillGroups = [
  {
    title: "Backend & application architecture",
    detail: ".NET, ASP.NET APIs, C#, REST APIs, dependency injection, SOLID principles, DTOs, models, validation, mappers, controllers, services and interfaces, EF Core DbContext and migrations, generic Repository and Unit of Work.",
  },
  {
    title: "Frontend & application experiences",
    detail: "React, Redux state and cache integration, Progressive Web Applications (PWAs), and reusable components including select dropdowns, accordions, steppers, modals, and toast notifications.",
  },
  {
    title: "Data & databases",
    detail: "PostgreSQL, MySQL, SQL querying, and DDL scripts for creating, updating, and modifying tables.",
  },
  {
    title: "Authentication & authorization",
    detail: "JWT authentication and authorization; user-management interfaces for users, tenants, applications, menus, profiles, and roles; Google and Microsoft sign-in integrations.",
  },
  {
    title: "Integrations & storage",
    detail: "Zoho REST API integration using OAuth, and MinIO object and file storage.",
  },
  {
    title: "Tools & collaboration",
    detail: "Git, Insomnia for API testing, PuTTY for UAT deployment, communication, and willingness to learn.",
  },
];

const insuranceAreas = [
  ["01 / OPERATIONS", "Management dashboards", "Dashboards and management workflows for policies, plans, agreements, providers, schemes, and members."],
  ["02 / PORTALS", "Portal experiences", "Provider, member, and broker portal management, along with backend work for a customer portal."],
  ["03 / CONTENT", "Configurable CMS", "An admin CMS for users to create, customize, and review pages."],
  ["04 / INTEGRATIONS", "Identity & connected services", "JWT-based authentication and authorization, Google and Microsoft sign-in, Zoho REST API integration, and MinIO storage."],
];

export function HomePage() {
  usePageMeta("Software Developer", pageDescriptions.home);
  return (
    <>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" aria-hidden="true" /> SOFTWARE DEVELOPER · DOHA, QATAR</p>
          <h1 id="hero-title">Building software<br /><span>for real workflows.</span></h1>
          <p className="hero-intro">I’m Mohammed Nasib K N, a Software Developer at Blaze Technology Solutions in Doha, Qatar. My previous DCF work covered insurance workflows, and my technical experience spans .NET, React, APIs, portals, and management tools.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/experience">Explore experience <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" to="/skills">Technical skills <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-note">Current role <span aria-hidden="true">/</span> Software Developer at Blaze Technology Solutions</p>
        </div>
        <figure className="portrait-scene">
          <span className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
          <span className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
          <span className="portrait-cross portrait-cross-one" aria-hidden="true">+</span>
          <span className="portrait-cross portrait-cross-two" aria-hidden="true">+</span>
          <div className="portrait-frame">
            <img src="/assets/mohammed-nasib.png" alt="Portrait of Mohammed Nasib K N" width="768" height="768" />
          </div>
          <figcaption className="portrait-caption"><span>MOHAMMED NASIB K N</span><span>SOFTWARE DEVELOPER</span></figcaption>
          <span className="portrait-index" aria-hidden="true">01 / DOHA</span>
        </figure>
        <Link className="scroll-cue" to="/experience"><span className="scroll-cue-line" aria-hidden="true" /> EXPLORE EXPERIENCE</Link>
      </section>

      <section className="proof-strip section-shell" aria-label="Professional snapshot">
        <p className="proof-intro">At a glance</p>
        <div className="proof-item"><span className="proof-label">CURRENT</span><span>Blaze Technology Solutions</span></div>
        <div className="proof-item"><span className="proof-label">BASED IN</span><span>Doha, Qatar</span></div>
        <div className="proof-item"><span className="proof-label">WORKS ACROSS</span><span>.NET · React · PostgreSQL</span></div>
      </section>

      <section className="home-overview section-shell" aria-labelledby="overview-title">
        <div>
          <p className="eyebrow">A PRACTICAL FOUNDATION</p>
          <h2 id="overview-title">Software shaped around people and processes.</h2>
        </div>
        <div className="home-overview-copy">
          <p>From structured APIs and reusable interfaces to insurance workflows and integrations, I focus on building software that supports the way teams work.</p>
          <p>Alongside my current software development role, I’m exploring Frappe / ERPNext as an emerging direction, with familiarity with DocTypes and workflows.</p>
          <div className="route-links" aria-label="Explore the portfolio">
            <Link to="/insurance">Insurance work <span aria-hidden="true">↗</span></Link>
            <Link to="/erpnext">ERPNext direction <span aria-hidden="true">↗</span></Link>
            <Link to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function ExperiencePage() {
  usePageMeta("Experience", pageDescriptions.experience);
  return (
    <>
      <PageIntro label="PROFESSIONAL EXPERIENCE" title="Experience" summary="Current software development role at Blaze Technology Solutions, alongside previous DCF work in insurance systems." />
      <section className="experience-section section-shell page-section" aria-label="Professional experience">
        <div className="timeline">
          <article className="experience-item">
            <div className="experience-meta"><span className="experience-status"><i aria-hidden="true" /> CURRENT ROLE</span><span>Doha, Qatar</span></div>
            <div className="experience-content">
              <h2>Software Developer</h2>
              <p className="experience-company">Blaze Technology Solutions</p>
              <p>Software Developer at Blaze Technology Solutions in Doha, Qatar.</p>
            </div>
          </article>
          <article className="experience-item">
            <div className="experience-meta"><span>PREVIOUS PROJECT / EXPERIENCE</span><span>December 2025 — November 2026</span></div>
            <div className="experience-content">
              <h2>Insurance systems</h2>
              <p className="experience-company">DCF</p>
              <p>Work included insurance management workflows, portals, a configurable CMS, identity and access features, and external integrations.</p>
              <Link className="inline-route-link" to="/insurance">Explore DCF insurance work <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export function SkillsPage() {
  usePageMeta("Skills", pageDescriptions.skills);
  return (
    <>
      <PageIntro label="TOOLS & TECHNOLOGIES" title="Technical skills" summary="A practical mix of application development, data, identity, integrations, and delivery tools." />
      <section className="skills-section section-shell page-section" aria-label="Technical skills">
        <div className="skills-grid">
          {skillGroups.map(({ title, detail }, index) => (
            <article className="skill-group" key={title}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{title}</h2><p>{detail}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function InsurancePage() {
  usePageMeta("Insurance Work", pageDescriptions.insurance);
  return (
    <>
      <PageIntro label="PREVIOUS DCF WORK" title="Insurance workflows" summary="A closer look at the insurance management products and workflows I worked on during my previous DCF project / experience." />
      <section className="domain-section section-shell page-section" aria-label="Insurance work areas">
        <div className="domain-list">
          {insuranceAreas.map(([index, title, detail]) => (
            <article className="domain-item" key={index}>
              <span className="domain-index">{index}</span>
              <div><h2>{title}</h2><p>{detail}</p></div>
              <span className="domain-arrow" aria-hidden="true">↘</span>
            </article>
          ))}
        </div>
        <div className="practice-section insurance-note">
          <div className="practice-heading"><p className="eyebrow">PROJECT CONTEXT</p><h2>Connected workflows, from operations to portals.</h2></div>
          <div className="practice-content"><p>These are areas of my previous DCF insurance work. They reflect experience with insurance management workflows and supporting applications—not a claim of ERPNext delivery.</p></div>
        </div>
      </section>
    </>
  );
}

export function ErpNextPage() {
  usePageMeta("Frappe / ERPNext", pageDescriptions.erpnext);
  return (
    <>
      <PageIntro
        label="EMERGING SPECIALIZATION · LEARNING IN PROGRESS"
        title="Frappe / ERPNext"
        summary="An emerging career direction, grounded in existing software development experience and curiosity about practical ERP solutions for organizations across Qatar."
      >
        <span className="frappe-status page-status">FAMILIAR WITH DOCTYPES & WORKFLOWS</span>
      </PageIntro>
      <section className="frappe-section section-shell page-section">
        <div className="frappe-heading">
          <p className="eyebrow">A DIRECTION I’M EXPLORING</p>
          <h2>Transfer what I know. Keep learning what’s next.</h2>
        </div>
        <div className="frappe-content">
          <p>I’m exploring Frappe / ERPNext development and have familiarized myself with DocTypes and workflows. This is a learning direction—not professional Frappe or ERPNext implementation experience.</p>
          <p>My .NET, API, database, React, and structured-application experience gives me a foundation to build on as I learn how ERP systems can serve organizations across Qatar.</p>
          <Link className="inline-route-link" to="/contact">Discuss an opportunity <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  usePageMeta("Contact", pageDescriptions.contact);
  return (
    <>
      <PageIntro label="CONTACT · DOHA, QATAR" title="Let’s talk" summary="Open to Frappe / ERPNext opportunities and software development work. Let’s talk about what your team is building." />
      <section className="contact-section contact-page section-shell" aria-labelledby="contact-title">
        <div className="contact-topline"><span>GET IN TOUCH</span><span>DOHA, QATAR</span></div>
        <div className="contact-main">
          <h2 id="contact-title">Let’s build<br /><span>something useful.</span></h2>
          <div className="contact-action">
            <p>Reach out about software development or Frappe / ERPNext opportunities.</p>
            <ul className="contact-links" aria-label="Contact and profile links">
              <li><a href="mailto:mohammednasib124@gmail.com" aria-label="Email Mohammed at mohammednasib124@gmail.com"><span>EMAIL</span><strong>mohammednasib124@gmail.com</strong><span className="contact-arrow" aria-hidden="true">↗</span></a></li>
              <li><a href="tel:+97450928929" aria-label="Call Mohammed at plus 974 5092 8929"><span>PHONE</span><strong>+974 5092 8929</strong><span className="contact-arrow" aria-hidden="true">↗</span></a></li>
              <li><a href="https://github.com/mohammednasib" aria-label="Mohammed’s GitHub profile"><span>GITHUB</span><strong>github.com/mohammednasib</strong><span className="contact-arrow" aria-hidden="true">↗</span></a></li>
              <li><a href="https://www.linkedin.com/in/mohammed-nasib-k-n" aria-label="Mohammed’s LinkedIn profile"><span>LINKEDIN</span><strong>linkedin.com/in/mohammed-nasib-k-n</strong><span className="contact-arrow" aria-hidden="true">↗</span></a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  usePageMeta("Page not found", pageDescriptions.notFound);
  return (
    <PageIntro label="404 · PAGE NOT FOUND" title="This page isn’t here" summary="The link may have changed, or the address may be mistyped. Head back to the portfolio to continue exploring.">
      <Link className="button button-primary not-found-action" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </PageIntro>
  );
}
