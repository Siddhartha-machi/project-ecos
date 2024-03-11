import * as React from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { IoSettings } from "@react-icons/all-files/io5/IoSettings";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { CgUserList } from "@react-icons/all-files/cg/CgUserList";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { APP_CONSTATNTS, ROLES } from "../global/constants";
import { sidebar } from "../styles/layout";
import { AppToolTip, MenuListToolTip } from "../atoms/AppAtoms";
import { sidebarItemType } from "../typeDefs/atom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useAppSelector((store) => store.user.currentUser);
  const state = useAppSelector((store) => store.extension);
  const { extensions, userExtensions } = state;

  const links = React.useMemo(() => {
    const actions: sidebarItemType[] = [
      {
        label: "Overview",
        path: "/overview",
        Icon: MdDashboard,
      },
      {
        label: "Your Space",
        path: "/your-space",
        Icon: WorkspacesRoundedIcon,
        children: {
          data: userExtensions,
          title: "Your apps",
          option: {
            label: "Add app",
            action: () => navigate("/extensions"),
            Icon: AddRoundedIcon,
          },
        },
      },
      {
        label: "Extensions",
        path: "/extensions",
        Icon: ExtensionRoundedIcon,
        children: {
          title: "ECOS extensions",
          data: extensions,
        },
      },
    ];
    const account: sidebarItemType[] = [
      {
        label: "Settings",
        path: "/settings",
        Icon: IoSettings,
      },
      {
        label: "Account",
        path: "/account",
        Icon: MdAccountCircle,
      },
    ];
    if (role === ROLES.admin) {
      actions.push({
        label: "Users",
        path: "/users",
        Icon: CgUserList,
      });
    }
    return actions.concat(account);
  }, [extensions, role, navigate, userExtensions]);

  return (
    <Box sx={sidebar.sideBar}>
      <IconButton
        key={"logo-link"}
        disableRipple
        sx={sidebar.logo}
        onClick={() => navigate("/")}
      >
        <APP_CONSTATNTS.appIcon />
        <Typography sx={sidebar.sidbarItemText}>
          {APP_CONSTATNTS.appName}
        </Typography>
      </IconButton>

      <Stack sx={sidebar.iconsContainer}>
        {links.map((link, index) => {
          const selected = link.path === location.pathname;
          return (
            <AppToolTip
              title={
                link.children ? (
                  <MenuListToolTip {...link.children} />
                ) : (
                  link.label
                )
              }
              key={`action-${index}`}
            >
              <IconButton
                disableRipple
                sx={{
                  ...sidebar.sidebarItem,
                  ...(selected && sidebar.selectedItem),
                }}
                onClick={() => navigate(link.path)}
              >
                <link.Icon sx={sidebar.sidebarItemIcon} />
                <Typography sx={sidebar.sidbarItemText}>
                  {link.label}
                </Typography>
              </IconButton>
            </AppToolTip>
          );
        })}
      </Stack>
    </Box>
  );
};
