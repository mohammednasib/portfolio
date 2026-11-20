import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navigation, person } from "../data/content.js";
import { useDohaTime, useReveal } from "../hooks/motion.js";
import { Cursor, MagneticLayer, ParallaxLayer } from "./Effects.jsx";
import Preloader from "./Preloader.jsx";

const themeStorageKey = "mohammed-nasib-theme";
const themeColors = { light: "#f3efe7", dark: "#0d1016" };

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  } catch {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef(null);
  const linksRef = useRef(null);
  const progressRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[theme]);
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Theme changes still apply for this page when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function handleResize() {
      if (window.innerWidth > 1180) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  /* Hide on scroll down, show on scroll up, plus a scroll-progress hairline. */
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      setScrolled(y > 24);
      if (y > lastY + 6 && y > 160) setHidden(true);
      else if (y < lastY - 6 || y < 160) setHidden(false);
      lastY = y;
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
  }, [location.pathname]);

  /* Animated active-link indicator. */
  const placeIndicator = useCallback((target) => {
    const container = linksRef.current;
    if (!container) return;
    const element = target || container.querySelector("a.is-active");
    if (!element) {
      container.style.setProperty("--io", "0");
      return;
    }
    container.style.setProperty("--ix", `${element.offsetLeft}px`);
    container.style.setProperty("--iw", `${element.offsetWidth}px`);
    container.style.setProperty("--io", "1");
  }, []);

  useLayoutEffect(() => {
    placeIndicator();
    const onResize = () => placeIndicator();
    window.addEventListener("resize", onResize);
    document.fonts?.ready?.then(() => placeIndicator());
    return () => window.removeEventListener("resize", onResize);
  }, [location.pathname, placeIndicator]);

  return (
    <header className={`site-header${hidden && !menuOpen ? " is-hidden" : ""}${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="header-bar">
        <Link className="wordmark" to="/" aria-label="Mohammed Nasib K N, home" data-cursor="Home">
          <span className="wordmark-mark" aria-hidden="true">M<i /></span>
          <span className="wordmark-text">Mohammed Nasib<span className="wordmark-period">.</span></span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close primary navigation" : "Open primary navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-label">{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="nav-links" ref={linksRef} onMouseLeave={() => placeIndicator()}>
            <span className="nav-indicator" aria-hidden="true" />
            {navigation.map(([label, path], index) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
                style={{ "--i": index }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(event) => placeIndicator(event.currentTarget)}
                onFocus={(event) => placeIndicator(event.currentTarget)}
                onBlur={() => placeIndicator()}
              >
                <span className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="nav-label">{label}</span>
              </NavLink>
            ))}
          </div>
          <div className="nav-tools">
            <NavLink className="nav-contact" to="/contact" data-magnetic="0.3" data-cursor="Talk" onClick={() => setMenuOpen(false)}>
              Let’s talk <span aria-hidden="true">↗</span>
            </NavLink>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
              onClick={() => setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))}
            >
              <span className="theme-toggle-icon" aria-hidden="true"><i /></span>
              <span className="theme-toggle-text">{theme === "light" ? "Dark" : "Light"} mode</span>
            </button>
          </div>
        </nav>
      </div>
      <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}

function SiteFooter() {
  const time = useDohaTime();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <p className="footer-lede">Software developer in Doha, building careful systems from API to interface.</p>
          <button className="back-to-top" type="button" data-cursor="Top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
        <div className="footer-columns">
          <nav className="footer-links" aria-label="Footer navigation">
            <span className="footer-heading">Pages</span>
            <Link to="/experience">Experience</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/insurance">Insurance work</Link>
            <Link to="/erpnext">ERPNext direction</Link>
            <Link to="/resume">Résumé / print</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer-links" role="group" aria-label="Profiles">
            <span className="footer-heading">Elsewhere</span>
            <a href={person.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <div className="footer-links footer-place">
            <span className="footer-heading">Doha, Qatar</span>
            <span className="footer-time"><i aria-hidden="true" /> {time || "--:--"} <small>local · UTC+3</small></span>
            <span className="footer-coords">25.2854° N, 51.5310° E</span>
          </div>
        </div>
        <Link className="footer-wordmark" to="/" aria-label="Mohammed Nasib K N, home" tabIndex={-1}>
          <span aria-hidden="true">Mohammed Nasib</span>
        </Link>
        <div className="footer-bottom">
          <span className="copyright">© {new Date().getFullYear()} Mohammed Nasib K N</span>
          <span>Built with React &amp; Vite</span>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Preloader />
      <SiteHeader />
      <main id="main" tabIndex="-1">
        <div className="page" key={pathname}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <MagneticLayer />
      <ParallaxLayer />
    </>
  );
}
