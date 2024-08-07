import * as React from "react";

import { Box, IconButton, Paper, Typography } from "@mui/material";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { APP_CONSTATNTS, ROLES } from "../global/constants";
import { sidebar } from "../styles/layout.s";
import { AppToolTip, MenuListToolTip } from "../atoms/AppAtoms";
import { sidebarItemType } from "../typeDefs/atom";
import { resetUser } from "../redux/slices/userSlice";
import { togglePortal } from "../redux/slices/saveProtalSlice";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { role } = useAppSelector((store) => store.user.currentUser);
  const state = useAppSelector((store) => store.extension);
  const { enable } = useAppSelector((store) => store.savePortal);

  const { extensions, userExtensions } = state;

  const links = React.useMemo(() => {
    const actions: sidebarItemType[] = [
      {
        label: "Overview",
        path: "/overview",
        Icon: DashboardRoundedIcon,
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
        label: "Account",
        path: "/account",
        Icon: ManageAccountsRoundedIcon,
      },
    ];
    if (role === ROLES.admin) {
      actions.push({
        label: "Users",
        path: "/users",
        Icon: GroupRoundedIcon,
      });
    }
    return actions.concat(account);
  }, [extensions, role, navigate, userExtensions]);

  const userActions = React.useMemo(() => {
    return [
      {
        label: "Save portal",
        Icon: SupportRoundedIcon,
        active: enable,
        handler: () => dispatch(togglePortal()),
      },
      {
        label: "Settings",
        path: "/settings",
        Icon: SettingsRoundedIcon,
      },
      {
        label: "Sign out",
        Icon: LogoutRoundedIcon,
        handler: () => dispatch(resetUser()),
      },
    ];
  }, [dispatch, enable]);

  return (
    <Paper sx={sidebar.sideBar}>
      <IconButton
        itemType="icon"
        key={"logo-link"}
        sx={sidebar.logo}
        onClick={() => navigate("/")}
      >
        <APP_CONSTATNTS.appIcon />
        <Typography sx={sidebar.sidbarItemText}>
          {APP_CONSTATNTS.appName}
        </Typography>
      </IconButton>

      <Box sx={sidebar.iconsContainer}>
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
                itemType={selected ? "active" : "inactive"}
                onClick={() => navigate(link.path)}
              >
                <link.Icon />
                {/* <Typography sx={sidebar.sidbarItemText}>
                  {link.label}
                </Typography> */}
              </IconButton>
            </AppToolTip>
          );
        })}
      </Box>

      <Box sx={sidebar.userActionsContainer}>
        {userActions.map((uAction, index) => {
          const selected = uAction.active || uAction.path === location.pathname;
          return (
            <AppToolTip title={uAction.label} key={`user-action-${index}`}>
              <IconButton
                itemType={selected ? "active" : "inactive"}
                onClick={
                  uAction.handler
                    ? uAction.handler
                    : () => navigate(uAction.path)
                }
              >
                <uAction.Icon />
              </IconButton>
            </AppToolTip>
          );
        })}
      </Box>
    </Paper>
  );
};
