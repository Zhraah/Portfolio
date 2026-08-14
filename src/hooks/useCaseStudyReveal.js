import React from "react";

export default function useCaseStudyReveal(pageKey) {
  React.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".project-case-study .case-reveal"));
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: document.querySelector(".workspace"),
        rootMargin: "0px 0px -8%",
        threshold: 0.08,
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pageKey]);
}
