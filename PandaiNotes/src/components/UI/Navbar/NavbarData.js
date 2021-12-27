import React from "react";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineSave, AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiExport } from "react-icons/bi"

export const NavbarData = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    link: "#home",
  },
  {
    title: "New Note",
    icon: <AiOutlinePlus />,
    link: "#files",
  },
  {
    title: "Open",
    icon: <AiOutlineFolderOpen />,
    link: "#community",
  },
  {
    title: "Save",
    icon: <AiOutlineSave />,
    link: "#community",
  },
  {
    title: "Export",
    icon: <BiExport />,
    link: "#community",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    link: "#community",
  },
];
