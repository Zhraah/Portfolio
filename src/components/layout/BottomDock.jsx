import React from "react";

import Icon from "../ui/Icon.jsx";
import { pages } from "../../config/navigation.js";
import { projectDockLabels, projects } from "../../data/portfolio.js";

import dockContactIcon from "../../assets/dock-icons/dock-contact.svg";
import dockFileIcon from "../../assets/dock-icons/dock-file.svg";
import dockHomeIcon from "../../assets/dock-icons/dock-home.svg";
import dockProjectChevronIcon from "../../assets/dock-icons/dock-project-chevron.svg";

function BottomDock({ activePage, openedProject, onNavigate, onOpenProject }) {
  const [projectMenuOpen, setProjectMenuOpen] = React.useState(false);
  const dockRef = React.useRef(null);

  React.useEffect(() => {
    if (!projectMenuOpen) return undefined;

    function handlePointerDown(event) {
      if (!dockRef.current?.contains(event.target)) setProjectMenuOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setProjectMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [projectMenuOpen]);

  function navigateTo(page) {
    setProjectMenuOpen(false);
    onNavigate(page);
  }

  function openProject(project) {
    setProjectMenuOpen(false);
    onOpenProject(project);
  }

  return (
    <nav className="bottom-dock" aria-label="Portfolio navigation" ref={dockRef}>
      <button
        type="button"
        className={`dock-item ${pages.includes(activePage) ? "active" : ""}`}
        title="Home"
        onClick={() => navigateTo("Index")}
      >
        <Icon src={dockHomeIcon} className="dock-home-icon" />
      </button>
      <span className="dock-project-group">
        <button
          type="button"
          className={`dock-item ${activePage === "Case Study" || openedProject ? "active" : ""}`}
          title="Projects"
          onClick={() => navigateTo("Case Study")}
        >
          <Icon src={dockFileIcon} className="dock-file-icon" />
        </button>
        <button
          type="button"
          className={`dock-chevron project-menu-toggle ${projectMenuOpen ? "is-open" : ""}`}
          aria-label="Show project pages"
          aria-expanded={projectMenuOpen}
          aria-controls="project-dock-menu"
          onClick={() => setProjectMenuOpen((current) => !current)}
        >
          <Icon src={dockProjectChevronIcon} className="dock-chevron-icon" />
        </button>
      </span>
      <button
        type="button"
        className={`dock-item ${activePage === "Contact" ? "active" : ""}`}
        title="Contact"
        onClick={() => navigateTo("Contact")}
      >
        <Icon src={dockContactIcon} className="dock-contact-icon" />
      </button>

      {projectMenuOpen ? (
        <div className="project-dock-menu" id="project-dock-menu" role="menu" aria-label="Project pages">
          {projects.map((project) => {
            const isCurrent = openedProject?.id === project.id;
            return (
              <button
                type="button"
                className={isCurrent ? "is-current" : ""}
                role="menuitem"
                onClick={() => openProject(project)}
                key={project.id}
              >
                <span className="project-menu-check" aria-hidden="true">{isCurrent ? "✓" : ""}</span>
                <span>{projectDockLabels[project.id] ?? project.title}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}

export default BottomDock;
