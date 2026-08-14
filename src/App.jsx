import React from "react";

import MobileInspectorSheet from "./components/inspector/MobileInspectorSheet.jsx";
import RightSidebar from "./components/inspector/RightSidebar.jsx";
import LeftSidebar from "./components/layout/LeftSidebar.jsx";
import Workspace from "./components/layout/Workspace.jsx";
import ContactModal from "./components/overlays/ContactModal.jsx";
import { getSectionOffsets, menuPages } from "./config/navigation.js";

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
    if (event.target.closest?.(".profile-card, .project-card, .project-case-study, .what-card, .page-list, .selection-layer-tree, .bottom-dock, .contact-button, .contact-modal")) return;
    handleClearSelection();
  }

  return (
    <div className="app" onClick={handleAppClick}>
      <LeftSidebar
        activePage={activePage}
        openedProject={openedProject}
        selectedProfile={selectedProfile}
        selectedProject={selectedProject}
        selectedSkill={selectedSkill}
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
      {!openedProject && (selectedProfile || selectedProject || selectedSkill) ? (
        <MobileInspectorSheet
          selectedProfile={selectedProfile}
          selectedProject={selectedProject}
          selectedSkill={selectedSkill}
          onClose={handleClearSelection}
        />
      ) : null}
      {contactOpen ? <ContactModal onClose={() => setContactOpen(false)} /> : null}
    </div>
  );
}
