// Lightweight GA4 wrapper
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const gtagEvent = (action: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;
  const w = window as Window;
  if (typeof w.gtag === "function") {
    w.gtag("event", action, params ?? {});
  }
};

export const pageview = (path?: string) => {
  if (typeof window === "undefined") return;
  const w = window as Window;
  if (typeof w.gtag === "function") {
    w.gtag("event", "page_view", { page_path: path ?? window.location.pathname });
  }
};

export default { gtagEvent, pageview };
