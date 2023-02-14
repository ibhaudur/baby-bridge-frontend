import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
// import * as AiIcons from "react-icons/ai"

export const SidebarData = [
  {
    title: "Home",
    path: "#",
    name: "dashboard",
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#c4cdd5" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#c4cdd5" }} />,

    subNav: [],
  },
  {
    title: "Dashboard",
    path: "dashboard",
    name: "dashboard",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Database",
    path: "database",
    name: "database",
    hr: "true",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Modules",
    path: "#",
    name: "user management",
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#c4cdd5" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#c4cdd5" }} />,

    subNav: [
      // {
      //   title: "Invoice List",
      //   path: "invoicelist",
      //   icon: <BiBook style={{ color: "#c4cdd5" }} />,
      // },
    ],
  },
  {
    title: "Mimo",
    path: "mimo",
    name: "modules",
    icon: <RiIcons.RiFileGifFill className="side-icon" />,
  },
  {
    title: "Bootcamp",
    path: "bootcamp",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Fertility Clinic",
    path: "Fertility",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },{
    title: "Preganancy",
    path: "Preganancy",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Baby Vaccination",
    path: "Vaccination",
    name: "modules",
    hr: "true",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Mimo",
    path: "mimo",
    name: "modules",
    icon: <RiIcons.RiFileGifFill className="side-icon" />,
  },
  {
    title: "Bootcamp",
    path: "bootcamp",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Fertility Clinic",
    path: "Fertility",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },{
    title: "Preganancy",
    path: "Preganancy",
    name: "modules",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
  {
    title: "Baby Vaccination",
    path: "Vaccination",
    name: "modules",
    hr: "true",
    icon: <MdIcons.MdOutlineAmpStories className="side-icon" />,
  },
];
