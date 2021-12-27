import React from "react";
import { AiFillHome, AiOutlineTeam, AiOutlineFolder, AiOutlinePlus, AiOutlineCalendar, AiOutlineProfile } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export const NavbarOverlayData = [
  {
    title: "To-Do",
    icon: <AiFillHome />,
    link: "#todo",
  },
  {
    title: "New Note",
    icon: <AiOutlinePlus />,
    link: "#community",
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
    link: "#community",
  },
  {
    title: "Modules",
    icon: <AiOutlineProfile />,
    link: "#community",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    link: "#community",
  },
];