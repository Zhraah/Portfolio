import React from "react";

import {
  ProfileInspectorDetails,
  ProjectInspectorDetails,
  SkillInspectorDetails,
} from "./InspectorDetails.jsx";

export default function MobileInspectorSheet({ selectedProfile, selectedProject, selectedSkill, onClose }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const title = selectedProject?.title ?? selectedSkill?.title ?? (selectedProfile ? "Profile Card" : "Inspector");

  return (
    <div className="mobile-inspector-overlay" onClick={onClose} role="presentation">
      <section
        className="mobile-inspector-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <span className="mobile-inspector-handle" aria-hidden="true" />
        <header className="mobile-inspector-header">
          <div>
            <span>Inspector</span>
            <h2>{title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close inspector">
            &times;
          </button>
        </header>

        <div className="mobile-inspector-content">
          {selectedProfile ? <ProfileInspectorDetails /> : null}
          {selectedProject ? <ProjectInspectorDetails project={selectedProject} /> : null}
          {selectedSkill ? <SkillInspectorDetails skill={selectedSkill} /> : null}
        </div>
      </section>
    </div>
  );
}
