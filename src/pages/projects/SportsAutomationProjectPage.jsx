import SportsAutomationCaseStudy from "../../components/projects/case-studies/SportsAutomationCaseStudy.jsx";
import useCaseStudyReveal from "../../hooks/useCaseStudyReveal.js";

export default function SportsAutomationProjectPage({ onBack }) {
  useCaseStudyReveal("sports-automation");
  return <SportsAutomationCaseStudy onBack={onBack} />;
}
