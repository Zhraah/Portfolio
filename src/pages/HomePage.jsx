import AboutSection from "../components/home/AboutSection.jsx";
import BeyondWorkSection from "../components/home/BeyondWorkSection.jsx";
import FeaturedWorkSection from "../components/home/FeaturedWorkSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";

export default function HomePage({
  aboutRevealCount,
  selectedProfile,
  selectedProject,
  selectedSkill,
  onSelectProfile,
  onSelectProject,
  onSelectSkill,
  onOpenProject,
}) {
  return (
    <>
      <HeroSection selectedProfile={selectedProfile} onSelectProfile={onSelectProfile} />
      <FeaturedWorkSection
        selectedProject={selectedProject}
        onSelectProject={onSelectProject}
        onOpenProject={onOpenProject}
      />
      <AboutSection revealCount={aboutRevealCount} />
      <ServicesSection selectedSkill={selectedSkill} onSelectSkill={onSelectSkill} />
      <BeyondWorkSection />
    </>
  );
}
