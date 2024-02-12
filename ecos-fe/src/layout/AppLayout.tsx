import * as React from "react";

import {
  Avatar,
  Backdrop,
  Badge,
  Box,
  IconButton,
  InputBase,
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
import { layout } from "../styles/layout";
import { strFormat } from "../global/helpers";
import GlobalLoader from "../atoms/GlobalLoader";
import { setSearchDisable } from "../redux/slices/appSlice";

const AppLayout = () => {
  const { loading, loadingLabel, disableSearch } = useAppSelector(
    (store) => store.app
  );
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((store) => store.user.currentUser);
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
    <Box sx={layout.container}>
      <Sidebar />
      <Backdrop sx={{ color: "#fff", zIndex: 10000 }} open={loading}>
        <GlobalLoader
          loadLabel={`Loading ${loadingLabel} please wait...`}
        />
      </Backdrop>
      <Box sx={layout.content}>
        {!disableSearch && (
          <Box sx={layout.stickyHeader}>
            <InputBase
              sx={layout.globalSearch}
              placeholder="Search"
              startAdornment={<SearchRoundedIcon sx={{ pr: 1 }} />}
              inputProps={{ "aria-label": "search" }}
            />
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

            <Avatar alt="user avatar" src={avatar} sx={layout.avatar} />
          </Box>
        )}

        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
