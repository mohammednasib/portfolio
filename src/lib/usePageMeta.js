import { useEffect } from "react";

export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = `${title} — Mohammed Nasib K N`;
    document.title = fullTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", fullTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", fullTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  }, [title, description]);
}
