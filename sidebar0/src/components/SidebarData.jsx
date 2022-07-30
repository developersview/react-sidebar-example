import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Mailbox",
    icon: <EmailIcon />,
    link: "/Mailbox",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/Analytics",
  },
  {
    title: "DashBoard",
    icon: <DashboardIcon />,
    link: "/Dashboard",
  },
  {
    title: "Group",
    icon: <GroupIcon />,
    link: "/Group",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/Settings",
  },
];
