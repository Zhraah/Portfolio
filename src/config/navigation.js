const pages = ["Index", "Work", "About me", "What I do", "Beyond Work"];
const rulers = [-1250, -1125, -1000, -875, -750, -625, -500, -375, -250, -125, 0, 125, 250, 375, 500, 625, 750, 875, 1000];
const verticalRulerStart = 750;
const verticalRulerValueStep = 100;
const verticalRulerPixelStep = 118;

const sectionOffsets = {
  Index: 0,
  Work: 840,
  "About me": 1712,
  "What I do": 2552,
  "Beyond Work": 3392,
};

const mobileSectionOffsets = {
  Index: 0,
  Work: 924,
  "About me": 1928,
  "What I do": 2842,
  "Beyond Work": 4050,
};

function getSectionOffsets() {
  if (typeof window === "undefined") return sectionOffsets;

  const canvas = document.querySelector(".canvas-scroll-space");
  const canvasRect = canvas?.getBoundingClientRect();
  const selectors = {
    Work: ".work-stage",
    "About me": ".about-stage",
    "What I do": ".what-stage",
    "Beyond Work": ".beyond-stage",
  };
  const renderedOffsets = Object.fromEntries(
    Object.entries(selectors).map(([page, selector]) => {
      const element = document.querySelector(selector);
      if (!element || !canvasRect) return [page, element?.offsetTop];
      return [page, element.getBoundingClientRect().top - canvasRect.top];
    }),
  );
  const fallbackOffsets = window.matchMedia("(max-width: 620px)").matches ? mobileSectionOffsets : sectionOffsets;
  const currentOffsets = {
    Index: 0,
    ...Object.fromEntries(
      Object.entries(renderedOffsets).map(([page, offset]) => [page, Number.isFinite(offset) ? offset : fallbackOffsets[page]]),
    ),
  };

  return currentOffsets;
}

const menuPages = new Set(["Case Study", "Contact"]);

export {
  getSectionOffsets,
  menuPages,
  mobileSectionOffsets,
  pages,
  rulers,
  sectionOffsets,
  verticalRulerPixelStep,
  verticalRulerStart,
  verticalRulerValueStep,
};
