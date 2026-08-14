import React from "react";

import Icon from "../ui/Icon.jsx";
import { pages } from "../../config/navigation.js";
import { projectDockLabels, projectLayerSections, projects } from "../../data/portfolio.js";

import createComponentIcon from "../../assets/figma-icons/create-component.svg";
import fileIcon from "../../assets/figma-icons/frame-2055248468.svg";
import frameIcon from "../../assets/figma-icons/frame.svg";
import searchIcon from "../../assets/figma-icons/search.svg";
import addVariableIcon from "../../assets/sidebar-icons/add-variable.svg";
import leftDropdownIcon from "../../assets/sidebar-icons/dropdown-left.svg";
import sidebarLayersIcon from "../../assets/sidebar-icons/layers.svg";
import minimizeIcon from "../../assets/sidebar-icons/minimize-ui.svg";

// Layers and inspector panels
function getSelectionLayerTree({ selectedProfile, selectedProject, selectedSkill }) {
  if (selectedProfile) {
    return {
      id: "profile-card",
      label: "Profile Card",
      kind: "Component",
      icon: createComponentIcon,
      children: [
        { id: "profile-image-frame", label: "Profile Image Frame", type: "frame" },
        { id: "profile-image", label: "Zhra Portrait", type: "image" },
        { id: "availability-pill", label: "Available to Work", type: "group" },
        { id: "availability-dot", label: "Status Dot", type: "ellipse" },
        { id: "availability-label", label: "Availability Label", type: "text" },
        { id: "profile-background", label: "Card Background", type: "rectangle" },
      ],
    };
  }

  if (selectedProject) {
    return {
      id: `project-${selectedProject.id}`,
      label: `${selectedProject.title} Card`,
      kind: selectedProject.workType === "case-studies" ? "Case Study" : "Project",
      icon: frameIcon,
      children: [
        { id: "project-cover", label: "Cover Image", type: "image" },
        { id: "project-content", label: "Card Content", type: "frame" },
        { id: "project-icon", label: "Project Icon", type: "component" },
        { id: "project-title", label: selectedProject.title, type: "text" },
        { id: "project-meta", label: selectedProject.edited, type: "text" },
      ],
    };
  }

  if (selectedSkill) {
    return {
      id: `skill-${selectedSkill.id}`,
      label: selectedSkill.heading,
      kind: "Component",
      icon: createComponentIcon,
      children: [
        { id: "skill-action", label: selectedSkill.action, type: "frame" },
        { id: "skill-icon", label: "Action Icon", type: "component" },
        { id: "skill-label", label: "Button Label", type: "text" },
        { id: "skill-border", label: "Dashed Border", type: "rectangle" },
      ],
    };
  }

  return null;
}

const layerTypeGlyphs = {
  component: "◇",
  ellipse: "○",
  frame: "#",
  group: "⌗",
  image: "▧",
  rectangle: "□",
  text: "T",
};

