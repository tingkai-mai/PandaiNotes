import React from "react";
import { AiOutlineHome, AiOutlineTeam, AiOutlineFolder, AiOutlinePlus, AiOutlineCalendar, AiOutlineProfile } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

// data to show the links in NavbarOverlay
export const NavbarOverlayData = [
  {
    title: "To-Do",
    icon: <AiOutlineHome />,
    link: "#todo",
  },
  {
    title: "New Note",
    icon: <AiOutlinePlus />,
    link: "#newnote",
  },
  {
    title: "Files",
    icon: <AiOutlineFolder />,
    link: "#files",
  },
  {
    title: "Community",
    icon: <AiOutlineTeam />,
    link: "#community",
  },
  {
    title: "Calendar",
    icon: <AiOutlineCalendar />,
    link: "#calendar",
  },
  {
    title: "Modules",
    icon: <AiOutlineProfile />,
    link: "#modules",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    link: "#settings",
  },
];