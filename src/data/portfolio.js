import bagitCover from "../assets/behance/bagit.jpg";
import dannaiCover from "../assets/behance/dannai.png";
import vizhenCover from "../assets/behance/vizhen.png";
import fcCaseHero from "../assets/case-studies/fc-hero.webp";
import novaCaseHero from "../assets/case-studies/nova-hero.webp";
import sportsCaseHero from "../assets/case-studies/sports-hero.webp";
import projectNovaLogo from "../assets/figma-icons/project-nova-logo.png";
import { behanceHref } from "./contact.js";

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

const projectDockLabels = {
  nova: "Nova Design System",
  "fc-motivate": "FC Motivate",
  "sports-automation": "Sports Automation System",
  "meeting-management": "Meeting Dashboard",
};

export { behanceCaseStudies, projectDockLabels, projectLayerSections, projects };
