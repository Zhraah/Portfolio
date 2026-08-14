import Icon from "../ui/Icon.jsx";
import { profileDetails } from "../../data/profile.js";

import addVariableIcon from "../../assets/sidebar-icons/add-variable.svg";
import createVariantIcon from "../../assets/figma-icons/create-variant.svg";
import multiEditVariantsIcon from "../../assets/figma-icons/multi-edit-variants.svg";
import selectMatchingIcon from "../../assets/figma-icons/select-matching.svg";
import skillMoreActionsIcon from "../../assets/figma-icons/skill-more-actions.svg";

function ProfileInspectorDetails() {
  return (
    <section className="profile-detail-panel" aria-label="Profile details">
      <p>
        I'm a product designer who loves solving real problems and creating experiences that people genuinely
        enjoy using.
        <br />
        I focus on turning complex ideas into simple, intuitive products and exploring how AI can make digital
        experiences smarter and more meaningful.
      </p>
      <div className="profile-facts">
        {profileDetails.map((item) => (
          <div className="profile-fact" key={item.text}>
            <img src={item.icon} alt="" />
            <strong>{item.text}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectInspectorDetails({ project }) {
  return (
    <section className="project-detail-panel" aria-label={`${project.title} project details`}>
      {project.logo ? (
        <img className="project-logo" src={project.logo} alt={`${project.title} logo`} />
      ) : (
        <div className="project-logo-text">{project.title}</div>
      )}

      <div className="project-info-card">
        {Object.entries(project.details).map(([label, value]) => (
          <div className="project-info-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <p className="project-description">{project.description}</p>
    </section>
  );
}

function SkillInspectorDetails({ skill }) {
  return (
    <section className="skill-detail-panel" aria-label={`${skill.title} details`}>
      <div className="skill-inspector-title">
        <h2>{skill.title}</h2>
        <div>
          <Icon src={multiEditVariantsIcon} />
          <Icon src={selectMatchingIcon} />
          <Icon src={createVariantIcon} />
          <Icon src={skillMoreActionsIcon} />
        </div>
      </div>

      <div className="skill-properties-heading">
        <h3>Properties</h3>
        <Icon src={addVariableIcon} />
      </div>

      <div className="skill-property-list">
        {skill.properties.map((property) => (
          <div className="skill-property" key={property}>
            <span className="diamond" />
            <strong>{property}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export { ProfileInspectorDetails, ProjectInspectorDetails, SkillInspectorDetails };
