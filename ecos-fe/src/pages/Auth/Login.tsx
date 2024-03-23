import * as React from "react";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import { checkPasswordStrength, validateEmail } from "../../global/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { selectConfigType, inputConfigType } from "../../typeDefs/formAtoms";
import APIClient from "../../api/APIClient";
import { mockUser } from "../../global/constants";

const Login = () => {
  const dispatch = useAppDispatch();
  const { mock } = useAppSelector((store) => store.app);

  const submitHandler = async (formData: formReturnTypes) => {
    const client = new APIClient(mock);

    const response = await client.request({
      requestType: "get",
      path: "user",
      payload: formData,
    });

    if (response.success) {
      dispatch(setCurrentUser(response.data));
    }
    return response.message;
  };

  const loginFormConfig = React.useMemo<(selectConfigType | inputConfigType)[]>(
    () => [
      {
        label: "Email",
        value: mock ? mockUser.email : "",
        placeHolder: "mirana@ecos.com",
        type: "email",
        StartIcon: EmailRoundedIcon,
        validator: validateEmail,
      },
      {
        label: "Password",
        value: mock ? mockUser.password : "",
        placeHolder: "Mirana#2847",
        type: "password",
        StartIcon: KeyRoundedIcon,
        validator: checkPasswordStrength,
      },
    ],
    [mock]
  );

  return (
    <GenericForm
      formFields={loginFormConfig}
      formTitle={mock ? "Mock Sign In" : "Sign In"}
      submitHandler={submitHandler}
    />
  );
};

export default Login;
