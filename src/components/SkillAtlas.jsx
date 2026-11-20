import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { skillGroups } from "../data/content.js";

const monograms = {
  ".NET": ".N",
  "ASP.NET APIs": "AS",
  "C#": "C#",
  REST: "RE",
  SOLID: "SO",
  "Dependency injection": "DI",
  DTOs: "DT",
  Validation: "Va",
  Mappers: "Ma",
  Controllers: "Co",
  Services: "Sv",
  "EF Core": "EF",
  Migrations: "Mg",
  Repository: "Rp",
  "Unit of Work": "UW",
  React: "Re",
  Redux: "Rx",
  PWA: "PW",
  "Reusable components": "Rc",
  Selects: "Se",
  Accordions: "Ac",
  Steppers: "St",
  Modals: "Mo",
  Toasts: "To",
  PostgreSQL: "Pg",
  MySQL: "My",
  SQL: "SQ",
  DDL: "DD",
  JWT: "JW",
  Authentication: "Au",
  Authorization: "Az",
  Users: "Us",
  Tenants: "Te",
  Applications: "Ap",
  Menus: "Me",
  Profiles: "Pr",
  Roles: "Ro",
  "Google sign-in": "Gs",
  "Microsoft sign-in": "Ms",
  "Zoho REST API": "Zo",
  OAuth: "OA",
  MinIO: "Mi",
  Git: "Gi",
  Insomnia: "In",
  PuTTY: "Pu",
  UAT: "UA",
};

function monogram(name) {
  return monograms[name] || name.slice(0, 2).toUpperCase();
}

function SkillCard({ group, index, compact, open, onToggle }) {
  const detailId = `skill-detail-${index}`;
  const visible = compact && group.technologies.length > 10 ? group.technologies.slice(0, 8) : group.technologies;
  const hidden = group.technologies.length - visible.length;
  return (
    <article className={`skill-card${open ? " is-open" : ""}`} style={{ "--i": index }}>
      <header className="skill-card-head">
        <span className="skill-card-mark" aria-hidden="true">{group.mark}</span>
        <div>
          <p className="skill-card-kicker">ATLAS / {String(index + 1).padStart(2, "0")} · {group.technologies.length} listed</p>
          <h3>{group.title}</h3>
        </div>
        <button
          className="skill-card-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={detailId}
          aria-label={`${open ? "Hide" : "Show"} details for ${group.title}`}
          onClick={onToggle}
        >
          <span aria-hidden="true">+</span>
        </button>
      </header>
      <ul className="tile-grid" aria-label={`${group.title} technologies`}>
        {visible.map((technology) => (
          <li className="tile" key={technology}>
            <span className="tile-mark" aria-hidden="true">{monogram(technology)}</span>
            <span className="tile-name">{technology}</span>
          </li>
        ))}
        {hidden > 0 && <li className="tile tile-more"><span className="tile-mark" aria-hidden="true">+{hidden}</span><span className="tile-name">more in the atlas</span></li>}
      </ul>
      <div className="skill-card-detail" id={detailId}>
        <p>{group.detail}</p>
      </div>
    </article>
  );
}

export default function SkillAtlas({ compact = false }) {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const tabs = useRef([]);
  const options = [{ id: "all", label: "All" }, ...skillGroups.map((group, index) => ({ id: String(index), label: group.short }))];

  function onKeyDown(event, index) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % options.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else return;
    event.preventDefault();
    setFilter(options[next].id);
    tabs.current[next]?.focus();
  }

  const shown = skillGroups.map((group, index) => ({ group, index })).filter(({ index }) => filter === "all" || filter === String(index));

  return (
    <div className={`atlas${compact ? " atlas-compact" : ""}`}>
      <div className="atlas-tabs" role="tablist" aria-label="Filter technologies by category">
        {options.map((option, index) => (
          <button
            key={option.id}
            ref={(element) => { tabs.current[index] = element; }}
            className={`atlas-tab${filter === option.id ? " is-selected" : ""}`}
            role="tab"
            type="button"
            id={`atlas-tab-${option.id}`}
            aria-selected={filter === option.id}
            aria-controls="atlas-panel"
            tabIndex={filter === option.id ? 0 : -1}
            onClick={() => setFilter(option.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="atlas-grid" id="atlas-panel" role="tabpanel" aria-labelledby={`atlas-tab-${filter}`}>
        {shown.map(({ group, index }) => (
          <SkillCard
            key={group.title}
            group={group}
            index={index}
            compact={compact && filter === "all"}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
      {compact && (
        <Link className="link-arrow atlas-more" to="/skills" data-cursor="Open">
          View the full technology atlas <span aria-hidden="true">↗</span>
        </Link>
      )}
    </div>
  );
}
