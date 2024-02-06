import React from "react";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { InputBox } from "../../atoms/formAtoms";
import { auth, login } from "../../styles/auth";
import { loginFormConfig } from "./formsConfig";
import { singleNestedCopy } from "../../global/helpers";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const [APIState, setAPIState] = React.useState({
    loading: false,
    error: "",
  });

  const [loginState, setLoginState] = React.useState(loginFormConfig);

  const disableSubmit = React.useMemo(() => {
    for (const field of loginState) {
      if (field.value === "") {
        return true;
      }
    }
    return false;
  }, [loginState]);

  const changeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
    setLoginState((prev) => {
      const newState = singleNestedCopy(prev);
      newState[index].value = e.target.value;
      newState[index].error = "";
      return newState;
    });
  };

  const submitHandler = () => {
    setAPIState((prev) => ({ ...prev, loading: true }));
    let valid = true;
    let apiError = "";
    const newState = loginState.map((field) => {
      const updatedField = { ...field };
      if (field.validator) {
        const result = field.validator(field.value);
        updatedField.error = result.message;
        valid = result.valid && valid;
      }
      return updatedField;
    });

    if (!valid) {
      setLoginState(newState);
    } else {
      console.log("form submitted");
      apiError = "";
      dispatch(setCurrentUser({ role: "admin" }));
    }
    setAPIState({ error: apiError, loading: false });
  };

  return (
    <Box sx={login.container}>
      {APIState.error.length > 0 && (
        <Typography sx={login.loginError}>
          <ErrorRoundedIcon />
          {APIState.error}
        </Typography>
      )}
      <Typography sx={auth.formTitle}>Sign In</Typography>
      {loginState.map((field, index) => (
        <InputBox
          key={`login-${field.label}`}
          label={field.label}
          value={field.value}
          type={field.type}
          focus={field.focus}
          changeHandler={(e) => changeHandler(e, index)}
          error={field.error}
          placeHolder={field.placeHolder}
          StartIcon={field.startIcon}
        />
      ))}

      <Button
        id="signin"
        fullWidth
        disabled={disableSubmit || APIState.loading}
        variant="contained"
        onClick={submitHandler}
        sx={auth.submitButton}
      >
        {APIState.loading ? (
          <CircularProgress size="1.5rem" sx={{ color: "#fff" }} />
        ) : (
          "Sign In"
        )}
      </Button>
    </Box>
  );
};

export default Login;
