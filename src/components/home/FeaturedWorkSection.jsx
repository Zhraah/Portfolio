import React from "react";

import Icon from "../ui/Icon.jsx";
import SelectionHandles from "./SelectionHandles.jsx";
import { behanceCaseStudies, projects } from "../../data/portfolio.js";

import workFilterArrowIcon from "../../assets/work-icons/filter-arrow.svg";
import workGridViewIcon from "../../assets/work-icons/grid-view.png";
import workListViewIcon from "../../assets/work-icons/list-view.svg";
import workProjectIcon from "../../assets/work-icons/project-favicon.svg";

function ProjectCard({ project, selected, onOpen, viewMode = "grid" }) {
  function handleOpen(event) {
    if (event.detail > 1) return;

    if (project.external && project.href) {
      window.open(project.href, "_blank", "noopener,noreferrer");
      return;
    }

    onOpen(project, {
      cardElement: event.currentTarget,
      sourceElement: event.currentTarget.querySelector("[data-project-thumbnail]"),
    });
  }

  if (viewMode === "list") {
    const year = Number(project.details?.Year ?? project.year);
    const yearsAgo = Number.isFinite(year) ? Math.max(0, new Date().getFullYear() - year) : null;
    const createdLabel = yearsAgo === null
      ? "—"
      : yearsAgo === 0
        ? "This year"
        : `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago`;
    const lastModifiedLabel = project.edited?.startsWith("Edited ")
      ? project.edited.replace(/^Edited\s+/, "")
      : createdLabel;

    return (
      <button
        type="button"
        className={`project-card project-list-row ${selected ? "is-selected" : ""}`}
        onClick={handleOpen}
        data-project-id={project.id}
        data-project-card={project.id}
        aria-label={`${project.external ? "Open" : "View"} ${project.title}${project.external ? " case study in a new tab" : " project"}`}
      >
        <span className="project-list-name-cell">
          <span
            className={`project-list-thumbnail ${project.preview ? "has-image" : ""}`}
            data-project-thumbnail
          >
            {project.preview ? <img src={project.preview} alt="" /> : null}
            <span className="project-list-file-icon" aria-hidden="true">
              <Icon src={workProjectIcon} />
            </span>
          </span>
          <strong>{project.title}</strong>
        </span>
        <span className="project-list-date">{lastModifiedLabel}</span>
        <span className="project-list-date">{createdLabel}</span>
        <span className="project-list-action" aria-hidden="true">
          View <span>{project.external ? "↗" : "→"}</span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`project-card ${selected ? "is-selected" : ""}`}
      onClick={handleOpen}
      data-project-id={project.id}
      data-project-card={project.id}
      aria-label={`${project.external ? "Open" : "View"} ${project.title}${project.external ? " case study in a new tab" : " project"}`}
    >
      <div className={`project-preview ${project.preview ? "has-image" : ""}`} data-project-thumbnail>
        {project.preview ? <img src={project.preview} alt={`${project.title} preview`} /> : null}
      </div>
      <div className="project-card-footer">
        <span className="project-card-icon">
          <Icon src={workProjectIcon} />
        </span>
        <span className="project-card-copy">
          <strong>{project.title}</strong>
          <em>{project.edited}</em>
        </span>
        <span className="project-card-kind" aria-hidden="true">
          View <span>{project.external ? "↗" : "→"}</span>
        </span>
      </div>
    </button>
  );
}

function WorkCanvas({ selectedProject, onOpenProject }) {
  const [filter, setFilter] = React.useState("projects");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState("grid");
  const featuredProjects = projects.slice(0, 3).map((project) => ({ ...project, workType: "projects" }));
  const featuredCaseStudies = behanceCaseStudies.map((item) => ({
    ...item,
    edited: `${item.category} / ${item.year}`,
    workType: "case-studies",
    external: true,
    logo: null,
    details: {
      Industry: item.category,
      Platform: "Behance Case Study",
      Year: item.year,
      Role: "Product Designer",
    },
  }));
  const allFeaturedWork = [...featuredProjects, ...featuredCaseStudies];
  const filterOptions = [
    { id: "all", label: "All files" },
    { id: "projects", label: "Projects" },
    { id: "case-studies", label: "Case Studies" },
  ];
  const activeFilter = filterOptions.find((option) => option.id === filter) ?? filterOptions[1];
  const visibleProjects = filter === "all"
    ? allFeaturedWork
    : allFeaturedWork.filter((project) => project.workType === filter);

  return (
    <section
      className={`work-stage ${viewMode === "grid" && visibleProjects.length > 4 ? "is-expanded-grid" : ""}`}
      aria-label="Featured work"
    >
      <header className="work-header">
        <p className="section-label work-label">[ Featured work ]</p>
        <div className="work-controls" aria-label="Work filters">
          <div
            className="work-filter-shell"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsFilterOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsFilterOpen(false);
            }}
          >
            <button
              type="button"
              className={`work-filter ${isFilterOpen ? "is-open" : ""}`}
              onClick={() => setIsFilterOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={isFilterOpen}
              aria-controls="featured-work-filter-menu"
            >
              <span>{activeFilter.label}</span>
              <Icon src={workFilterArrowIcon} className="work-filter-chevron" />
            </button>

            {isFilterOpen ? (
              <div id="featured-work-filter-menu" className="work-filter-menu" role="menu">
                {filterOptions.map((option) => {
                  const count = option.id === "all"
                    ? allFeaturedWork.length
                    : allFeaturedWork.filter((project) => project.workType === option.id).length;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={filter === option.id ? "is-active" : ""}
                      onClick={() => {
                        setFilter(option.id);
                        setIsFilterOpen(false);
                      }}
                      role="menuitemradio"
                      aria-checked={filter === option.id}
                    >
                      <span>{option.label}</span>
                      <em>{String(count).padStart(2, "0")}</em>
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="view-switch" role="group" aria-label="Work view">
            <button
              type="button"
              className={`view-toggle ${viewMode === "grid" ? "active" : ""}`}
              title="Grid view"
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              <Icon src={workGridViewIcon} />
            </button>
            <button
              type="button"
              className={`view-toggle ${viewMode === "list" ? "active" : ""}`}
              title="List view"
              aria-label="List view"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <Icon src={workListViewIcon} />
            </button>
          </div>
        </div>
      </header>

      <div className={`project-grid ${viewMode === "list" ? "is-list-view" : "is-grid-view"}`}>
        {viewMode === "list" ? (
          <div className="project-list-header" aria-hidden="true">
            <span>Name</span>
            <span>Last modified</span>
            <span>Created</span>
            <span>Open</span>
          </div>
        ) : null}
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            selected={selectedProject?.id === project.id}
            onOpen={onOpenProject}
            viewMode={viewMode}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkCanvas;
