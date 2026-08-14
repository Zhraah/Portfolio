import React from "react";

import contactLinkActionIcon from "../../assets/figma-icons/contact-link.svg";
import { contactLinks } from "../../data/contact.js";
import Icon from "../ui/Icon.jsx";

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

export default function ContactModal({ onClose }) {
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
              <Icon src={contactLinkActionIcon} className="copy-link-icon" />
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
