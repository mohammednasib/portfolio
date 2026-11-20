import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CaseStudy, PageIntro, Rule } from "../components/Ui.jsx";
import SkillAtlas from "../components/SkillAtlas.jsx";
import { useScrollProgress } from "../hooks/motion.js";
import {
  aggregateTech,
  dcfResponsibilities,
  insuranceCases,
  pageDescriptions,
  person,
} from "../data/content.js";
import { usePageMeta } from "../lib/usePageMeta.js";

function LearningNote({ className = "" }) {
  return (
    <section className={`shell learning-note ${className}`} aria-label="Learning direction" data-reveal>
      <p className="eyebrow">ALSO EXPLORING</p>
      <div>
        <h2>Frappe / ERPNext</h2>
        <p>Learning direction; familiar with DocTypes and workflows. Not professional implementation experience.</p>
      </div>
      <Link className="link-arrow" to="/erpnext" data-cursor="Open">Read the context <span aria-hidden="true">↗</span></Link>
    </section>
  );
}

export function ExperiencePage() {
  usePageMeta("Experience", pageDescriptions.experience);
  const railRef = useScrollProgress();
  return (
    <>
      <PageIntro label="PROFESSIONAL EXPERIENCE" title="Experience" summary="Current software development role at Blaze Technology Solutions, alongside previous DCF work in insurance systems." />
      <section className="section timeline-section" aria-label="Professional experience">
        <div className="shell">
          <ol className="timeline" ref={railRef}>
            <li className="timeline-item timeline-current" data-reveal>
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-meta">
                <span className="status-chip"><i aria-hidden="true" /> Current role</span>
                <span className="timeline-when">Present</span>
                <span className="timeline-where">Doha, Qatar</span>
              </div>
              <div className="timeline-body">
                <h2>Software Developer</h2>
                <p className="timeline-company">Blaze Technology Solutions</p>
                <p>Currently working as a Software Developer at Blaze Technology Solutions.</p>
              </div>
            </li>
            <li className="timeline-item" data-reveal>
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-meta">
                <span className="timeline-kind">Previous project / experience</span>
                <span className="timeline-when">December 2025 — November 2026</span>
              </div>
              <div className="timeline-body">
                <h2>Insurance systems</h2>
                <p className="timeline-company">DCF</p>
                <p>Work included insurance management for policies, plans, agreements, providers, schemes, and members; provider, member, and broker portal management; customer portal backend and CMS work; user administration; and identity and integrations.</p>
                <p className="mini-label">Responsibilities</p>
                <ul className="timeline-list">
                  {dcfResponsibilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className="mini-label">Technologies across this experience</p>
                <ul className="chip-list chip-list-tech">
                  {aggregateTech.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="link-arrow" to="/insurance" data-cursor="Open">Explore DCF insurance work <span aria-hidden="true">↗</span></Link>
              </div>
            </li>
          </ol>
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
      <section className="section skills-section" aria-label="Technical skills">
        <div className="shell">
          <SkillAtlas />
        </div>
      </section>
      <LearningNote />
    </>
  );
}

export function InsurancePage() {
  usePageMeta("Insurance Work", pageDescriptions.insurance);
  return (
    <>
      <PageIntro label="PREVIOUS DCF WORK" title="Insurance workflows" summary="A map of the management, portal, identity, and integration areas I worked across in my previous insurance experience." />
      <section className="section insurance-section" aria-label="Insurance work areas">
        <div className="shell insurance-cases">
          {insuranceCases.map((item, index) => (
            <div className="case-reveal" key={item.number} data-reveal>
              <CaseStudy item={item} index={index} as="h2" variant="page" />
            </div>
          ))}
        </div>
        <div className="shell insurance-note" data-reveal>
          <Rule />
          <div className="insurance-note-grid">
            <div>
              <p className="eyebrow">PROJECT CONTEXT</p>
              <h2>Work described, not product screens.</h2>
            </div>
            <div>
              <p>These summaries describe areas of work rather than interface captures. The portfolio does not name clients or products. This experience is separate from my Frappe / ERPNext learning direction.</p>
              <div className="inline-actions">
                <Link className="link-arrow" to="/contact" data-cursor="Talk">Discuss relevant experience <span aria-hidden="true">↗</span></Link>
                <a className="link-arrow" href={person.github} target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
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
        <span className="status-chip"><i aria-hidden="true" /> Familiar with DocTypes &amp; workflows</span>
      </PageIntro>
      <section className="section frappe-section">
        <div className="shell frappe-grid">
          <div>
            <p className="eyebrow" data-reveal>A DIRECTION I’M EXPLORING</p>
            <h2 className="frappe-title" data-reveal style={{ "--d": 1 }}>Transfer what I know. <em>Keep learning</em> what’s next.</h2>
          </div>
          <div className="frappe-copy">
            <p data-reveal>I’m exploring Frappe / ERPNext development and have familiarized myself with DocTypes and workflows. This is a learning direction—not professional Frappe or ERPNext implementation experience.</p>
            <p data-reveal style={{ "--d": 1 }}>My .NET, API, database, React, and structured-application experience gives me a foundation to build on as I learn how ERP systems can serve organizations across Qatar.</p>
            <div className="foundation" data-reveal style={{ "--d": 2 }} aria-label="Foundation I am building on">
              <span className="mini-label">The foundation I’m building on</span>
              <ul className="chip-list">
                {[".NET", "APIs", "Databases", "React", "Structured applications"].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Link className="link-arrow" to="/contact" data-cursor="Talk" data-reveal style={{ "--d": 3 }}>Discuss an opportunity <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell me your name.";
  if (!values.email.trim()) errors.email = "Please add your email address.";
  else if (!emailPattern.test(values.email.trim())) errors.email = "That email address doesn’t look right.";
  if (!values.message.trim()) errors.message = "Add a short message so I know what this is about.";
  return errors;
}

function Field({ id, label, error, touched, children }) {
  return (
    <div className={`field${error && touched ? " has-error" : ""}${touched && !error ? " is-valid" : ""}`}>
      {children}
      <label htmlFor={id}>{label}</label>
      <span className="field-line" aria-hidden="true" />
      <p className="field-error" id={`${id}-error`} role={error && touched ? "alert" : undefined}>{touched ? error : ""}</p>
    </div>
  );
}

export function ContactPage() {
  usePageMeta("Contact", pageDescriptions.contact);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [mailLink, setMailLink] = useState("");
  const formRef = useRef(null);
  const errors = validate(formValues);

  function update(field, value) {
    setMailLink("");
    setFormValues((current) => ({ ...current, [field]: value }));
  }

  function prepareEmail(event) {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const found = validate(formValues);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }
    const subject = `Portfolio enquiry from ${formValues.name.trim()}`;
    const body = `Name: ${formValues.name.trim()}\nEmail: ${formValues.email.trim()}\n\n${formValues.message.trim()}`;
    setMailLink(`mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

  const touch = (field) => () => setTouched((current) => ({ ...current, [field]: true }));
  const invalid = (field) => Boolean(errors[field] && touched[field]);

  const rows = [
    ["Email", person.email, `mailto:${person.email}`, `Email Mohammed at ${person.email}`, false],
    ["Phone", person.phone, person.phoneHref, "Call Mohammed at plus 974 5092 8929", false],
    ["GitHub", "github.com/mohammednasib", person.github, "Mohammed’s GitHub profile", true],
    ["LinkedIn", "linkedin.com/in/mohammed-nasib-k-n", person.linkedin, "Mohammed’s LinkedIn profile", true],
  ];

  return (
    <>
      <PageIntro label="CONTACT · DOHA, QATAR" title="Let’s talk" summary="For software development conversations and Frappe / ERPNext opportunities, send a note or use the mailto helper below." />
      <section className="section contact-section" aria-labelledby="contact-title">
        <div className="shell contact-grid">
          <div className="contact-main">
            <p className="eyebrow" data-reveal>GET IN TOUCH · DOHA, QATAR</p>
            <h2 id="contact-title" className="contact-title" data-reveal="mask">
              <span className="ml"><span>Let’s build</span></span>
              <span className="ml"><span style={{ "--d": 1 }}><em>something useful.</em></span></span>
            </h2>
            <p className="contact-lede" data-reveal style={{ "--d": 2 }}>Reach out about software development or Frappe / ERPNext opportunities.</p>
            <ul className="contact-links" aria-label="Contact and profile links">
              {rows.map(([label, value, href, aria, external], index) => (
                <li key={label} data-reveal style={{ "--d": index }}>
                  <a href={href} aria-label={aria} data-cursor="Open" {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                    <span className="contact-label">{label}</span>
                    <strong>{value}</strong>
                    <span className="contact-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={prepareEmail} noValidate ref={formRef} data-reveal style={{ "--d": 2 }}>
            <div className="form-heading">
              <p className="eyebrow">A QUICK NOTE</p>
              <h3>Draft an email</h3>
              <p>Opens your email app; no form data is stored or sent by this site.</p>
            </div>
            <Field id="contact-name" label="Your name" error={errors.name} touched={touched.name}>
              <input id="contact-name" name="name" placeholder=" " autoComplete="name" required maxLength="120" value={formValues.name} aria-invalid={invalid("name")} aria-describedby="contact-name-error" onBlur={touch("name")} onChange={(event) => update("name", event.target.value)} />
            </Field>
            <Field id="contact-email" label="Your email" error={errors.email} touched={touched.email}>
              <input id="contact-email" name="email" type="email" placeholder=" " autoComplete="email" required maxLength="254" value={formValues.email} aria-invalid={invalid("email")} aria-describedby="contact-email-error" onBlur={touch("email")} onChange={(event) => update("email", event.target.value)} />
            </Field>
            <Field id="contact-message" label="Message" error={errors.message} touched={touched.message}>
              <textarea id="contact-message" name="message" placeholder=" " rows="5" required maxLength="5000" value={formValues.message} aria-invalid={invalid("message")} aria-describedby="contact-message-error" onBlur={touch("message")} onChange={(event) => update("message", event.target.value)} />
            </Field>
            <div className="form-actions">
              <button className="button button-primary" type="submit" data-magnetic="0.2">Prepare email <span aria-hidden="true">↗</span></button>
              {mailLink && <a className="mailto-ready" href={mailLink}>Continue in your email app <span aria-hidden="true">↗</span></a>}
            </div>
            <p className="form-status" role="status">{mailLink ? "Your email is ready. Use the link to open it in your email app." : ""}</p>
          </form>
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  usePageMeta("Page not found", pageDescriptions.notFound);
  return (
    <>
      <PageIntro label="404 · PAGE NOT FOUND" title="This page isn’t here" summary="The link may have changed, or the address may be mistyped. Head back to the portfolio to continue exploring.">
        <Link className="button button-primary" to="/" data-magnetic="0.25">Back to home <span aria-hidden="true">↗</span></Link>
      </PageIntro>
      <div className="shell notfound-art" aria-hidden="true">
        <span>404</span>
        <svg viewBox="0 0 600 120" preserveAspectRatio="none"><path className="nf-line" d="M0 60H220l20-40 20 80 20-80 20 40H600" /></svg>
      </div>
    </>
  );
}
