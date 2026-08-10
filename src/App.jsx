import React from "react";
import {
  siFigma,
  siBehance,
  siDribbble,
  siFramer,
  siGoogleanalytics,
  siInstagram,
  siJira,
  siMaze,
  siMiro,
  siNotion,
} from "simple-icons";

import ProjectCaseStudy from "./ProjectCaseStudy.jsx";

import avatar from "./assets/zhra-avatar.png";
import beyondReference from "./assets/beyond-reference.png";
import profile from "./assets/zhra-profile.png";
import fcCaseHero from "./assets/case-studies/fc-hero.webp";
import novaCaseHero from "./assets/case-studies/nova-hero.webp";
import sportsCaseHero from "./assets/case-studies/sports-hero.webp";
import bagitCover from "./assets/behance/bagit.jpg";
import dannaiCover from "./assets/behance/dannai.png";
import vizhenCover from "./assets/behance/vizhen.png";
import illustratorIcon from "./assets/tech-icons/illustrator.svg";
import higgsfieldIcon from "./assets/tech-icons/higgsfield.ico";
import lovableIcon from "./assets/tech-icons/lovable.ico";
import openaiIcon from "./assets/tech-icons/openai.svg";
import photoshopIcon from "./assets/tech-icons/photoshop.svg";
import v0Icon from "./assets/tech-icons/v0.png";
import actionsIcon from "./assets/figma-icons/actions.svg";
import addVariableIcon from "./assets/figma-icons/add-variable.svg";
import bulbOnIcon from "./assets/figma-icons/bulb-on.svg";
import contactIcon from "./assets/figma-icons/contact-01.svg";
import detailEmailIcon from "./assets/figma-icons/detail-email.png";
import detailEngineerIcon from "./assets/figma-icons/detail-engineer.png";
import detailExperienceIcon from "./assets/figma-icons/detail-experience.png";
import dropdownIcon from "./assets/figma-icons/dropdown.svg";
import fileIcon from "./assets/figma-icons/frame-2055248468.svg";
import frameIcon from "./assets/figma-icons/frame.svg";
import homeIcon from "./assets/figma-icons/home-5.svg";
import linkedinIcon from "./assets/figma-icons/linkedin.svg";
import mapbase from "./assets/figma-icons/mapbase.png";
import minimizeIcon from "./assets/figma-icons/minimize-ui.svg";
import moreActionsIcon from "./assets/figma-icons/more-actions.svg";
import pixelatedUnion from "./assets/figma-icons/pixelated-union.svg";
import projectNovaLogo from "./assets/figma-icons/project-nova-logo.png";
import removeIcon from "./assets/figma-icons/remove.svg";
import searchIcon from "./assets/figma-icons/search.svg";
import searchVisualIcon from "./assets/figma-icons/search-visual.svg";
import cursorMagicIcon from "./assets/figma-icons/cursor-magic-selection-02.svg";
import skillVectorUserIcon from "./assets/figma-icons/skill-vector-user.svg";
import vectorIcon from "./assets/figma-icons/vector.svg";

const pages = ["Index", "Work", "About me", "What I do", "Beyond Work"];
const rulers = [-1250, -1125, -1000, -875, -750, -625, -500, -375, -250, -125, 0, 125, 250, 375, 500, 625, 750, 875, 1000];
const verticalRulerStart = 750;
const verticalRulerValueStep = 100;
const verticalRulerPixelStep = 118;

const sectionOffsets = {
  Index: 0,
  Work: 840,
  "About me": 1680,
  "What I do": 2500,
  "Beyond Work": 3340,
};

const mobileSectionOffsets = {
  Index: 0,
  Work: 920,
  "About me": 2360,
  "What I do": 3460,
  "Beyond Work": 4820,
};

function getSectionOffsets() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 620px)").matches
    ? mobileSectionOffsets
    : sectionOffsets;
}

const menuPages = new Set(["Case Study", "Contact"]);

const contactLinks = [
  {
    id: "email",
    label: "zhraa.ahmadpour@gmail.com",
    asset: detailEmailIcon,
    href: "mailto:zhraa.ahmadpour@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    asset: linkedinIcon,
    href: "https://www.linkedin.com/in/zahra-ahmadpour?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    simpleIcon: siInstagram,
    href: "https://www.instagram.com/zhra.ahp?igsh=MXF1cXc2MGNldmdyZg%3D%3D&utm_source=qr",
    external: true,
  },
  {
    id: "behance",
    label: "Behance",
    simpleIcon: siBehance,
    href: "https://www.behance.net/zahra_ahmadpour",
    external: true,
  },
  {
    id: "dribbble",
    label: "Dribbble",
    simpleIcon: siDribbble,
    href: "https://dribbble.com/zhra_ah",
    external: true,
  },
];

const cvHref = "https://drive.google.com/file/d/1CQjsnCpRc98YLjF7Cxlk_DkSr52sc5AK/view?pli=1";
const behanceHref = "https://www.behance.net/zahra_ahmadpour";

const moviePlaylist = [
  { title: "Her", year: "2013", href: "https://www.imdb.com/title/tt1798709/" },
  { title: "Arrival", year: "2016", href: "https://www.imdb.com/title/tt2543164/" },
  { title: "Interstellar", year: "2014", href: "https://www.imdb.com/title/tt0816692/" },
  { title: "The Social Network", year: "2010", href: "https://www.imdb.com/title/tt1285016/" },
  { title: "Soul", year: "2020", href: "https://www.imdb.com/title/tt2948372/" },
];

const calendarWeekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addCalendarDays(date, amount) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function getFirstAvailableDate() {
  let date = addCalendarDays(new Date(), 1);
  while ([0, 6].includes(date.getDay())) date = addCalendarDays(date, 1);
  return date;
}

function buildCalendarMonth(viewDate) {
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const mondayOffset = (monthStart.getDay() + 6) % 7;
  const gridStart = addCalendarDays(monthStart, -mondayOffset);
  return Array.from({ length: 42 }, (_, index) => addCalendarDays(gridStart, index));
}

const projects = [
  {
    id: "nova",
    title: "Nova",
    edited: "Edited 4 months ago",
    preview: novaCaseHero,
    logo: projectNovaLogo,
    behance: behanceHref,
    details: {
      Industry: "SaaS Design System",
      Platform: "Mobile App",
      Year: "2023",
      Role: "Product Designer",
    },
    description:
      "Nova is a data-driven CRM platform featuring intuitive data management, interactive dashboards, and centralized access control, enabling users to efficiently manage and analyze information through seamless workflows.",
  },
  {
    id: "fc-motivate",
    title: "FC Motivate",
    edited: "Edited 2 years ago",
    preview: fcCaseHero,
    logo: null,
    behance: behanceHref,
    details: {
      Industry: "Sports Experience",
      Platform: "Mobile App",
      Year: "2024",
      Role: "Product Designer",
    },
    description:
      "FC Motivate helps athletes follow smart training sessions, track daily activity, and move through premium coaching flows with a focused mobile experience.",
  },
  {
    id: "sports-automation",
    title: "Sports Automation system",
    edited: "Edited 1 years ago",
    preview: sportsCaseHero,
    logo: null,
    behance: behanceHref,
    details: {
      Industry: "Automation",
      Platform: "Dashboard",
      Year: "2024",
      Role: "Product Designer",
    },
    description:
      "A sports operations dashboard designed to organize schedules, reports, and repetitive club workflows into a cleaner and faster management system.",
  },
  {
    id: "meeting-management",
    title: "Meeting Management System",
    edited: "Edited 1 hours ago",
    preview: null,
    logo: null,
    behance: behanceHref,
    details: {
      Industry: "Productivity",
      Platform: "Web App",
      Year: "2025",
      Role: "Product Designer",
    },
    description:
      "A meeting workspace for planning sessions, assigning actions, and keeping decisions visible across teams after every discussion.",
  },
];

const aboutTraits = [
  { title: "Detail Driven", icon: searchIcon },
  { title: "Communication", icon: contactIcon },
  { title: "Goal oriented", icon: actionsIcon },
  { title: "Lifelong Learner", icon: bulbOnIcon },
  { title: "Team Player", icon: skillVectorUserIcon },
];

const behanceCaseStudies = [
  {
    id: "dannai",
    title: "Dannai AI Chatbot",
    year: "2025",
    preview: dannaiCover,
    category: "AI Product · UX/UI",
    description: "A localized AI conversation platform shaped around accessible, focused and human-friendly flows.",
    href: "https://www.behance.net/gallery/217380391/Dannai-Ai-Chatbot",
  },
  {
    id: "bagit",
    title: "Bagit App",
    year: "2025",
    preview: bagitCover,
    category: "Mobile App · Product Design",
    description: "A retail and social shopping experience designed from product strategy through the final interface.",
    href: "https://www.behance.net/gallery/232703025/Bagit-App-UIUX-Project",
  },
  {
    id: "vizhen",
    title: "Vizhen Studio Website",
    year: "2025",
    preview: vizhenCover,
    category: "Branding · Web Design",
    description: "A bold digital presence for a creative studio, balancing visual identity with a clear web experience.",
    href: "https://www.behance.net/gallery/239614143/Vizhen-Studio-Website",
  },
];

const aboutLineCount = 2 + aboutTraits.length * 2;

const whatIDoServices = [
  {
    id: "ux",
    heading: "UX Design",
    title: "UX Design",
    action: "View Experience",
    icon: cursorMagicIcon,
    properties: [
      "User Research & Discovery",
      "Survey Design & Metrics Analysis",
      "AI-Assisted Research & Insights Generation",
      "Ux Strategy & Problem solving",
      "User flow & Information Architecture",
    ],
  },
  {
    id: "visual",
    heading: "Product & Visual Design",
    title: "Product & Visual Design",
    action: "Explore My Work",
    icon: searchVisualIcon,
    properties: [
      "wireframes & mockups",
      "Visual & Interaction Design",
      "Developer handoff & QA",
      "AI-Powered Design Workflow",
      "Design system & Style Guides",
      "AI-Powered Design Workflow",
    ],
  },
];

