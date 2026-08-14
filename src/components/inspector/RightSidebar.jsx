import Icon from "../ui/Icon.jsx";
import { cvHref } from "../../data/contact.js";
import {
  ProfileInspectorDetails,
  ProjectInspectorDetails,
  SkillInspectorDetails,
} from "./InspectorDetails.jsx";

import avatar from "../../assets/profile/zhra-avatar.png";
import removeIcon from "../../assets/figma-icons/remove.svg";
import addVariableIcon from "../../assets/sidebar-icons/add-variable.svg";
import moreActionsIcon from "../../assets/sidebar-icons/more-actions.svg";
import rightDropdownIcon from "../../assets/sidebar-icons/dropdown-right.svg";

export default function RightSidebar({ selectedProfile, selectedProject, selectedSkill, onOpenContact }) {
  const hasDetail = selectedProfile || selectedProject || selectedSkill;

  return (
    <aside className={`right-sidebar ${hasDetail ? "has-detail" : ""}`} aria-label="Inspector sidebar">
      <section className="profile-strip">
        <div className="profile-row">
          <button type="button" className="account-button">
            <img src={avatar} alt="Zhra avatar" />
            <Icon src={rightDropdownIcon} />
          </button>
          <button type="button" className="contact-button" onClick={onOpenContact}>
            Contact
          </button>
        </div>

        <div className="mode-row">
          <button type="button" className="mode-tab active">
            Design
          </button>
          <button type="button" className="mode-tab">
            Prototype
          </button>
          <button type="button" className="zoom-control">
            2% <Icon src={rightDropdownIcon} />
          </button>
        </div>
      </section>

      {selectedProfile ? <ProfileInspectorDetails /> : null}
      {selectedProject ? <ProjectInspectorDetails project={selectedProject} /> : null}
      {selectedSkill ? <SkillInspectorDetails skill={selectedSkill} /> : null}

      <section className="export-panel">
        <div className="export-heading">
          <h2>Export</h2>
          <Icon src={addVariableIcon} />
        </div>

        <div className="export-controls">
          <div className="select split">
            <span>1x</span>
            <Icon src={rightDropdownIcon} />
          </div>
          <div className="select">
            <span>PDF</span>
            <Icon src={rightDropdownIcon} />
          </div>
          <div className="export-icon-control" aria-hidden="true">
            <Icon src={moreActionsIcon} />
          </div>
          <div className="export-icon-control" aria-hidden="true">
            <Icon src={removeIcon} />
          </div>
        </div>

        <a className="export-button" href={cvHref} target="_blank" rel="noreferrer">
          Export CV
        </a>
      </section>
    </aside>
  );
}
