import React from "react";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai"
import dash from '../assets/image/Vector.png'

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaUsers, FaUserShield, FaQuestionCircle } from "react-icons/fa";

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
    icon: <AiIcons.AiOutlineDashboard className="side-icon" />,
  },
  {
    title: "Database",
    path: "dashboar",
    name: "database",
    hr: "true",
    icon: <AiIcons.AiOutlineDashboard className="side-icon" />,
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
    icon: <FaUsers className="side-icon" />,
  },
  {
    title: "Bootcamp",
    path: "bootcamp",
    name: "modules",
    icon: <FaUsers className="side-icon" />,
  },
  {
    title: "Fertility Clinic",
    path: "Fertility",
    name: "modules",
    icon: <FaUsers className="side-icon" />,
  },{
    title: "Preganancy",
    path: "Preganancy",
    name: "modules",
    icon: <FaUsers className="side-icon" />,
  },
  {
    title: "Baby Vaccination",
    path: "Vaccination",
    name: "modules",
    hr: "true",
    icon: <FaUsers className="side-icon" />,
  },
  
  
];
