import Icon from "../ui/Icon.jsx";
import SelectionHandles from "./SelectionHandles.jsx";

import mapbase from "../../assets/figma-icons/mapbase.png";
import pixelatedUnion from "../../assets/figma-icons/pixelated-union.svg";
import availabilityStatusIcon from "../../assets/hero-icons/availability-status.png";
import heroActionsIcon from "../../assets/hero-icons/hero-actions.svg";
import heroBulbIcon from "../../assets/hero-icons/hero-bulb.svg";
import heroDesignSystemIcon from "../../assets/hero-icons/hero-design-system.svg";
import waveHandIcon from "../../assets/hero-icons/wave-hand.png";
import profile from "../../assets/profile/zhra-profile.png";

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
        <img className="availability-dot" src={availabilityStatusIcon} alt="" />
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
      <SkillPill icon={heroBulbIcon} className="innovation-pill">
        Innovation
      </SkillPill>
      <SkillPill icon={heroDesignSystemIcon} className="design-pill">
        Design System
      </SkillPill>
      <SkillPill icon={heroActionsIcon} className="workflow-pill">
        AI Workflow
      </SkillPill>

      <section className="hero-copy" aria-label="Hero section">
        <p className="section-label">[ Hero Section' ]</p>
        <h1>
          <span>Hi <img className="wave wave-icon" src={waveHandIcon} alt="" /></span>
          <span>I'm Zhra</span>
          <img className="pixel-title" src={pixelatedUnion} alt="Digital Product Designer" />
        </h1>
        <p className="hero-description">
          making your world <span className="world-chip" aria-hidden="true">
            <span className="world-map-track">
              <img src={mapbase} alt="" />
              <img src={mapbase} alt="" />
            </span>
          </span> a pain free
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

export default HeroCanvas;