const techToolPairs = [
  {
    position: { x: 10, y: 24 },
    tools: [
      { id: "figma", title: "Figma", simpleIcon: siFigma, color: "#f24e1e" },
      { id: "photoshop", title: "Photoshop", asset: photoshopIcon },
    ],
  },
  {
    position: { x: 36, y: 24 },
    tools: [
      { id: "illustrator", title: "Illustrator", asset: illustratorIcon },
      { id: "miro", title: "Miro", simpleIcon: siMiro, color: "#ffd02f" },
    ],
  },
  {
    position: { x: 64, y: 24 },
    tools: [
      { id: "google-analytics", title: "Google Analytics", simpleIcon: siGoogleanalytics, color: "#f9ab00" },
      { id: "chatgpt", title: "ChatGPT", asset: openaiIcon, invert: true },
    ],
  },
  {
    position: { x: 90, y: 24 },
    tools: [
      { id: "cloud", title: "Cloud", customIcon: "cloud" },
      { id: "higgsfield", title: "Higgsfield", asset: higgsfieldIcon },
    ],
  },
  {
    position: { x: 10, y: 76 },
    tools: [
      { id: "lovable", title: "Lovable", asset: lovableIcon },
      { id: "codex", title: "Codex", asset: openaiIcon, invert: true, badge: "C" },
    ],
  },
  {
    position: { x: 36, y: 76 },
    tools: [
      { id: "figma-make", title: "Figma Make", simpleIcon: siFigma, color: "#a259ff", badge: "+" },
      { id: "v0", title: "v0", asset: v0Icon, invert: true },
    ],
  },
  {
    position: { x: 64, y: 76 },
    tools: [
      { id: "framer", title: "Framer", simpleIcon: siFramer, color: "#ffffff" },
      { id: "notion", title: "Notion", simpleIcon: siNotion, color: "#ffffff" },
    ],
  },
  {
    position: { x: 90, y: 76 },
    tools: [
      { id: "jira", title: "Jira", simpleIcon: siJira, color: "#2684ff" },
      { id: "maze", title: "Maze", simpleIcon: siMaze, color: "#ffffff" },
    ],
  },
];

function Icon({ src, alt = "", className = "" }) {
  return <img className={`figma-icon ${className}`} src={src} alt={alt} aria-hidden={alt ? undefined : true} />;
}

function ContactLinkIcon({ link }) {
  if (link.asset) {
    return <img src={link.asset} alt="" aria-hidden="true" />;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d={link.simpleIcon.path} />
    </svg>
  );
}

const projectLayerSections = {
  nova: [
    { anchor: "cover", label: "Cover" },
    { anchor: "overview", label: "Overview" },
    { anchor: "research", label: "User Research" },
    { anchor: "findings", label: "Key Findings" },
    { anchor: "testing", label: "Usability Testing" },
    { anchor: "design-system", label: "Design System" },
    { anchor: "validation", label: "Validation & QA" },
    { anchor: "outcome", label: "Final Solution" },
  ],
  "fc-motivate": [
    { anchor: "cover", label: "Cover" },
    { anchor: "overview", label: "Overview" },
    { anchor: "product", label: "Product Screens" },
  ],
  "sports-automation": [
    { anchor: "cover", label: "Cover" },
    { anchor: "overview", label: "Project Overview" },
    { anchor: "context", label: "Context & Research" },
    { anchor: "problem", label: "Problem Definition" },
    { anchor: "solution", label: "Design Solution" },
    { anchor: "validation", label: "Verification" },
    { anchor: "outcome", label: "Key Takeaways" },
  ],
  "meeting-management": [
    { anchor: "cover", label: "Cover" },
    { anchor: "overview", label: "Overview" },
  ],
};

function LeftSidebar({ activePage, openedProject, onPageChange, onOpenProject }) {
  const [activeProjectAnchor, setActiveProjectAnchor] = React.useState("cover");
  const layerSections = openedProject ? projectLayerSections[openedProject.id] ?? [] : [];

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
            Zhra's Prtfolio <Icon src={dropdownIcon} />
          </button>
          <p>Drafts</p>
        </div>
        <Icon src={minimizeIcon} />
      </header>

      <section className="pages-panel">
        <div className="panel-heading">
          <h2>Pages</h2>
          <div className="heading-actions">
            <Icon src={searchIcon} />
            <Icon src={addVariableIcon} />
          </div>
        </div>

        <nav className="page-list" aria-label="Pages">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={activePage === page ? "active" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </nav>
      </section>

      <section className={`layers-panel ${openedProject ? "has-project-layers" : ""}`}>
        <div className="panel-heading">
          <h2>Layers</h2>
          <Icon src={frameIcon} />
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
        ) : null}
      </section>
    </aside>
  );
}

const profileDetails = [
  { icon: detailExperienceIcon, text: "+4 years of experience" },
  { icon: detailEngineerIcon, text: "software engineer" },
  { icon: detailEmailIcon, text: "zhraa.ahmadpour@gmail.com" },
];

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
          <Icon src={actionsIcon} />
          <Icon src={frameIcon} />
          <Icon src={skillVectorUserIcon} />
          <Icon src={moreActionsIcon} />
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

function RightSidebar({ selectedProfile, selectedProject, selectedSkill, onOpenContact }) {
  const hasDetail = selectedProfile || selectedProject || selectedSkill;

  return (
    <aside className={`right-sidebar ${hasDetail ? "has-detail" : ""}`} aria-label="Inspector sidebar">
      <section className="profile-strip">
        <div className="profile-row">
          <button type="button" className="account-button">
            <img src={avatar} alt="Zhra avatar" />
            <Icon src={dropdownIcon} />
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
            2% <Icon src={dropdownIcon} />
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
            <Icon src={dropdownIcon} />
          </div>
          <div className="select">
            <span>PDF</span>
            <Icon src={dropdownIcon} />
          </div>
          <Icon src={moreActionsIcon} />
          <Icon src={removeIcon} />
        </div>

        <a className="export-button" href={cvHref} target="_blank" rel="noreferrer">
          Export CV
        </a>
      </section>
    </aside>
  );
}

function TopRuler() {
  return (
    <div className="top-ruler" aria-hidden="true">
      {rulers.map((item, index) => (
        <span key={`${item}-${index}`}>{item}</span>
      ))}
    </div>
  );
}

