// Native smooth scroll to a section by id. Replaces the old per-click Lenis
// instances, which ran a 4s eased scroll and kept a rAF loop alive.
export const scrollToId = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
};
