import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "./components/SiteLayout.jsx";
import {
  ContactPage,
  ErpNextPage,
  ExperiencePage,
  HomePage,
  InsurancePage,
  NotFoundPage,
  ResumePage,
  SkillsPage,
} from "./pages/Pages.jsx";

function ScrollToRouteStart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("reveal-ready");
    const elements = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      document.documentElement.classList.add("reveal-ready");
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.classList.add("is-visible");
        }
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      elements.forEach((element) => observer.observe(element));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToRouteStart />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/erpnext" element={<ErpNextPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}
