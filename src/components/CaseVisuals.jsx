/* Abstract, theme-aware schematics. They illustrate structure only; they are not product screenshots. */

function Frame({ children, label }) {
  return (
    <svg className="schematic" viewBox="0 0 480 360" role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      <g className="sv-marks" aria-hidden="true">
        <path d="M8 22V8h14M458 8h14v14M472 338v14h-14M22 352H8v-14" />
      </g>
      {children}
    </svg>
  );
}

function Dashboards() {
  const labels = ["POLICIES", "PLANS", "AGREEMENTS", "PROVIDERS", "SCHEMES", "MEMBERS"];
  const bars = [70, 104, 58, 124, 92, 140, 80];
  return (
    <Frame label="Schematic of a management dashboard with navigation for policies, plans, agreements, providers, schemes and members">
      <rect className="sv-panel" x="20" y="20" width="440" height="322" rx="8" />
      <path className="sv-line" d="M20 52H460M128 52V342" />
      <circle className="sv-dot sv-dot-a" cx="38" cy="36" r="4" />
      <circle className="sv-dot" cx="52" cy="36" r="4" />
      <circle className="sv-dot" cx="66" cy="36" r="4" />
      <rect className="sv-block" x="300" y="28" width="144" height="16" rx="8" />
      {labels.map((label, index) => (
        <g key={label} className={index === 0 ? "sv-nav is-on" : "sv-nav"} style={{ "--k": index }}>
          <rect x="30" y={66 + index * 38} width="88" height="28" rx="4" className="sv-nav-bg" />
          <text className="sv-text" x="40" y={84 + index * 38}>{label}</text>
        </g>
      ))}
      {[0, 1, 2].map((index) => (
        <g key={index} className="sv-kpi" style={{ "--k": index }}>
          <rect className="sv-block" x={144 + index * 106} y="68" width="96" height="58" rx="6" />
          <rect className="sv-bar-soft" x={154 + index * 106} y="80" width="40" height="6" rx="3" />
          <rect className={index === 1 ? "sv-bar-accent" : "sv-bar-ink"} x={154 + index * 106} y="98" width={60 + index * 8} height="14" rx="3" />
        </g>
      ))}
      <rect className="sv-block" x="144" y="140" width="190" height="118" rx="6" />
      {bars.map((height, index) => (
        <rect
          key={index}
          className={index === 5 ? "sv-bar-accent sv-grow" : "sv-bar-ink sv-grow"}
          style={{ "--k": index }}
          x={156 + index * 25}
          y={248 - height * 0.8}
          width="14"
          height={height * 0.8}
          rx="2"
        />
      ))}
      <rect className="sv-block" x="346" y="140" width="98" height="118" rx="6" />
      <polyline className="sv-blue-line sv-draw" pathLength="1" points="356,236 374,214 392,224 410,186 428,196 436,164" />
      <circle className="sv-blue-dot" cx="436" cy="164" r="4" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <rect className="sv-bar-soft" x="144" y={274 + row * 20} width="70" height="8" rx="4" />
          <rect className="sv-bar-soft" x="228" y={274 + row * 20} width={row === 1 ? 120 : 90} height="8" rx="4" />
          <rect className={row === 0 ? "sv-bar-accent" : "sv-bar-soft"} x="388" y={274 + row * 20} width="56" height="8" rx="4" />
        </g>
      ))}
    </Frame>
  );
}

function Portals() {
  const windows = [
    { x: 24, label: "PROVIDER" },
    { x: 172, label: "MEMBER" },
    { x: 320, label: "BROKER" },
  ];
  return (
    <Frame label="Schematic of provider, member and broker portals connected to a customer portal backend">
      {windows.map((item, index) => (
        <g key={item.label} className="sv-window" style={{ "--k": index }}>
          <rect className="sv-panel" x={item.x} y="30" width="136" height="150" rx="8" />
          <path className="sv-line" d={`M${item.x} 54H${item.x + 136}`} />
          <circle className="sv-dot sv-dot-a" cx={item.x + 14} cy="42" r="3.5" />
          <circle className="sv-dot" cx={item.x + 26} cy="42" r="3.5" />
          <text className="sv-text" x={item.x + 12} y="76">{item.label}</text>
          <rect className="sv-bar-ink" x={item.x + 12} y="88" width="70" height="10" rx="3" />
          <rect className="sv-bar-soft" x={item.x + 12} y="108" width="108" height="7" rx="3.5" />
          <rect className="sv-bar-soft" x={item.x + 12} y="122" width="92" height="7" rx="3.5" />
          <rect className={index === 1 ? "sv-bar-accent" : "sv-block"} x={item.x + 12} y="142" width="52" height="24" rx="5" />
          <rect className="sv-block" x={item.x + 72} y="142" width="52" height="24" rx="5" />
        </g>
      ))}
      {windows.map((item, index) => (
        <path key={item.label} className="sv-flow" d={`M${item.x + 68} 180V212H240V232`} style={{ "--k": index }} />
      ))}
      <rect className="sv-panel sv-backend" x="24" y="232" width="432" height="86" rx="8" />
      <text className="sv-text" x="40" y="256">CUSTOMER PORTAL BACKEND</text>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <rect key={index} className={index === 2 ? "sv-bar-accent" : "sv-block"} x={40 + index * 68} y="270" width="56" height="30" rx="5" />
      ))}
    </Frame>
  );
}

