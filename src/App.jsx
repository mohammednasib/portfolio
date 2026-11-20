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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        const timer = window.setTimeout(() => target.scrollIntoView(), 60);
        return () => window.clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
    return undefined;
    // Only route changes should reset scroll; in-page anchors scroll natively.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
