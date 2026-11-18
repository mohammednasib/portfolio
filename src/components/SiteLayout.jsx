import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const themeStorageKey = "mohammed-nasib-theme";

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
  } catch {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }
}

const navigation = [
  ["Home", "/"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Insurance", "/insurance"],
  ["ERPNext", "/erpnext"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const menuButton = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#101a28" : "#f5f7fa",
    );
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Theme changes still apply for this page when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }

    function handleResize() {
      if (window.innerWidth > 980) setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Mohammed Nasib K N, home">
        <span className="wordmark-mark" aria-hidden="true">M</span>
        <span>MOHAMMED NASIB<span className="wordmark-period">.</span></span>
      </Link>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
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
        {navigation.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) => isActive ? "is-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          className="nav-contact"
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </NavLink>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-pressed={theme === "dark"}
          onClick={() => setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")}
        >
          <span className="theme-toggle-icon" aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
          <span>{theme === "light" ? "Dark" : "Light"} mode</span>
        </button>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <Link className="footer-wordmark" to="/">MOHAMMED NASIB<span>.</span></Link>
      <span className="footer-note">SOFTWARE DEVELOPER · DOHA, QATAR</span>
      <span className="copyright">© {new Date().getFullYear()} MOHAMMED NASIB K N</span>
      <a className="back-to-top" href="#main">BACK TO TOP <span aria-hidden="true">↑</span></a>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
