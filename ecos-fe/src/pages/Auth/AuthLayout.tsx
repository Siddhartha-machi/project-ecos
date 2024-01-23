import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { APP_CONSTATNTS } from "../../global/constants";
import { auth } from "../../styles/auth";

const AuthLayout = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const signinPath = React.useMemo(() => location === "/signin", [location]);
  const toggleFormMode = () => {
    signinPath ? navigate("/signup") : navigate("/signin");
  };

  //   const switchFocus = (
  //     e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  //   ) => {
  //     if (e.key === "Enter") {
  //       let focusFieldName = "password";
  //       if (e.currentTarget.id === "password") {
  //         focusFieldName = "signin";
  //       }

  //       e.preventDefault();
  //       document.getElementById(focusFieldName)?.focus();
  //     }
  //   };

  //   const navigateToSignUp = () => {
  //     // navigate("/signup");
  //   };

  //   const runValidations = () => {
  //     let failed = false;
  //     const newState = { ...formState };
  //     if (!validateEmail(formState.email.value)) {
  //       newState.email.error = true;
  //       failed = true;
  //     }
  //     if (!checkPasswordStrength(formState.password.value)) {
  //       newState.password.error = true;
  //       failed = true;
  //     }
  //     setFormState(newState);
  //     return failed;
  //   };

  //   const onSubmitHandler = async () => {
  //     if (runValidations()) {
  //       return;
  //     }
  //     // const response = await authenticateUser({
  //     //   loading: (loadVal) => setLoading(loadVal),
  //     //   dispatch: (data) => dispatch(setCurrentUser(data)),
  //     //   data: {
  //     //     formData: {
  //     //       email: formState.email.value,
  //     //       password: formState.password.value,
  //     //     },
  //     //     type: "user-login",
  //     //   },
  //     // });
  //     // if (response?.status === 200) {
  //     //   navigate(-1);
  //     // }
  //     // setResponseError(true);
  //   };

  //   const disableSubmit = React.useMemo(() => {
  //     return loginState.email.value === "" || loginState.password.value === "";
  //   }, [loginState.email.value, loginState.password.value]);

  const currentYear = new Date().getFullYear();

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
        <Typography sx={auth.formToggleText}>
          {signinPath ? "Don't have an account ?" : "Already have an account ?"}
          <Button sx={auth.inlineButton} disableRipple onClick={toggleFormMode}>
            {signinPath ? "SignUp" : "SignIn"}
          </Button>
          here!
        </Typography>
        <Typography sx={auth.formToggleText}>
          Want to know the more? Try our trial application
          <Button
            sx={{ ...auth.inlineButton, ml: -1.2 }}
            disableRipple
            onClick={() => console.log("Trial is disabled")}
          >
            here!
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLayout;
