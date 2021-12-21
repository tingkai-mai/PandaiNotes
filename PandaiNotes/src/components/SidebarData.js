import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";

export const SidebarData = [
    {
        title: "To-Do",
        icon: <AiFillHome/>,
        link: "/todo",

    },
    {
        title: "Files",
        icon: <AiOutlineFolder/>,
        link: "/files",

    },
    {
        title: "Community",
        icon: <AiOutlineTeam/>,
        link: "/community",

    }
]
