import * as React from "react";

import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { GiBookshelf } from "@react-icons/all-files/gi/GiBookshelf";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { IoSettings } from "@react-icons/all-files/io5/IoSettings";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { CgUserList } from "@react-icons/all-files/cg/CgUserList";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { APP_CONSTATNTS, ROLES } from "../global/constants";
import { sidebar } from "../styles/layout";
import { AppToolTip } from "../atoms/AppAtoms";
import { sidebarItemType } from "../typeDefs/atom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useAppSelector((store) => store.user.currentUser);

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
          data: [],
          title: "Your apps",
          option: {
            label: "Add app",
            action: () => navigate("/extensions"),
            Icon: AddRoundedIcon,
          },
          actions: [
            {
              Icon: RemoveCircleRoundedIcon,
              handler: () => {},
              toolTip: "Remove extension",
              color: "error.dark",
            },
          ],
        },
      },
      {
        label: "Extensions",
        path: "/extensions",
        Icon: ExtensionRoundedIcon,
        children: {
          title: "ECOS extensions",
          actions: [
            {
              Icon: RemoveCircleRoundedIcon,
              handler: () => {},
              toolTip: "Remove extension",
              color: "error.dark",
            },
            {
              Icon: DeleteIcon,
              handler: () => {},
              toolTip: "Delete extension",
              color: "error.dark",
            },
            {
              Icon: AddCircleRoundedIcon,
              handler: () => {},
              toolTip: "Add extension",
              color: "primary.dark",
            },
          ],
          data: [
            {
              label: "Your Space 1",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 1",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
            {
              label: "Your Space 2",
              path: "/your-space",
              Icon: GiBookshelf,
            },
          ],
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
    return { actions, account };
  }, [role, navigate]);

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
        {links.actions.map((link, index) => {
          const selected = link.path === location.pathname;
          return (
            <AppToolTip
              variant={link.children ? "list" : "simple"}
              title={link.children || link.label}
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
        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.5)" }} />

        {links.account.map((link, index) => {
          const selected = link.path === location.pathname;
          return (
            <AppToolTip
              variant={
                link.children
                  ? link.children.data.length > 0
                    ? "list"
                    : "message"
                  : "simple"
              }
              title={link.children || link.label}
              key={`account-${index}`}
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
