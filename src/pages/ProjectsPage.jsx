import React from "react";

import { behanceCaseStudies, projects } from "../data/portfolio.js";

function PortfolioGalleryCard({ item, kind, onOpen }) {
  const content = (
    <>
      <div className="portfolio-card-cover" data-project-thumbnail>
        <img src={item.preview} alt={`${item.title} cover`} />
        <span>{kind === "project" ? "View project" : "View on Behance"} ↗</span>
      </div>
      <div className="portfolio-card-copy">
        <div>
          <small>{kind === "project" ? item.details.Industry : item.category}</small>
          <h2>{item.title}</h2>
        </div>
        <p>{item.description}</p>
        <div className="portfolio-card-meta">
          <span>{kind === "project" ? item.details.Platform : "Case Study"}</span>
          <span>{kind === "project" ? item.details.Year : item.year}</span>
        </div>
      </div>
    </>
  );

  if (kind === "case-study") {
    return (
      <a className="portfolio-gallery-card" href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="portfolio-gallery-card"
      data-project-card={item.id}
      onClick={(event) => onOpen(item, {
        cardElement: event.currentTarget,
        sourceElement: event.currentTarget.querySelector("[data-project-thumbnail]"),
      })}
    >
      {content}
    </button>
  );
}

function ProjectsPage({ onOpenProject }) {
  const [filter, setFilter] = React.useState("projects");
  const visibleItems = filter === "projects" ? projects : behanceCaseStudies;
  const projectCount = String(projects.length).padStart(2, "0");
  const caseStudyCount = String(behanceCaseStudies.length).padStart(2, "0");

  return (
    <section className="case-study-page projects-page" aria-label="Projects">
      <header className="projects-page-header">
        <div>
          <p className="section-label">[ Selected work ]</p>
          <h1>Projects with a story.</h1>
        </div>
        <p>A curated mix of product work and end-to-end case studies — from the first question to the final interface.</p>
      </header>

      <div className="project-filter" role="group" aria-label="Filter selected work">
        <button
          type="button"
          className={filter === "projects" ? "is-active" : ""}
          onClick={() => setFilter("projects")}
          aria-pressed={filter === "projects"}
        >
          Projects <span>{projectCount}</span>
        </button>
        <button
          type="button"
          className={filter === "case-studies" ? "is-active" : ""}
          onClick={() => setFilter("case-studies")}
          aria-pressed={filter === "case-studies"}
        >
          Case Studies <span>{caseStudyCount}</span>
        </button>
      </div>

      <div className="portfolio-gallery" key={filter}>
        {visibleItems.map((item) => (
          <PortfolioGalleryCard
            key={item.id}
            item={item}
            kind={filter === "projects" ? "project" : "case-study"}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
