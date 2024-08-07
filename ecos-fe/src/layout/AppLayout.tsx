import * as React from "react";

import {
  Avatar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import { Outlet, useLocation } from "react-router-dom";

import avatar from "../assets/img5.jpeg";
import { Sidebar } from "./Sidebar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { layout } from "../styles/layout.s";
import { strFormat } from "../global/helpers";
import GlobalLoader from "../atoms/GlobalLoader";
import { setSearchDisable } from "../redux/slices/appSlice";
import { customTheme } from "../global/theme";

const AppLayout = () => {
  const { localLoading, loadingLabel, disableSearch } = useAppSelector(
    (store) => store.app
  );
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((store) => store.user.currentUser);
  const { enable } = useAppSelector((store) => store.savePortal);

  const { first_name, last_name, role } = currentUser;

  React.useEffect(() => {
    const searchDisableLocations = ["/overview", "/settings", "/account"];
    if (searchDisableLocations.includes(location)) {
      dispatch(setSearchDisable(true));
    } else {
      dispatch(setSearchDisable(false));
    }
  }, [dispatch, location]);

  return (
    <ThemeProvider theme={customTheme}>
      <Backdrop sx={layout.backdrop} open={localLoading}>
        <GlobalLoader
          loadLabel={`Loading ${loadingLabel || ""} please wait...`}
          size="large"
        />
      </Backdrop>
      <Box sx={layout.container}>
        <Sidebar />
        <Box sx={layout.content}>
          <Box sx={layout.stickyHeader}>
            <InputBase
              disabled={disableSearch}
              sx={layout.globalSearch}
              placeholder="Search"
              itemType="simple"
              startAdornment={<SearchRoundedIcon sx={{ pr: 1 }} />}
              inputProps={{ "aria-label": "search" }}
            />
            <Paper sx={layout.userDetailContainer}>
              <IconButton sx={layout.notifications}>
                <Badge
                  badgeContent={234}
                  color="primary"
                  max={9}
                  sx={layout.notifyCount}
                >
                  <NotificationsRoundedIcon />
                </Badge>
              </IconButton>
              <Box sx={layout.userDetail}>
                <Typography sx={layout.username}>
                  Hey, {first_name} {last_name}
                </Typography>
                {role !== "user" && (
                  <Box sx={layout.roleWrapper}>
                    {role === "admin" ? (
                      <AdminPanelSettingsRoundedIcon fontSize="small" />
                    ) : (
                      <SupervisedUserCircleRoundedIcon fontSize="small" />
                    )}
                    <Typography sx={layout.inlineRole}>
                      {strFormat({
                        str: role as string,
                        replace: "_",
                        replacement: " ",
                      })}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
            <Avatar
              alt="user avatar"
              src={avatar}
              sx={{ width: "48px", height: "48px" }}
            />
          </Box>
          <Box sx={layout.innerContent}>
            <Outlet />
          </Box>
        </Box>
        <Paper sx={{ ...layout.savePortalContainer({ check: enable }) }} />
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
