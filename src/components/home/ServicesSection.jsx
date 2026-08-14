import React from "react";

import Icon from "../ui/Icon.jsx";
import { techToolPairs, whatIDoServices } from "../../data/services.js";

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
        <img
          className={[tool.invert ? "invert-icon" : "", tool.iconClass ?? ""].filter(Boolean).join(" ")}
          src={tool.asset}
          alt=""
          aria-hidden="true"
        />
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
      setPhase((current) => (current + 1) % 3);
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
        const tool = pair.tools[phase % pair.tools.length];
        return (
          <div
            className={`network-node size-${pair.size} ${pair.position.y > 70 ? "label-above" : ""}`}
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

      {[
        { x: 10, y: 50, color: "#8fd5ff" },
        { x: 36, y: 50, color: "#ff83b7" },
        { x: 64, y: 50, color: "#ffd46f" },
        { x: 90, y: 50, color: "#a98cff" },
      ].map((dot, index) => (
        <span
          className={`flow-dot dot-${index + 1}`}
          key={`${dot.x}-${dot.y}`}
          style={{ "--dot-x": `${dot.x}%`, "--dot-y": `${dot.y}%`, "--dot-color": dot.color }}
        />
      ))}
      <span className="sr-only">
        Figma, Photoshop, Illustrator, Miro, Wix, HTML, CSS, JavaScript, Notion, Maze, GitHub, ClickUp, Framer, Jira,
        VS Code, ChatGPT, Claude AI, Higgsfield, Lovable, Codex, Figma Make, and v0.
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
                <Icon src={createComponentIcon} />
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

export default WhatIDoCanvas;
