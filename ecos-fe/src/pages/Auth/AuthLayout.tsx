import * as React from "react";

import { Box, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { APP_CONSTATNTS } from "../../global/constants";
import { auth } from "../../styles/auth.s";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleMock } from "../../redux/slices/appSlice";

const AuthLayout = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mock } = useAppSelector((store) => store.app);

  const signinPath = React.useMemo(() => location === "/signin", [location]);
  const toggleFormMode = () => {
    signinPath ? navigate("/signup") : navigate("/signin");
  };

  const currentYear = new Date().getFullYear();

  const enableMock = () => {
    dispatch(toggleMock());
  };

  return (
    <Box sx={auth.container}>
      <Box sx={auth.coverSpace}>
        <Box sx={auth.formHeader}>
          <APP_CONSTATNTS.appIcon fontSize="80px" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={auth.appTitle}>{APP_CONSTATNTS.appName}</Typography>
            <Typography sx={auth.caption}>
              Your very personal headquaters
            </Typography>
          </Box>
        </Box>

        <Box sx={auth.coverContent}>
          <Typography sx={auth.welcomMessage}>
            Welcome to {APP_CONSTATNTS.appName} platform
          </Typography>

          {signinPath ? (
            <Typography sx={auth.signInMessage}>
              Sign in to access your personal space in {APP_CONSTATNTS.appName}
            </Typography>
          ) : (
            <Typography sx={auth.signInMessage}>
              Sign up to create your personal space in {APP_CONSTATNTS.appName}
            </Typography>
          )}

          <Typography sx={auth.message}>
            {APP_CONSTATNTS.appName} provides a myriad features to choose from
            and let's you add those that meets your requirements. Choose any
            feature extension you want add it and/or remove if it no longer
            fulfills your needs.
          </Typography>
        </Box>
        <Box sx={auth.footer}>
          <CopyrightIcon />
          <Typography>
            {currentYear} {APP_CONSTATNTS.appName}, All rights reserved
          </Typography>
        </Box>
      </Box>
      <Box sx={auth.content}>
        <Outlet />
        {!mock && (
          <Typography sx={auth.formToggleText}>
            {signinPath
              ? "Don't have an account ?"
              : "Already have an account ?"}
            <Typography
              variant="caption"
              sx={auth.inlineButton}
              onClick={toggleFormMode}
            >
              {signinPath ? "SignUp" : "SignIn"}
            </Typography>
            here!
          </Typography>
        )}
        <Typography sx={auth.formToggleText}>
          {mock
            ? "Switch back to "
            : "Want to know the more? Try our trial application"}
          <Typography
            variant="caption"
            sx={auth.inlineButton}
            onClick={enableMock}
          >
            {mock ? "user login" : "here!"}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLayout;
