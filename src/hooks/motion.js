import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer() {
  return typeof window !== "undefined" && window.matchMedia?.("(pointer: fine) and (hover: hover)").matches;
}

/* Marks <html> as reveal-ready and reveals [data-reveal] elements as they enter the viewport.
   Elements stay visible without JS because hiding only happens under html.reveal-ready. */
export function useReveal(routeKey) {
  useLayoutEffect(() => {
    document.documentElement.classList.add("reveal-ready");
  }, []);

  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (!elements.length) return undefined;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-in"));
      return undefined;
    }

    let observer;
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      elements.forEach((element) => observer.observe(element));
    };

    if (document.documentElement.classList.contains("preloading")) {
      window.addEventListener("preloader:done", start, { once: true });
    } else {
      start();
    }

    return () => {
      cancelled = true;
      window.removeEventListener("preloader:done", start);
      observer?.disconnect();
    };
  }, [routeKey]);
}

/* Counts up to `to` once the element is on screen. */
export function useCounter(to, duration = 1400) {
  const ref = useRef(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? to : 0));

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setValue(to);
      return undefined;
    }
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startedAt = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setValue(Math.round(to * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return [ref, value];
}

/* Writes pointer position into CSS variables on the element:
   --px/--py in -1..1 (parallax), --mx/--my in % (spotlight). Pointer-fine devices only. */
export function usePointerVars() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion() || !isFinePointer()) return undefined;
    let frame = 0;
    let next = null;

    const apply = () => {
      frame = 0;
      if (!next) return;
      element.style.setProperty("--px", next.px.toFixed(3));
      element.style.setProperty("--py", next.py.toFixed(3));
      element.style.setProperty("--mx", `${next.mx.toFixed(1)}%`);
      element.style.setProperty("--my", `${next.my.toFixed(1)}%`);
    };
    const onMove = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      next = { px: (x - 0.5) * 2, py: (y - 0.5) * 2, mx: x * 100, my: y * 100 };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      next = { px: 0, py: 0, mx: 50, my: 50 };
      element.classList.remove("is-pointer");
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onEnter = () => element.classList.add("is-pointer");

    element.addEventListener("pointerenter", onEnter);
    element.addEventListener("pointermove", onMove, { passive: true });
    element.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerenter", onEnter);
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
}

/* 0..1 progress of an element's travel through the viewport, written to --p. */
export function useScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.7;
      const progress = Math.min(Math.max((start - rect.top) / Math.max(rect.height, 1), 0), 1);
      element.style.setProperty("--p", progress.toFixed(4));
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
  }, []);

  return ref;
}

/* Live-ish Doha local time (Asia/Qatar, UTC+3). */
export function useDohaTime() {
  const format = () => {
    try {
      return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Qatar" }).format(new Date());
    } catch {
      return "";
    }
  };
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 20000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}
