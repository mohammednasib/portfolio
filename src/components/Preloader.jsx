import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../hooks/motion.js";

const storageKey = "mohammed-nasib-intro";

function shouldShow() {
  if (typeof window === "undefined" || prefersReducedMotion()) return false;
  try {
    return window.sessionStorage.getItem(storageKey) !== "seen";
  } catch {
    return true;
  }
}

/* One-time intro per session: monogram draws, counter runs, curtain lifts. Click or any key skips. */
export default function Preloader() {
  const [phase, setPhase] = useState(() => (shouldShow() ? "run" : "done"));
  const [count, setCount] = useState(0);
  const finished = useRef(false);

  useLayoutEffect(() => {
    if (phase === "run") document.documentElement.classList.add("preloading");
  }, [phase]);

  useEffect(() => {
    if (phase !== "run") return undefined;
    const duration = 1050;
    const startedAt = performance.now();
    let frame;
    let timer;

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      try {
        window.sessionStorage.setItem(storageKey, "seen");
      } catch {
        // Intro simply shows again next visit when storage is unavailable.
      }
      setCount(100);
      setPhase("exit");
      document.documentElement.classList.remove("preloading");
      window.dispatchEvent(new Event("preloader:done"));
      timer = window.setTimeout(() => setPhase("done"), 900);
    };

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setCount(Math.round(100 * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else finish();
    };
    frame = requestAnimationFrame(tick);

    const skip = () => finish();
    window.addEventListener("keydown", skip, { once: true });
    const safety = window.setTimeout(finish, 2500);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.clearTimeout(safety);
      window.removeEventListener("keydown", skip);
    };
  }, [phase]);

  useEffect(() => () => document.documentElement.classList.remove("preloading"), []);

  if (phase === "done") return null;

  return (
    <div
      className={`preloader${phase === "exit" ? " is-exiting" : ""}`}
      aria-hidden="true"
      onClick={() => {
        if (phase === "run") window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
      }}
    >
      <div className="preloader-inner">
        <svg className="preloader-mark" viewBox="0 0 120 80" fill="none">
          <path pathLength="1" d="M10 70V10l35 42 35-42v60" />
          <circle className="preloader-dot" cx="100" cy="67" r="4" />
        </svg>
        <div className="preloader-meta">
          <span>MOHAMMED NASIB K N</span>
          <span className="preloader-count">{String(count).padStart(3, "0")}</span>
        </div>
        <span className="preloader-bar"><i style={{ transform: `scaleX(${count / 100})` }} /></span>
        <span className="preloader-hint">Click or press any key to skip</span>
      </div>
    </div>
  );
}
