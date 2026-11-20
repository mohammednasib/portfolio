import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { isFinePointer, prefersReducedMotion } from "../hooks/motion.js";

const interactiveSelector = "a[href], button, summary, [role='tab'], [data-cursor], label";
const textSelector = "input, textarea, select";

/* Custom cursor: dot + lagging ring. Only on fine pointers without reduced motion. */
export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return undefined;
    const root = document.documentElement;
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = 0;
    let shown = false;

    const loop = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!shown) {
        shown = true;
        current.x = target.x;
        current.y = target.y;
        root.classList.add("has-cursor");
        ring.current?.classList.add("is-visible");
        dot.current?.classList.add("is-visible");
      }
    };
    const onOver = (event) => {
      const el = event.target instanceof Element ? event.target : null;
      const ringEl = ring.current;
      if (!el || !ringEl) return;
      const isText = Boolean(el.closest(textSelector));
      const interactive = el.closest(interactiveSelector);
      const cursorLabel = el.closest("[data-cursor]")?.getAttribute("data-cursor") || "";
      ringEl.classList.toggle("is-text", isText);
      ringEl.classList.toggle("is-active", !isText && Boolean(interactive));
      ringEl.classList.toggle("has-label", !isText && Boolean(cursorLabel));
      if (label.current) label.current.textContent = cursorLabel;
    };
    const onDown = () => ring.current?.classList.add("is-down");
    const onUp = () => ring.current?.classList.remove("is-down");
    const onLeaveDoc = () => {
      ring.current?.classList.remove("is-visible");
      dot.current?.classList.remove("is-visible");
      shown = false;
      root.classList.remove("has-cursor");
    };

    frame = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveDoc);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveDoc);
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <span className="cursor-ring" ref={ring}><span className="cursor-label" ref={label} /></span>
      <span className="cursor-dot" ref={dot} />
    </div>
  );
}

/* Magnetic pull for [data-magnetic] elements (event delegation, transform only). */
export function MagneticLayer() {
  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return undefined;
    let active = null;
    let frame = 0;
    let pending = null;

    const reset = (el) => {
      el.style.transform = "";
      el.classList.remove("is-magnet");
    };
    const apply = () => {
      frame = 0;
      if (!pending || !active) return;
      const { x, y } = pending;
      const rect = active.getBoundingClientRect();
      const strength = Number(active.dataset.magnetic) || 0.3;
      const dx = (x - (rect.left + rect.width / 2)) * strength;
      const dy = (y - (rect.top + rect.height / 2)) * strength;
      active.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
    };
    const onMove = (event) => {
      const el = event.target instanceof Element ? event.target.closest("[data-magnetic]") : null;
      if (el !== active) {
        if (active) reset(active);
        active = el;
        if (active) active.classList.add("is-magnet");
      }
      if (active) {
        pending = { x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(apply);
      }
    };
    const onLeave = () => {
      if (active) reset(active);
      active = null;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (active) reset(active);
    };
  }, []);
  return null;
}

/* Scroll parallax for [data-parallax="0.1"] elements, via the individual `translate` property. */
export function ParallaxLayer() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const elements = [...document.querySelectorAll("[data-parallax]")];
    if (!elements.length) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const narrow = window.innerWidth < 720;
      elements.forEach((element) => {
        const rect = element.parentElement.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewport + 200) return;
        const speed = Number(element.dataset.parallax) * (narrow ? 0.4 : 1);
        const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
        element.style.translate = `0 ${offset.toFixed(1)}px`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
