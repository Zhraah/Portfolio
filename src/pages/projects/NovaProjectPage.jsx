import NovaCaseStudy from "../../components/projects/case-studies/NovaCaseStudy.jsx";
import useCaseStudyReveal from "../../hooks/useCaseStudyReveal.js";

export default function NovaProjectPage({ onBack }) {
  useCaseStudyReveal("nova");
  return <NovaCaseStudy onBack={onBack} />;
}