function Cms() {
  return (
    <Frame label="Schematic of an admin content editor for creating, customizing and reviewing customer portal pages">
      <rect className="sv-panel" x="20" y="20" width="440" height="322" rx="8" />
      <path className="sv-line" d="M20 52H460M112 52V342M372 52V342" />
      <text className="sv-text" x="32" y="40">CREATE</text>
      <text className="sv-text" x="212" y="40" textAnchor="middle">CUSTOMIZE</text>
      <text className="sv-text" x="384" y="40">REVIEW</text>
      {[0, 1, 2, 3].map((index) => (
        <g key={index} style={{ "--k": index }} className="sv-palette">
          <rect className="sv-block" x="32" y={68 + index * 62} width="68" height="50" rx="6" />
          <rect className={index === 1 ? "sv-bar-accent" : "sv-bar-ink"} x="42" y={80 + index * 62} width={index % 2 ? 34 : 48} height="7" rx="3" />
          <rect className="sv-bar-soft" x="42" y={94 + index * 62} width="46" height="6" rx="3" />
        </g>
      ))}
      <rect className="sv-page" x="132" y="68" width="220" height="258" rx="6" />
      <rect className="sv-bar-ink" x="148" y="84" width="110" height="14" rx="3" />
      <rect className="sv-bar-soft" x="148" y="108" width="186" height="7" rx="3.5" />
      <rect className="sv-bar-soft" x="148" y="122" width="150" height="7" rx="3.5" />
      <rect className="sv-block" x="148" y="144" width="186" height="76" rx="4" />
      <path className="sv-line" d="M148 144L334 220M334 144L148 220" />
      <rect className="sv-select sv-pulse" x="140" y="136" width="202" height="92" rx="4" />
      {[[140, 136], [342, 136], [140, 228], [342, 228]].map(([x, y]) => (
        <rect key={`${x}-${y}`} className="sv-handle" x={x - 3} y={y - 3} width="6" height="6" />
      ))}
      <rect className="sv-bar-soft" x="148" y="242" width="186" height="7" rx="3.5" />
      <rect className="sv-bar-accent" x="148" y="268" width="84" height="26" rx="13" />
      {[0, 1, 2, 3].map((index) => (
        <g key={index} style={{ "--k": index }}>
          <rect className={index < 3 ? "sv-check-box is-done" : "sv-check-box"} x="384" y={72 + index * 38} width="14" height="14" rx="3" />
          {index < 3 && <path className="sv-check" d={`M387 ${79 + index * 38}l3 3 5-6`} />}
          <rect className="sv-bar-soft" x="406" y={76 + index * 38} width="42" height="6" rx="3" />
        </g>
      ))}
    </Frame>
  );
}

function Access() {
  const cx = 240;
  const cy = 170;
  const nodes = ["USERS", "TENANTS", "APPLICATIONS", "MENUS", "PROFILES", "ROLES"].map((label, index) => {
    const angle = (-90 + index * 60) * (Math.PI / 180);
    return { label, x: cx + Math.cos(angle) * 168, y: cy + Math.sin(angle) * 118 };
  });
  const width = (label) => Math.max(76, label.length * 8 + 22);
  return (
    <Frame label="Schematic graph linking users, tenants, applications, menus, profiles and roles through an access core">
      {nodes.map((node, index) => (
        <line key={node.label} className="sv-flow" x1={cx} y1={cy} x2={node.x} y2={node.y} style={{ "--k": index }} />
      ))}
      {nodes.map((node, index) => {
        const next = nodes[(index + 1) % nodes.length];
        return <line key={`ring-${node.label}`} className="sv-line sv-faint" x1={node.x} y1={node.y} x2={next.x} y2={next.y} />;
      })}
      <circle className="sv-ring" cx={cx} cy={cy} r="54" />
      <circle className="sv-ring sv-ring-b" cx={cx} cy={cy} r="38" />
      <circle className="sv-core" cx={cx} cy={cy} r="28" />
      <text className="sv-text sv-core-text" x={cx} y={cy + 3} textAnchor="middle">ACCESS</text>
      {nodes.map((node, index) => (
        <g key={node.label} className="sv-node" style={{ "--k": index }}>
          <rect className={index === 5 ? "sv-node-box is-accent" : "sv-node-box"} x={node.x - width(node.label) / 2} y={node.y - 15} width={width(node.label)} height="30" rx="15" />
          <text className="sv-text sv-node-text" x={node.x} y={node.y + 3.5} textAnchor="middle">{node.label}</text>
        </g>
      ))}
    </Frame>
  );
}

const visuals = { dashboards: Dashboards, portals: Portals, cms: Cms, access: Access };

export default function CaseVisual({ kind }) {
  const Visual = visuals[kind];
  return Visual ? <Visual /> : null;
}
