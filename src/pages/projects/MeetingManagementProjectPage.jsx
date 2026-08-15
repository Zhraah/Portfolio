export default function MeetingManagementProjectPage({ project, onBack }) {
  return (
    <section
      className="project-page-stage"
      id="case-cover"
      data-case-anchor="cover"
      aria-label={`${project.title} page`}
    >
      <button type="button" className="project-back" onClick={onBack}>
        Back to Work
      </button>

      <div className="project-page-hero">
        <div
          className={`project-page-preview ${project.preview ? "has-image" : ""}`}
          data-project-hero={project.id}
        >
          {project.preview ? <img src={project.preview} alt={`${project.title} preview`} /> : null}
        </div>

        <div className="project-page-copy" id="case-overview" data-case-anchor="overview">
          <p className="section-label">[ Project page ]</p>
          <h1>{project.title}</h1>
          <div className="project-page-meta">
            {Object.entries(project.details).map(([label, value]) => (
              <span key={label}>
                {label}: <strong>{value}</strong>
              </span>
            ))}
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
}
