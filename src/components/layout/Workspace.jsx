import React from "react";

import BottomDock from "./BottomDock.jsx";
import { SideRuler, TopRuler } from "./CanvasRulers.jsx";
import { getSectionOffsets, menuPages } from "../../config/navigation.js";
import { aboutLineCount } from "../../data/about.js";
import ContactSchedulePage from "../../pages/ContactSchedulePage.jsx";
import HomePage from "../../pages/HomePage.jsx";
import ProjectPage from "../../pages/ProjectPage.jsx";
import ProjectsPage from "../../pages/ProjectsPage.jsx";

function Workspace({
  activePage,
  selectedProfile,
  selectedProject,
  selectedSkill,
  openedProject,
  onSelectProfile,
  onSelectProject,
  onSelectSkill,
  onOpenProject,
  onCloseProject,
  onPageChange,
  canvasNavigation,
}) {
  const workspaceRef = React.useRef(null);
  const [aboutRevealCount, setAboutRevealCount] = React.useState(0);
  const [rulerScrollTop, setRulerScrollTop] = React.useState(0);
  const [layoutScale, setLayoutScale] = React.useState(1);
  const isMenuPage = menuPages.has(activePage);

  React.useLayoutEffect(() => {
    const workspace = workspaceRef.current;
    if (!workspace) return undefined;

    function updateLayoutScale() {
      const nextScale = window.innerWidth > 1440 ? Math.max(0.92, workspace.clientWidth / 926) : 1;
      setLayoutScale(Number(nextScale.toFixed(4)));
    }

    updateLayoutScale();
    const observer = new ResizeObserver(updateLayoutScale);
    observer.observe(workspace);
    window.addEventListener("resize", updateLayoutScale);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayoutScale);
    };
  }, []);

  React.useEffect(() => {
    const workspace = workspaceRef.current;
    if (!workspace) return;

    if (openedProject) {
      workspace.scrollTo({ top: 0, behavior: "smooth" });
    } else if (isMenuPage) {
      workspace.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isMenuPage, openedProject]);

  React.useEffect(() => {
    const workspace = workspaceRef.current;
    if (!workspace || openedProject || isMenuPage) return undefined;

    const revealElements = workspace.querySelectorAll("[data-scroll-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
      },
      { root: workspace, threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isMenuPage, openedProject]);

  function handleScroll(event) {
    if (openedProject || isMenuPage) return;
    const scrollTop = event.currentTarget.scrollTop;
    setRulerScrollTop(scrollTop);
    const offsets = getSectionOffsets();
    const isMobileLayout = window.matchMedia("(max-width: 620px)").matches;
    const revealStep = isMobileLayout ? 33 : 56;
    const firstMobileTraitTrigger = offsets["About me"] + 572 - event.currentTarget.clientHeight * 0.78;
    const revealStart = isMobileLayout
      ? firstMobileTraitTrigger - revealStep * 2
      : offsets["About me"] - 260;
    const nextRevealCount = Math.max(
      0,
      Math.min(aboutLineCount, Math.floor((scrollTop - revealStart) / revealStep) + 1),
    );
    setAboutRevealCount(nextRevealCount);

    let nextPage = "Index";
    if (scrollTop >= offsets["Beyond Work"] - 180) {
      nextPage = "Beyond Work";
    } else if (scrollTop >= offsets["What I do"] - 180) {
      nextPage = "What I do";
    } else if (scrollTop >= offsets["About me"] - 180) {
      nextPage = "About me";
    } else if (scrollTop >= offsets.Work - 180) {
      nextPage = "Work";
    }

    if (nextPage !== activePage) {
      onPageChange(nextPage, { fromScroll: true });
    }
  }

  return (
    <main
      className="workspace"
      ref={workspaceRef}
      onScroll={handleScroll}
      style={{ "--layout-scale": layoutScale }}
    >
      <TopRuler />
      <div
        className={`canvas-scroll-space ${openedProject ? "has-project-page" : ""} ${isMenuPage ? "has-menu-page" : ""}`}
      >
        {openedProject ? (
          <ProjectPage key={openedProject.id} project={openedProject} onBack={onCloseProject} />
        ) : isMenuPage ? (
          <>
            {activePage === "Case Study" ? <ProjectsPage onOpenProject={onOpenProject} /> : null}
            {activePage === "Contact" ? <ContactSchedulePage /> : null}
          </>
        ) : (
          <>
            <SideRuler scrollTop={rulerScrollTop} />
            <div
              className={`canvas-motion-layer ${canvasNavigation?.active ? "canvas-nav-active" : ""} ${
                canvasNavigation?.active ? `canvas-nav-${canvasNavigation.direction}` : ""
              }`}
            >
              <HomePage
                aboutRevealCount={aboutRevealCount}
                selectedProfile={selectedProfile}
                selectedProject={selectedProject}
                selectedSkill={selectedSkill}
                onSelectProfile={onSelectProfile}
                onSelectProject={onSelectProject}
                onSelectSkill={onSelectSkill}
                onOpenProject={onOpenProject}
              />
            </div>
          </>
        )}
      </div>
      <BottomDock
        activePage={activePage}
        openedProject={openedProject}
        onNavigate={onPageChange}
        onOpenProject={onOpenProject}
      />
    </main>
  );
}

export default Workspace;
