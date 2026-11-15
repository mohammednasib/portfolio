import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const navigation = [
  ["Home", "/"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Insurance", "/insurance"],
  ["ERPNext", "/erpnext"],
  ["Contact", "/contact"],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const location = useLocation();

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
      if (window.innerWidth > 760) setMenuOpen(false);
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
