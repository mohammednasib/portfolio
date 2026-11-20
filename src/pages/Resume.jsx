import { dcfResponsibilities, pageDescriptions, person } from "../data/content.js";
import { usePageMeta } from "../lib/usePageMeta.js";

export function ResumePage() {
  usePageMeta("Resume", pageDescriptions.resume);
  return (
    <article className="resume-page shell" aria-labelledby="resume-name">
      <div className="resume-toolbar">
        <p className="eyebrow">PROFESSIONAL PROFILE · DOHA, QATAR</p>
        <button className="button button-primary resume-print" type="button" data-magnetic="0.2" onClick={() => window.print()}>
          Print / Save as PDF <span aria-hidden="true">↗</span>
        </button>
      </div>

      <div className="resume-sheet">
        <header className="resume-header">
          <div>
            <h1 id="resume-name">Mohammed Nasib K N</h1>
            <p className="resume-role">Software Developer</p>
          </div>
          <address className="resume-contact" aria-label="Contact details">
            <span>Doha, Qatar</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={person.phoneHref}>{person.phone}</a>
            <a href={person.github}>github.com/mohammednasib</a>
            <a href={person.linkedin}>linkedin.com/in/mohammed-nasib-k-n</a>
          </address>
        </header>

        <section className="resume-section" aria-labelledby="resume-summary">
          <h2 id="resume-summary">Professional summary</h2>
          <p>
            Software Developer at Blaze Technology Solutions in Doha, Qatar, with previous DCF work in insurance systems. Technical experience spans .NET, React, APIs, portals, databases, authentication, and integrations.
          </p>
        </section>

        <section className="resume-section" aria-labelledby="resume-skills">
          <h2 id="resume-skills">Technical skills</h2>
          <dl className="resume-skills">
            <div>
              <dt>Backend & architecture</dt>
              <dd>.NET, ASP.NET APIs, C#, REST APIs, dependency injection, SOLID principles, DTOs, models, validation, mappers, controllers, services and interfaces, EF Core, DbContext, migrations, Repository and Unit of Work.</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>React, Redux state and cache integration, Progressive Web Applications (PWAs), reusable select dropdowns, accordions, steppers, modals, and toast notifications.</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>PostgreSQL, MySQL, SQL querying, and DDL scripts for creating, updating, and modifying tables.</dd>
            </div>
            <div>
              <dt>Identity & integrations</dt>
              <dd>JWT authentication and authorization, Google and Microsoft sign-in, Zoho REST API with OAuth, and MinIO object and file storage.</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>Git, Insomnia for API testing, and PuTTY for UAT deployment.</dd>
            </div>
          </dl>
        </section>

        <section className="resume-section" aria-labelledby="resume-experience">
          <h2 id="resume-experience">Experience</h2>
          <div className="resume-experience-list">
            <article className="resume-entry">
              <div className="resume-entry-heading">
                <div>
                  <h3>Software Developer</h3>
                  <p className="resume-employer">Blaze Technology Solutions</p>
                </div>
                <p className="resume-entry-meta">Current · Doha, Qatar</p>
              </div>
            </article>
            <article className="resume-entry">
              <div className="resume-entry-heading">
                <div>
                  <h3>Insurance systems</h3>
                  <p className="resume-employer">DCF</p>
                </div>
                <p className="resume-entry-meta">December 2025 – November 2026</p>
              </div>
              <ul>
                {dcfResponsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="resume-section resume-learning" aria-labelledby="resume-learning-title">
          <h2 id="resume-learning-title">Learning direction</h2>
          <p><strong>Frappe / ERPNext:</strong> Learning direction; familiar with DocTypes and workflows. This is not professional ERPNext implementation experience.</p>
        </section>
      </div>
    </article>
  );
}