function SideRuler({ scrollTop }) {
  const completedSteps = Math.floor(scrollTop / verticalRulerPixelStep);
  const pixelShift = scrollTop % verticalRulerPixelStep;
  const firstValue = verticalRulerStart - completedSteps * verticalRulerValueStep;
  const values = Array.from({ length: 9 }, (_, index) => firstValue - index * verticalRulerValueStep);

  return (
    <div className="side-ruler" aria-hidden="true">
      <div className="side-ruler-track" style={{ "--ruler-shift": `${pixelShift}px` }}>
        {values.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function SkillPill({ icon, children, className = "" }) {
  return (
    <div className={`skill-pill ${className}`}>
      <Icon src={icon} />
      <span>{children}</span>
    </div>
  );
}

function ProfileCard({ selected, onSelect }) {
  return (
    <button
      type="button"
      className={`profile-card ${selected ? "is-selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
      aria-label="Select profile card"
    >
      <div className="profile-image-frame">
        <img src={profile} alt="Zhra portrait" />
      </div>
      <div className="available-pill">
        <span className="availability-dot" />
        <span>Available to Work</span>
      </div>
      {selected ? (
        <span className="selection-handles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
      ) : null}
    </button>
  );
}

const projectDockLabels = {
  nova: "Nova Design System",
  "fc-motivate": "FC Motivate",
  "sports-automation": "Sports Automation System",
  "meeting-management": "Meeting Dashboard",
};

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
        className={`dock-item ${activePage === "Index" ? "active" : ""}`}
        title="Home"
        onClick={() => navigateTo("Index")}
      >
        <Icon src={homeIcon} />
      </button>
      <span className="dock-chevron" aria-hidden="true">
        <Icon src={dropdownIcon} />
      </span>
      <button
        type="button"
        className={`dock-item ${activePage === "Case Study" || openedProject ? "active" : ""}`}
        title="Projects"
        onClick={() => navigateTo("Case Study")}
      >
        <Icon src={fileIcon} />
      </button>
      <button
        type="button"
        className={`dock-chevron project-menu-toggle ${projectMenuOpen ? "is-open" : ""}`}
        aria-label="Show project pages"
        aria-expanded={projectMenuOpen}
        aria-controls="project-dock-menu"
        onClick={() => setProjectMenuOpen((current) => !current)}
      >
        <Icon src={dropdownIcon} />
      </button>
      <button
        type="button"
        className={`dock-item ${activePage === "Contact" ? "active" : ""}`}
        title="Contact"
        onClick={() => navigateTo("Contact")}
      >
        <Icon src={contactIcon} />
      </button>
      <span className="dock-chevron" aria-hidden="true">
        <Icon src={dropdownIcon} />
      </span>

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

function HeroCanvas({ selectedProfile, onSelectProfile }) {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: Number((x * 2).toFixed(3)), y: Number((y * 2).toFixed(3)) });
  }

  return (
    <div
      className="canvas-stage"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ "--mx": tilt.x, "--my": tilt.y }}
    >
      <SkillPill icon={bulbOnIcon} className="innovation-pill">
        Innovation
      </SkillPill>
      <SkillPill icon={vectorIcon} className="design-pill">
        Design System
      </SkillPill>
      <SkillPill icon={actionsIcon} className="workflow-pill">
        AI Workflow
      </SkillPill>

      <section className="hero-copy" aria-label="Hero section">
        <p className="section-label">[ Hero Section' ]</p>
        <h1>
          <span>Hi <span className="wave">{"\u{1F44B}"}</span></span>
          <span>I'm Zhra</span>
          <img className="pixel-title" src={pixelatedUnion} alt="Digital Product Designer" />
        </h1>
        <p className="hero-description">
          making your world <span className="world-chip"><img src={mapbase} alt="" /></span> a pain free
          <br />
          experience meaningful interactions.
        </p>
        <p className="connect-line">-I'd love to connect :)</p>
      </section>

      <ProfileCard selected={selectedProfile} onSelect={onSelectProfile} />

      <aside className="design-postcard" aria-label="A note about Zhra's design approach">
        <span className="postcard-tape" aria-hidden="true" />
        <div className="postcard-topline">
          <span>From Zhra's desk</span>
          <i>THR · 26</i>
        </div>
        <blockquote>“Good design makes complexity feel calm.”</blockquote>
        <footer>
          <span>Design note</span>
          <strong>Clarity, with character.</strong>
        </footer>
        <span className="postcard-stamp" aria-hidden="true">Z</span>
        <span className="postcard-spark" aria-hidden="true">✦</span>
      </aside>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        <em>Scroll to explore</em>
      </div>
    </div>
  );
}

function ProjectCard({ project, selected, onSelect, onOpen }) {
  return (
    <button
      type="button"
      className={`project-card ${selected ? "is-selected" : ""}`}
      onClick={() => onSelect(project)}
      onDoubleClick={() => onOpen(project)}
      data-project-id={project.id}
      aria-pressed={selected}
    >
      <div className={`project-preview ${project.preview ? "has-image" : ""}`}>
        {project.preview ? <img src={project.preview} alt={`${project.title} preview`} /> : null}
      </div>
      <div className="project-card-footer">
        <span className="project-card-icon">
          <Icon src={vectorIcon} />
        </span>
        <span>
          <strong>{project.title}</strong>
          <em>{project.edited}</em>
        </span>
      </div>
    </button>
  );
}

function WorkCanvas({ selectedProject, onSelectProject, onOpenProject }) {
  return (
    <section className="work-stage" aria-label="Featured work">
      <header className="work-header">
        <p className="section-label work-label">[ Featured work ]</p>
        <div className="work-controls" aria-label="Work filters">
          <button type="button" className="work-filter">
            All files <Icon src={dropdownIcon} />
          </button>
          <button type="button" className="view-toggle active" title="Grid view">
            <Icon src={frameIcon} />
          </button>
          <button type="button" className="view-toggle" title="List view">
            <Icon src={actionsIcon} />
          </button>
        </div>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            selected={selectedProject?.id === project.id}
            onSelect={onSelectProject}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
}

function AboutCanvas({ revealCount }) {
  return (
    <section className="about-stage" aria-label="About me">
      <div className="about-sticky">
        <section className="about-copy" data-scroll-reveal="up">
          <p className="section-label">[ About Me ]</p>
          <h2>
            <span>Designing with</span>
            <span>
              <strong>Creativity</strong> &amp; <strong>Purpose</strong>
            </span>
          </h2>
          <p>
            I'm a Product Designer with a background in Software Engineering, focused on creating meaningful digital
            experiences across B2B, B2C, and C2C products.
          </p>
          <p>
            I combine user-centered design, strategic thinking, and technical awareness to bridge the gap between user
            needs and business goals. Working closely with developers, product managers, and stakeholders, I enjoy
            transforming complex challenges into intuitive and engaging solutions.
          </p>
          <p>
            Driven by curiosity and continuous growth, I'm always exploring new technologies, design approaches, and
            innovative ways to create products that make a lasting impact.
          </p>
        </section>

        <div
          className={`about-lines ${revealCount >= 1 ? "show-top-line" : ""} ${
            revealCount >= 2 ? "show-bottom-line" : ""
          }`}
          aria-hidden="true"
        />
        <div className="about-traits">
          {aboutTraits.map((trait, index) => {
            const leftLineStep = 3 + index * 2;
            const rightLineStep = leftLineStep + 1;
            return (
              <div
                className={`about-trait ${revealCount >= leftLineStep ? "show-left-line" : ""} ${
                  revealCount >= rightLineStep ? "show-right-line is-visible" : ""
                }`}
                key={trait.title}
              >
                <div className="about-trait-box">
                  <Icon src={trait.icon} className="about-trait-icon" />
                </div>
                <p>{trait.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactModal({ onClose }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  async function handleCopyLink() {
    try {
      await navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="contact-overlay" onClick={onClose} role="presentation">
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Contact links"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="contact-modal-header">
          <h2>Contact Me</h2>
          <div>
            <button type="button" className="copy-link-button" onClick={handleCopyLink}>
              <span className="chain-icon" aria-hidden="true" />
              {copied ? "Copied" : "Copy link"}
            </button>
            <button type="button" className="contact-close" onClick={onClose} aria-label="Close contact links">
              &times;
            </button>
          </div>
        </header>

        <div className="contact-list">
          {contactLinks.map((link) => (
            <a
              className="contact-link-row"
              href={link.href}
              key={link.id}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className={`contact-link-icon ${link.id}`}>
                <ContactLinkIcon link={link} />
              </span>
              <strong>{link.label}</strong>
              <span className="contact-arrow">&rsaquo;</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function SelectionHandles() {
  return (
    <span className="selection-handles" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function WhatCard({ service, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`what-card ${selected ? "is-selected" : ""}`}
      onClick={() => onSelect(service)}
      aria-pressed={selected}
    >
      <span className="what-icon">
        <Icon src={service.icon} />
      </span>
      <strong>{service.action}</strong>
      {selected ? <SelectionHandles /> : null}
    </button>
  );
}

function TechToolIcon({ tool }) {
  if (tool.asset) {
    return (
      <span className="simple-tech-icon">
        <img className={tool.invert ? "invert-icon" : ""} src={tool.asset} alt="" aria-hidden="true" />
        {tool.badge ? <span className="make-spark">{tool.badge}</span> : null}
      </span>
    );
  }

  if (tool.simpleIcon) {
    return (
      <span className="simple-tech-icon" style={{ color: tool.color }}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d={tool.simpleIcon.path} />
        </svg>
        {tool.badge ? <span className="make-spark">{tool.badge}</span> : null}
      </span>
    );
  }

  if (tool.customIcon === "cloud") {
    return (
      <svg className="custom-tech-icon cloud-icon" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.3 25.5h14.4a5.8 5.8 0 0 0 .5-11.6A8.8 8.8 0 0 0 7.6 12a6.8 6.8 0 0 0 1.7 13.5Z" />
      </svg>
    );
  }

  return null;
}

function TechStackNetwork() {
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setPhase((current) => (current + 1) % 2);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="tech-network" aria-label="My tech stack">
      <svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="network-base" vectorEffect="non-scaling-stroke" d="M10 24H90M10 50H90M10 76H90M10 24V76M36 24V76M64 24V76M90 24V76" />
        <path className="network-flow network-flow-one" vectorEffect="non-scaling-stroke" d="M10 24H90M90 24V76M90 76H10" />
        <path className="network-flow network-flow-two" vectorEffect="non-scaling-stroke" d="M10 76V24M36 24V76M64 76V24" />
        <path className="network-flow network-flow-three" vectorEffect="non-scaling-stroke" d="M10 50H90" />
      </svg>

      {techToolPairs.map((pair, index) => {
        const tool = pair.tools[phase];
        return (
          <div
            className="network-node"
            data-tool={tool.title}
            key={`tech-node-${index}`}
            style={{ "--node-x": `${pair.position.x}%`, "--node-y": `${pair.position.y}%` }}
            title={tool.title}
          >
            <span className="network-node-icon" key={tool.id}>
              <TechToolIcon tool={tool} />
            </span>
          </div>
        );
      })}

      {[10, 36, 64, 90].map((x, index) => (
        <span
          className={`flow-dot dot-${index + 1}`}
          key={x}
          style={{ "--dot-x": `${x}%`, "--dot-color": ["#8fd5ff", "#ff83b7", "#ffd46f", "#a98cff"][index] }}
        />
      ))}
      <span className="sr-only">
        Figma, Photoshop, Illustrator, Miro, Google Analytics, ChatGPT, Cloud, Higgsfield, Lovable, Codex, Figma Make,
        v0, Framer, Notion, Jira, and Maze.
      </span>
    </div>
  );
}

function WhatIDoCanvas({ selectedSkill, onSelectSkill }) {
  return (
    <section className="what-stage" aria-label="What I do">
      <p className="section-label" data-scroll-reveal="up">[ What I do ]</p>
      <div className="skills-block" data-scroll-reveal="up" style={{ "--reveal-delay": "70ms" }}>
        <span className="mini-label skills-label">Skills</span>
        <div className="skills-frame">
          {whatIDoServices.map((service) => (
            <section className="skill-column" key={service.id}>
              <h2>
                <Icon src={skillVectorUserIcon} />
                {service.heading}
              </h2>
              <WhatCard
                service={service}
                selected={selectedSkill?.id === service.id}
                onSelect={onSelectSkill}
              />
            </section>
          ))}
        </div>
      </div>

      <span className="mini-label experience-label" data-scroll-reveal="up">My Experience</span>
      <span className="mini-label stack-label" data-scroll-reveal="up" style={{ "--reveal-delay": "80ms" }}>My Tech Stack</span>

      <section className="experience-card" aria-label="My experience" data-scroll-reveal="left" style={{ "--reveal-delay": "100ms" }}>
        <div className="timeline-line" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="experience-list">
          <p><strong>PD</strong><span>2026 - Freelance</span></p>
          <p><strong>PD at IRISA</strong><span>2025 - On site - Full time</span></p>
          <p><strong>PD at Blockchainable</strong><span>2024 - Hybrid - Full time</span></p>
          <p><strong>WD at Adicator</strong><span>2023 - Remote - Full time</span></p>
        </div>
      </section>

      <section className="stack-card" aria-label="My tech stack" data-scroll-reveal="right" style={{ "--reveal-delay": "160ms" }}>
        <TechStackNetwork />
      </section>
    </section>
  );
}

function SpotifyMark() {
  return (
    <span className="spotify-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function BeyondCanvas() {
  return (
    <section className="beyond-stage" aria-label="Beyond Work">
      <p className="section-label" data-scroll-reveal="up">[ Beyond Work ]</p>
      <div className="beyond-heading" data-scroll-reveal="up" style={{ "--reveal-delay": "60ms" }}>
        <h2>Ideas don’t stop at the desk.</h2>
        <p>A little window into the sounds and stories that keep my creative mind moving.</p>
      </div>

      <div
        className="beyond-photo-card"
        data-scroll-reveal="left"
        style={{ backgroundImage: `url(${beyondReference})`, "--reveal-delay": "100ms" }}
        aria-label="Zhra working"
      />

      <a
        className="beyond-playlist-card spotify-playlist-card"
        href="https://open.spotify.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Spotify playlist"
        data-scroll-reveal="right"
        style={{ "--reveal-delay": "160ms" }}
      >
        <div className="spotify-card-topline">
          <SpotifyMark />
          <span>ON REPEAT</span>
        </div>
        <div className="spotify-card-copy">
          <small>Creative frequency</small>
          <strong>Focus Flow</strong>
          <p>Dreamy beats for deep work and tiny breakthroughs.</p>
        </div>
        <div className="spotify-visual" aria-hidden="true">
          <span className="spotify-disc"><i /></span>
          <span className="sound-wave"><i /><i /><i /><i /><i /></span>
        </div>
        <div className="spotify-progress" aria-hidden="true">
          <span />
        </div>
      </a>

      <section
        className="beyond-playlist-card movie-playlist-card"
        aria-label="Movie playlist"
        data-scroll-reveal="right"
        style={{ "--reveal-delay": "230ms" }}
      >
        <div className="movie-card-topline">
          <span className="imdb-mark">IMDb</span>
          <span>{moviePlaylist.length} FILMS</span>
        </div>
        <div className="movie-card-copy">
          <small>Visual bookmarks</small>
          <strong>Stories that stay</strong>
        </div>
        <div className="movie-list" aria-label="Movie links">
          {moviePlaylist.map((movie, index) => (
            <a
              href={movie.href}
              target="_blank"
              rel="noreferrer"
              className="movie-chip"
              key={movie.title}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <em>{movie.title}</em>
              <small>{movie.year} ↗</small>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

function ProjectPage({ project, onBack }) {
  if (["nova", "fc-motivate", "sports-automation"].includes(project.id)) {
    return <ProjectCaseStudy projectId={project.id} onBack={onBack} />;
  }

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
        <div className={`project-page-preview ${project.preview ? "has-image" : ""}`}>
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

function PortfolioGalleryCard({ item, kind, onOpen }) {
  const content = (
    <>
      <div className="portfolio-card-cover">
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
    <button type="button" className="portfolio-gallery-card" onClick={() => onOpen(item)}>
      {content}
    </button>
  );
}

function CaseStudyPage({ onOpenProject }) {
  const [filter, setFilter] = React.useState("projects");
  const visibleItems = filter === "projects" ? projects.slice(0, 3) : behanceCaseStudies;

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
          Projects <span>03</span>
        </button>
        <button
          type="button"
          className={filter === "case-studies" ? "is-active" : ""}
          onClick={() => setFilter("case-studies")}
          aria-pressed={filter === "case-studies"}
        >
          Case Studies <span>03</span>
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

function ContactSchedulePage() {
  const [selectedDate, setSelectedDate] = React.useState(getFirstAvailableDate);
  const [viewMonth, setViewMonth] = React.useState(
    () => new Date(getFirstAvailableDate().getFullYear(), getFirstAvailableDate().getMonth(), 1),
  );

  const today = new Date();
  const minimumDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maximumDate = addCalendarDays(minimumDate, 90);
  const calendarDays = buildCalendarMonth(viewMonth);
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(viewMonth);
  const selectedDateLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(selectedDate);
  const firstAllowedMonth = new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1);
  const lastAllowedMonth = new Date(maximumDate.getFullYear(), maximumDate.getMonth(), 1);
  const canGoPrevious = viewMonth > firstAllowedMonth;
  const canGoNext = viewMonth < lastAllowedMonth;
  const meetingSubject = encodeURIComponent(`Meeting request — ${selectedDateLabel}`);
  const meetingBody = encodeURIComponent(
    `Hi Zhra,\n\nI'd like to request a 30-minute meeting on ${selectedDateLabel}.\n\nI'm flexible about the time and happy to coordinate it with you by email.\n\nThank you!`,
  );
  const meetingHref = `mailto:zhraa.ahmadpour@gmail.com?subject=${meetingSubject}&body=${meetingBody}`;

  function changeMonth(amount) {
    setViewMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  }

  return (
    <section className="contact-page-stage booking-page" aria-label="Book a meeting">
      <header className="booking-page-header">
        <div>
          <p className="section-label">[ Contact ]</p>
          <h1>Let’s find a time<br />that works.</h1>
        </div>
        <div className="booking-intro">
          <p>Pick a day for a focused 30-minute conversation about your product, idea, or design challenge. We’ll confirm the best time by email.</p>
          <span><i /> Usually replies within 24 hours</span>
        </div>
      </header>

      <div className="booking-layout">
        <section className="booking-calendar" aria-label="Choose a meeting date">
          <div className="booking-calendar-header">
            <div>
              <small>Choose a day</small>
              <strong>{monthLabel}</strong>
            </div>
            <div className="month-controls">
              <button type="button" onClick={() => changeMonth(-1)} disabled={!canGoPrevious} aria-label="Previous month">←</button>
              <button type="button" onClick={() => changeMonth(1)} disabled={!canGoNext} aria-label="Next month">→</button>
            </div>
          </div>

          <div className="calendar-weekdays" aria-hidden="true">
            {calendarWeekdays.map((day) => <span key={day}>{day}</span>)}
          </div>

          <div className="calendar-date-grid">
            {calendarDays.map((date) => {
              const dateKey = toDateKey(date);
              const isOutsideMonth = date.getMonth() !== viewMonth.getMonth();
              const isWeekend = [0, 6].includes(date.getDay());
              const isDisabled = date < minimumDate || date > maximumDate || isWeekend || isOutsideMonth;
              const isSelected = dateKey === toDateKey(selectedDate);
              const isToday = dateKey === toDateKey(minimumDate);
              return (
                <button
                  type="button"
                  className={`${isSelected ? "is-selected" : ""} ${isOutsideMonth ? "is-outside" : ""} ${isToday ? "is-today" : ""}`}
                  onClick={() => setSelectedDate(date)}
                  disabled={isDisabled}
                  aria-label={new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date)}
                  aria-pressed={isSelected}
                  key={dateKey}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <footer className="calendar-legend">
            <span><i /> Available</span>
            <span>Available Monday–Friday</span>
          </footer>
        </section>

        <aside className="booking-details" aria-label="Meeting details">
          <div className="booking-host">
            <span className="booking-avatar"><img src={avatar} alt="Zhra Ahmadpour" /><i /></span>
            <div><small>Meeting with</small><strong>Zhra Ahmadpour</strong></div>
            <span className="duration-pill">30 min</span>
          </div>

          <div className="booking-title">
            <small>Product design chat</small>
            <h2>Your selected day</h2>
          </div>

          <div className="booking-format">
            <span className="booking-format-icon" aria-hidden="true">◷</span>
            <div>
              <strong>30-minute conversation</strong>
              <p>We’ll coordinate the best time together by email.</p>
            </div>
          </div>

          <div className="booking-summary">
            <span>Selected day</span>
            <strong>{selectedDateLabel}</strong>
            <em>Time coordinated by email</em>
          </div>

          <a className="meeting-submit refined-meeting-submit" href={meetingHref}>
            Request this day <span>↗</span>
          </a>
          <p className="booking-footnote">Opens your email with the selected date ready to send.</p>
        </aside>
      </div>

      <div className="contact-direct-line">
        <span>Prefer writing first?</span>
        <a href="mailto:zhraa.ahmadpour@gmail.com">zhraa.ahmadpour@gmail.com ↗</a>
      </div>
    </section>
  );
}

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
}) {
  const workspaceRef = React.useRef(null);
  const [aboutRevealCount, setAboutRevealCount] = React.useState(0);
  const [rulerScrollTop, setRulerScrollTop] = React.useState(0);
  const isMenuPage = menuPages.has(activePage);

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
    const revealStart = offsets["About me"] - 260;
    const revealStep = 56;
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
    <main className="workspace" ref={workspaceRef} onScroll={handleScroll}>
      <TopRuler />
      <div
        className={`canvas-scroll-space ${openedProject ? "has-project-page" : ""} ${isMenuPage ? "has-menu-page" : ""}`}
      >
        {openedProject ? (
          <ProjectPage key={openedProject.id} project={openedProject} onBack={onCloseProject} />
        ) : isMenuPage ? (
          <>
            {activePage === "Case Study" ? <CaseStudyPage onOpenProject={onOpenProject} /> : null}
            {activePage === "Contact" ? <ContactSchedulePage /> : null}
          </>
        ) : (
          <>
            <SideRuler scrollTop={rulerScrollTop} />
            <HeroCanvas selectedProfile={selectedProfile} onSelectProfile={onSelectProfile} />
            <WorkCanvas
              selectedProject={selectedProject}
              onSelectProject={onSelectProject}
              onOpenProject={onOpenProject}
            />
            <AboutCanvas revealCount={aboutRevealCount} />
            <WhatIDoCanvas selectedSkill={selectedSkill} onSelectSkill={onSelectSkill} />
            <BeyondCanvas />
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

export default function App() {
  const [activePage, setActivePage] = React.useState("Index");
  const [selectedProfile, setSelectedProfile] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedSkill, setSelectedSkill] = React.useState(null);
  const [openedProject, setOpenedProject] = React.useState(null);
  const [contactOpen, setContactOpen] = React.useState(false);

  function scrollWorkspaceTo(offset) {
    const applyScroll = () => {
      const workspace = document.querySelector(".workspace");
      if (!workspace) return;
      workspace.scrollTop = offset;
      workspace.scrollTo(0, offset);
      workspace.scrollTo({ top: offset, left: 0 });
      workspace.scrollBy(0, offset - workspace.scrollTop);
    };

    applyScroll();
    window.setTimeout(applyScroll, 0);
    window.setTimeout(applyScroll, 160);
  }

  function scrollToPage(page) {
    const offsets = getSectionOffsets();
    if (offsets[page] !== undefined) {
      scrollWorkspaceTo(offsets[page]);
    } else if (menuPages.has(page)) {
      scrollWorkspaceTo(0);
    }
  }

  function handlePageChange(page, options = {}) {
    if (!options.fromScroll) {
      setOpenedProject(null);
    }

    setActivePage(page);

    if (!options.fromScroll) {
      scrollToPage(page);
    }

    if (page === "Index") {
      setSelectedProject(null);
      setSelectedSkill(null);
      return;
    }

    setSelectedProfile(false);

    if (page !== "Work") {
      setSelectedProject(null);
    }

    if (page !== "What I do") {
      setSelectedSkill(null);
    }
  }

  function handleSelectProfile() {
    setSelectedProfile((current) => !current);
    setSelectedProject(null);
    setSelectedSkill(null);
    setOpenedProject(null);
    setActivePage("Index");
    scrollToPage("Index");
  }

  function handleSelectProject(project) {
    setSelectedProject((current) => (current?.id === project.id ? null : project));
    setSelectedProfile(false);
    setSelectedSkill(null);
  }

  function handleClearSelection() {
    setSelectedProfile(false);
    setSelectedProject(null);
    setSelectedSkill(null);
  }

  function handleSelectSkill(skill) {
    setSelectedSkill((current) => (current?.id === skill.id ? null : skill));
    setSelectedProfile(false);
    setSelectedProject(null);
  }

  function handleOpenProject(project) {
    setSelectedProject(project);
    setSelectedProfile(false);
    setSelectedSkill(null);
    setOpenedProject(project);
    setActivePage(activePage === "Case Study" ? "Case Study" : "Work");
    scrollWorkspaceTo(0);
  }

  function handleCloseProject() {
    setOpenedProject(null);
    setActivePage("Work");
    window.setTimeout(() => scrollToPage("Work"), 0);
  }

  function handleAppClick(event) {
    if (event.target.closest?.(".profile-card, .project-card, .what-card, .page-list, .bottom-dock, .contact-button, .contact-modal")) return;
    handleClearSelection();
  }

  return (
    <div className="app" onClick={handleAppClick}>
      <LeftSidebar
        activePage={activePage}
        openedProject={openedProject}
        onPageChange={handlePageChange}
        onOpenProject={handleOpenProject}
      />
      <Workspace
        activePage={activePage}
        selectedProfile={selectedProfile}
        selectedProject={selectedProject}
        selectedSkill={selectedSkill}
        openedProject={openedProject}
        onSelectProfile={handleSelectProfile}
        onSelectProject={handleSelectProject}
        onSelectSkill={handleSelectSkill}
        onOpenProject={handleOpenProject}
        onCloseProject={handleCloseProject}
        onPageChange={handlePageChange}
      />
      <RightSidebar
        selectedProfile={selectedProfile}
        selectedProject={selectedProject}
        selectedSkill={selectedSkill}
        onOpenContact={() => setContactOpen(true)}
      />
      {contactOpen ? <ContactModal onClose={() => setContactOpen(false)} /> : null}
    </div>
  );
}
