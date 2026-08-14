import {
  FcMotivateProjectPage,
  MeetingManagementProjectPage,
  NovaProjectPage,
  SportsAutomationProjectPage,
} from "./projects/index.js";

const projectPages = {
  nova: NovaProjectPage,
  "fc-motivate": FcMotivateProjectPage,
  "sports-automation": SportsAutomationProjectPage,
  "meeting-management": MeetingManagementProjectPage,
};

function ProjectPage({ project, onBack }) {
  const ProjectComponent = projectPages[project.id] ?? MeetingManagementProjectPage;
  return <ProjectComponent project={project} onBack={onBack} />;
}

export default ProjectPage;
