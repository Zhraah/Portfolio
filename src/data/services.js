import { siClaude } from "simple-icons/icons";

import traitCursorIcon from "../assets/figma-icons/cursor-magic-selection-02.svg";
import searchVisualIcon from "../assets/figma-icons/search-visual.svg";
import clickupIcon from "../assets/tech-icons/clickup.png";
import cssIcon from "../assets/tech-icons/css.png";
import figmaIcon from "../assets/tech-icons/figma.png";
import framerProvidedIcon from "../assets/tech-icons/framer-provided.png";
import githubIcon from "../assets/tech-icons/github.png";
import higgsfieldIcon from "../assets/tech-icons/higgsfield.ico";
import htmlIcon from "../assets/tech-icons/html.png";
import illustratorProvidedIcon from "../assets/tech-icons/illustrator-provided.png";
import javascriptIcon from "../assets/tech-icons/javascript.png";
import jiraIcon from "../assets/tech-icons/jira.png";
import lovableIcon from "../assets/tech-icons/lovable.ico";
import mazeIcon from "../assets/tech-icons/maze.png";
import miroIcon from "../assets/tech-icons/miro.png";
import notionIcon from "../assets/tech-icons/notion.png";
import openaiIcon from "../assets/tech-icons/openai.svg";
import photoshopProvidedIcon from "../assets/tech-icons/photoshop-provided.png";
import v0Icon from "../assets/tech-icons/v0.png";
import vscodeIcon from "../assets/tech-icons/vscode.png";
import wixIcon from "../assets/tech-icons/wix.png";

const whatIDoServices = [
  {
    id: "ux",
    heading: "UX Design",
    title: "UX Design",
    action: "View Experience",
    icon: traitCursorIcon,
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
    size: "large",
    tools: [
      { id: "figma", title: "Figma", asset: figmaIcon },
      { id: "html", title: "HTML", asset: htmlIcon },
      { id: "chatgpt", title: "ChatGPT", asset: openaiIcon, invert: true },
    ],
  },
  {
    position: { x: 36, y: 24 },
    size: "large",
    tools: [
      { id: "photoshop", title: "Photoshop", asset: photoshopProvidedIcon },
      { id: "css", title: "CSS", asset: cssIcon },
      { id: "codex", title: "Codex", asset: openaiIcon, invert: true, badge: "C" },
    ],
  },
  {
    position: { x: 64, y: 24 },
    size: "large",
    tools: [
      { id: "illustrator", title: "Illustrator", asset: illustratorProvidedIcon },
      { id: "javascript", title: "JavaScript", asset: javascriptIcon },
      { id: "higgsfield", title: "Higgsfield", asset: higgsfieldIcon },
    ],
  },
  {
    position: { x: 90, y: 24 },
    size: "large",
    tools: [
      { id: "miro", title: "Miro", asset: miroIcon },
      { id: "wix", title: "Wix", asset: wixIcon, invert: true, iconClass: "wide-tech-icon" },
      { id: "lovable", title: "Lovable", asset: lovableIcon },
    ],
  },
  {
    position: { x: 10, y: 76 },
    size: "large",
    tools: [
      { id: "notion", title: "Notion", asset: notionIcon },
      { id: "github", title: "GitHub", asset: githubIcon, invert: true },
      { id: "figma-make", title: "Figma Make", asset: figmaIcon, badge: "+" },
    ],
  },
  {
    position: { x: 36, y: 76 },
    size: "large",
    tools: [
      { id: "maze", title: "Maze", asset: mazeIcon },
      { id: "clickup", title: "ClickUp", asset: clickupIcon },
      { id: "v0", title: "v0", asset: v0Icon, invert: true },
    ],
  },
  {
    position: { x: 64, y: 76 },
    size: "large",
    tools: [
      { id: "framer", title: "Framer", asset: framerProvidedIcon, invert: true },
      { id: "jira", title: "Jira", asset: jiraIcon },
      { id: "claude", title: "Claude AI", simpleIcon: siClaude, color: "#D97757" },
    ],
  },
  {
    position: { x: 90, y: 76 },
    size: "large",
    tools: [
      { id: "vscode", title: "VS Code", asset: vscodeIcon },
    ],
  },
];

export { techToolPairs, whatIDoServices };
