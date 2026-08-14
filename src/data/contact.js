import contactBehanceIcon from "../assets/figma-icons/contact-behance.svg";
import contactDribbbleIcon from "../assets/figma-icons/contact-dribbble.svg";
import contactInstagramIcon from "../assets/figma-icons/contact-instagram.svg";
import contactLinkedinIcon from "../assets/figma-icons/contact-linkedin.svg";
import contactMailIcon from "../assets/figma-icons/contact-mail.svg";

const contactLinks = [
  {
    id: "email",
    label: "zhraa.ahmadpour@gmail.com",
    asset: contactMailIcon,
    href: "mailto:zhraa.ahmadpour@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    asset: contactLinkedinIcon,
    href: "https://www.linkedin.com/in/zahra-ahmadpour?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    asset: contactInstagramIcon,
    href: "https://www.instagram.com/zhra.ahp?igsh=MXF1cXc2MGNldmdyZg%3D%3D&utm_source=qr",
    external: true,
  },
  {
    id: "behance",
    label: "Behance",
    asset: contactBehanceIcon,
    href: "https://www.behance.net/zahra_ahmadpour",
    external: true,
  },
  {
    id: "dribbble",
    label: "Dribbble",
    asset: contactDribbbleIcon,
    href: "https://dribbble.com/zhra_ah",
    external: true,
  },
];

const cvHref = "https://drive.google.com/file/d/1CQjsnCpRc98YLjF7Cxlk_DkSr52sc5AK/view?pli=1";
const behanceHref = "https://www.behance.net/zahra_ahmadpour";

export { behanceHref, contactLinks, cvHref };