function SelectionLayerTree({ tree }) {
  const [expanded, setExpanded] = React.useState(true);
  const [activeLayer, setActiveLayer] = React.useState(tree.id);

  return (
    <div className="selection-layer-tree" role="tree" aria-label={`${tree.label} layers`}>
      <button
        type="button"
        className={`selection-layer-root ${activeLayer === tree.id ? "is-active" : ""}`}
        role="treeitem"
        aria-expanded={expanded}
        aria-selected={activeLayer === tree.id}
        onClick={() => {
          setActiveLayer(tree.id);
          setExpanded((current) => !current);
        }}
      >
        <span className={`layer-chevron ${expanded ? "is-expanded" : ""}`} aria-hidden="true">›</span>
        <Icon src={tree.icon} />
        <span className="selection-layer-name">
          <strong>{tree.label}</strong>
          <small>{tree.kind}</small>
        </span>
      </button>

      {expanded ? (
        <div className="selection-layer-children" role="group">
          {tree.children.map((layer) => (
            <button
              type="button"
              className={activeLayer === layer.id ? "is-active" : ""}
              role="treeitem"
              aria-selected={activeLayer === layer.id}
              onClick={() => setActiveLayer(layer.id)}
              key={layer.id}
            >
              <span className={`selection-layer-glyph is-${layer.type}`} aria-hidden="true">
                {layerTypeGlyphs[layer.type] ?? "◇"}
              </span>
              <span>{layer.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function LeftSidebar({
  activePage,
  openedProject,
  selectedProfile,
  selectedProject,
  selectedSkill,
  onPageChange,
  onOpenProject,
}) {
  const [mobilePagesOpen, setMobilePagesOpen] = React.useState(false);
  const pagesPanelRef = React.useRef(null);
  const [activeProjectAnchor, setActiveProjectAnchor] = React.useState("cover");
  const layerSections = openedProject ? projectLayerSections[openedProject.id] ?? [] : [];
  const selectionLayerTree = getSelectionLayerTree({ selectedProfile, selectedProject, selectedSkill });

  React.useEffect(() => {
    setMobilePagesOpen(false);
  }, [activePage, openedProject]);

  React.useEffect(() => {
    if (!mobilePagesOpen) return undefined;

    function handlePointerDown(event) {
      if (!pagesPanelRef.current?.contains(event.target)) setMobilePagesOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") setMobilePagesOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobilePagesOpen]);

  React.useEffect(() => {
    if (!openedProject) return undefined;

    setActiveProjectAnchor("cover");
    const workspace = document.querySelector(".workspace");
    const targets = layerSections
      .map(({ anchor }) => document.querySelector(`[data-case-anchor="${anchor}"]`))
      .filter(Boolean);

    if (!workspace || !targets.length || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];
        if (visibleEntry?.target.dataset.caseAnchor) {
          setActiveProjectAnchor(visibleEntry.target.dataset.caseAnchor);
        }
      },
      { root: workspace, rootMargin: "-12% 0px -68% 0px", threshold: [0, 0.12] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [openedProject]);

  function scrollToProjectSection(anchor) {
    const target = document.querySelector(`[data-case-anchor="${anchor}"]`);
    if (!target) return;
    setActiveProjectAnchor(anchor);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside className="left-sidebar" aria-label="Portfolio sidebar">
      <header className="file-header">
        <div>
          <button type="button" className="file-title">
            Zhra's Prtfolio <Icon src={leftDropdownIcon} />
          </button>
          <p>Drafts</p>
        </div>
        <Icon src={minimizeIcon} />
      </header>

      <section className="pages-panel" ref={pagesPanelRef}>
        <div className="panel-heading">
          <h2>Pages</h2>
          <div className="heading-actions">
            <Icon src={searchIcon} />
            <Icon src={addVariableIcon} />
          </div>
        </div>

        <button
          type="button"
          className={`mobile-pages-toggle ${mobilePagesOpen ? "is-open" : ""}`}
          aria-label="Open page sections"
          aria-expanded={mobilePagesOpen}
          aria-controls="mobile-page-list"
          onClick={() => setMobilePagesOpen((current) => !current)}
        >
          <span className="hamburger-lines" aria-hidden="true"><i /><i /><i /></span>
          <span>{pages.includes(activePage) ? activePage : "Explore"}</span>
        </button>

        <nav
          className={`page-list ${mobilePagesOpen ? "is-mobile-open" : ""}`}
          id="mobile-page-list"
          aria-label="Pages"
        >
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={activePage === page ? "active" : ""}
              onClick={() => {
                setMobilePagesOpen(false);
                onPageChange(page);
              }}
            >
              {page}
            </button>
          ))}
        </nav>
      </section>

      <section className={`layers-panel ${openedProject || selectionLayerTree ? "has-project-layers" : ""}`}>
        <div className="panel-heading">
          <h2>Layers</h2>
          <Icon src={sidebarLayersIcon} />
        </div>

        {openedProject ? (
          <nav className="project-layer-tree" aria-label={`${openedProject.title} case study sections`}>
            <button
              type="button"
              className="project-layer-root"
              onClick={() => scrollToProjectSection("cover")}
            >
              <span className="layer-disclosure" aria-hidden="true">⌄</span>
              <Icon src={fileIcon} />
              <span>
                <strong>{projectDockLabels[openedProject.id] ?? openedProject.title}</strong>
                <small>Case study</small>
              </span>
            </button>

            <div className="project-outline-list">
              {layerSections.map((section, index) => (
                <button
                  type="button"
                  className={activeProjectAnchor === section.anchor ? "is-active" : ""}
                  aria-current={activeProjectAnchor === section.anchor ? "location" : undefined}
                  onClick={() => scrollToProjectSection(section.anchor)}
                  key={section.anchor}
                >
                  <span className="layer-node" aria-hidden="true">{index === 0 ? "⌂" : "#"}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>

            <div className="project-layer-divider" />
            <p className="project-layer-caption">Project pages</p>
            <div className="project-layer-switcher">
              {projects.map((project) => (
                <button
                  type="button"
                  className={openedProject.id === project.id ? "is-current" : ""}
                  onClick={() => onOpenProject(project)}
                  key={project.id}
                >
                  <span aria-hidden="true">{openedProject.id === project.id ? "✓" : "◇"}</span>
                  <span>{projectDockLabels[project.id] ?? project.title}</span>
                </button>
              ))}
            </div>
          </nav>
        ) : selectionLayerTree ? (
          <SelectionLayerTree key={selectionLayerTree.id} tree={selectionLayerTree} />
        ) : (
          <p className="layers-empty-state">Select an element to inspect its layers.</p>
        )}
      </section>
    </aside>
  );
}

export default LeftSidebar;
