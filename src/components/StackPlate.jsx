import { useState } from "react";
import { stackLayers } from "../data/content.js";
import { useDohaTime, usePointerVars } from "../hooks/motion.js";

/* Chip placement (percent of the plate). side decides which edge the chip hugs. */
const placement = {
  ui: { side: "left", y: 7 },
  api: { side: "right", y: 22 },
  data: { side: "left", y: 44 },
  identity: { side: "right", y: 62 },
  storage: { side: "left", y: 80 },
};

const circle = { cx: 50, cy: 50, r: 30 };

function connector(side, y) {
  const anchorY = y + 5;
  const dy = anchorY - circle.cy;
  const reach = Math.sqrt(Math.max(circle.r * circle.r - dy * dy, 0));
  const startX = side === "left" ? 30 : 70;
  const endX = side === "left" ? circle.cx - reach : circle.cx + reach;
  return { x1: startX, y1: anchorY, x2: endX, y2: anchorY };
}

export default function StackPlate() {
  const ref = usePointerVars();
  const time = useDohaTime();
  const [active, setActive] = useState(null);

  return (
    <figure className="plate" ref={ref} data-active={active || undefined}>
      <div className="plate-sheets" aria-hidden="true">
        {stackLayers.map((layer, index) => (
          <i key={layer.id} className={active === layer.id ? "is-active" : undefined} style={{ "--s": stackLayers.length - 1 - index, "--z": index + 1 }} />
        ))}
      </div>

      <div className="plate-face">
        <svg className="plate-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="plate-cross" d="M50 0V100M0 50H100" />
          <circle className="plate-ring plate-ring-dash" cx="50" cy="50" r="38" />
          <circle className="plate-ring" cx="50" cy="50" r="34.5" />
          <circle className="plate-ring plate-ring-ticks" cx="50" cy="50" r="32.4" />
          {stackLayers.map((layer) => {
            const line = connector(placement[layer.id].side, placement[layer.id].y);
            return (
              <g key={layer.id} className={active === layer.id ? "plate-link is-active" : "plate-link"}>
                <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
                <circle cx={line.x2} cy={line.y2} r="0.9" />
              </g>
            );
          })}
        </svg>

        <div className="plate-portrait">
          <img src="/assets/mohammed-nasib.png" alt="Portrait of Mohammed Nasib K N" width="768" height="768" loading="eager" fetchpriority="high" decoding="async" />
          <span className="plate-glow" aria-hidden="true" />
        </div>

        <span className="plate-label plate-label-tl" aria-hidden="true">FIG. 01 / FULL-STACK PLATE</span>
        <span className="plate-label plate-label-tr" aria-hidden="true">SCALE 1 : 1</span>
        <span className="plate-label plate-label-bl" aria-hidden="true">25.2854° N · 51.5310° E</span>
        <span className="plate-label plate-label-br" aria-hidden="true">DOHA {time || "--:--"}</span>
        <span className="plate-crop plate-crop-tl" aria-hidden="true" />
        <span className="plate-crop plate-crop-tr" aria-hidden="true" />
        <span className="plate-crop plate-crop-bl" aria-hidden="true" />
        <span className="plate-crop plate-crop-br" aria-hidden="true" />
      </div>

      <ul className="plate-chips" aria-label="Layers I work across">
        {stackLayers.map((layer) => (
          <li
            key={layer.id}
            className={`plate-chip plate-chip-${placement[layer.id].side}${active === layer.id ? " is-active" : ""}`}
            style={{ "--y": `${placement[layer.id].y}%` }}
            onMouseEnter={() => setActive(layer.id)}
            onMouseLeave={() => setActive(null)}
          >
            <span className="chip-n">{layer.n}</span>
            <span className="chip-name">{layer.name}</span>
            <span className="chip-tech">{layer.tech}</span>
          </li>
        ))}
      </ul>

      <figcaption className="visually-hidden">Portrait of Mohammed Nasib K N surrounded by the layers he works across: UI, API, data, identity and storage.</figcaption>
    </figure>
  );
}
