import { MenuItem } from "../interfaces";

const navLinks: MenuItem[] = [
  {
    label: "HOME",
    link: "/",
  },
  {
    label: "ABOUT US",
    submenu: [
      {
        label: "WELCOME TO AIS",
        link: "/about-us/welcome-to-ais",
      },
      {
        label: "VISION & MISSION",
        link: "/about-us/vision-mission",
      },
      {
        label: "PRINCIPAL’S NOTE",
        link: "/about-us/principals-note",
      },
      {
        label: "MANDATORY DISCLOSURE (CBSE)",
        link: "/about-us/mandatory-disclosure-cbse",
      },
    ],
  },
  {
    label: "ADMISSION",
    submenu: [
      {
        label: "ADMISSION PROCESS",
        link: "/admission/admission-process",
      },
      {
        label: "FEE STRUCTURE",
        link: "/admission/fee-structure",
      },
      {
        label: "WITHDRAWAL",
        link: "/admission/withdrawal",
      },
      {
        label: "ACADEMIC STREAMS (XI & XII)",
        link: "/admission/academic-streams-xi-xii",
      },
    ],
  },
  {
    label: "ACADEMICS",
    submenu: [
      {
        label: "FACULTY",
        link: "/academics/faculty",
      },
      {
        label: "CURRICULUM",
        link: "/academics/curriculum",
      },
      {
        label: "ACADEMIC CALENDAR & EVENTS",
        link: "/academics/academic-calendar-events",
      },
      {
        label: "AWARDS",
        link: "/academics/awards",
      },
    ],
  },
  {
    label: "FACILITIES",
    submenu: [
      {
        label: "LABORATORIES",
        link: "/facilities/laboratories",
      },
      {
        label: "SPORTS INFRASTRUCTURE",
        link: "/facilities/sports-infrastructure",
      },
      {
        label: "SCHOOL TRANSPORT",
        link: "/facilities/school-transport",
      },
      {
        label: "LIBRARY",
        link: "/facilities/library",
      },
      {
        label: "SMART CLASS",
        link: "/facilities/smart-class",
      },
    ],
  },
  {
    label: "CAREER OPPORTUNITY",
    link: "/career-opportunity",
  },
  {
    label: "CONTACT US",
    link: "/contact-us",
  },
  {
    label: "NEWS & EVENTS",
    submenu: [
      {
        label: "SCHOOL CALENDAR",
        link: "/news-events/school-calendar",
      },
      {
        label: "MEDIA COVERAGE",
        link: "/news-events/media-coverage",
      },
      {
        label: "IMAGE GALLERY",
        link: "/news-events/image-gallery",
      },
    ],
  },
  {
    label: "FEE PAYMENT",
    link: "/fee-payment",
  },
];

export default navLinks;