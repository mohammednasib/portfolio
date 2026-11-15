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
  SkillsPage,
} from "./pages/Pages.jsx";

function ScrollToRouteStart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}
