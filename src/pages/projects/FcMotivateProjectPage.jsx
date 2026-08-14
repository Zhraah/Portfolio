import FcMotivateCaseStudy from "../../components/projects/case-studies/FcMotivateCaseStudy.jsx";
import useCaseStudyReveal from "../../hooks/useCaseStudyReveal.js";

export default function FcMotivateProjectPage({ onBack }) {
  useCaseStudyReveal("fc-motivate");
  return <FcMotivateCaseStudy onBack={onBack} />;
}
