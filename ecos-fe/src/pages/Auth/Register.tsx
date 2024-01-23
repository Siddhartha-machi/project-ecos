import React from "react";

import { Typography, CircularProgress, Button, Box } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { InputBox } from "../../atoms/formAtoms";
import { login, auth } from "../../styles/auth";

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const [loginState, setLoginState] = React.useState({
    formError: "",
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const disableSubmit = React.useMemo(() => {
    return loginState.email.value === "" || loginState.password.value === "";
  }, [loginState.email.value, loginState.password.value]);

  return (
    <Box sx={login.container}>
      <Typography sx={auth.formTitle}>Sign Up</Typography>
      {loginState.formError.length > 0 && (
        <Typography>
          <ErrorRoundedIcon />
          Invalid credentials
        </Typography>
      )}
      <InputBox
        key={"register-email"}
        label="Email"
        value={loginState.email.value}
        type="email"
        focus
        changeHandler={() => {}}
        error={loginState.email.error}
        placeHolder="mirana@ecos.com"
        StartIcon={EmailRoundedIcon}
      />
      <InputBox
        key={"register-pass"}
        label="Password"
        value={loginState.password.value}
        type="password"
        changeHandler={() => {}}
        error={loginState.password.error}
        placeHolder="Mirana@8263"
        StartIcon={KeyRoundedIcon}
      />
      <InputBox
        key={"register-cpass"}
        label="Confirm Password"
        value={loginState.password.value}
        type="password"
        changeHandler={() => {}}
        error={loginState.password.error}
        placeHolder="Mirana@8263"
        StartIcon={KeyRoundedIcon}
      />
      <Button
        id="next"
        fullWidth
        disabled={disableSubmit || loading}
        variant="contained"
        // onClick={onSubmitHandler}
        sx={auth.submitButton}
      >
        {loading ? (
          <CircularProgress size="1.5rem" sx={{ color: "#fff" }} />
        ) : (
          "Next"
        )}
      </Button>
    </Box>
  );
};

export default Register;
