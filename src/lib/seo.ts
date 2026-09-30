import { useEffect } from "react";

const SITE = "Revvo";

/** Sets the document title and description for a page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title === SITE ? SITE : `${title} · ${SITE}`;
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", document.title);
    setMeta('meta[property="og:description"]', "content", description);
  }, [title, description]);
}

/** Scroll to top on route change, or to a hash target if present. */
export function useScrollRestore(location: string) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start", behavior: "instant" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
}
