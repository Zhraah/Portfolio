import traitCardIndexIcon from "../assets/about-traits/card-index-dividers.png";
import traitDirectHitIcon from "../assets/about-traits/direct-hit.png";
import traitHighVoltageIcon from "../assets/about-traits/high-voltage.png";
import traitMagnifyingIcon from "../assets/about-traits/magnifying-glass.png";
import traitRocketIcon from "../assets/about-traits/rocket.png";

const aboutTraits = [
  { title: "Detail Driven", icon: traitMagnifyingIcon },
  { title: "Communication", icon: traitCardIndexIcon },
  { title: "Goal oriented", icon: traitDirectHitIcon },
  { title: "Lifelong Learner", icon: traitRocketIcon },
  { title: "Team Player", icon: traitHighVoltageIcon },
];

const aboutLineCount = 2 + aboutTraits.length * 2;

export { aboutLineCount, aboutTraits };
