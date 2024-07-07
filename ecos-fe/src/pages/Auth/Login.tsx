import * as React from "react";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import { checkPasswordStrength, validateEmail } from "../../global/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { selectConfigType, inputConfigType } from "../../typeDefs/formAtoms";
import { mockUser } from "../../global/constants";
import Transaction from "../../apiService/TransactionClass";

const Login = () => {
  const dispatch = useAppDispatch();
  const { mock } = useAppSelector((store) => store.app);

  const submitHandler = async (formData: formReturnTypes) => {
    const request = new Transaction();
    let errorMessage = "";
    request.mock = true;
    request.transactionType = "get&save";
    request.path = "user";
    request.addParameter("payload", formData);
    request.onSuccess = (data: unknown) => dispatch(setCurrentUser(data));
    request.onError = (message: string) => (errorMessage = message);
    await request.execute();

    if (mock) {
      request.transactionType = "modify";
      request.path = "config.mock";
      request.addParameter("data", true);
      await request.execute();
    }

    return errorMessage;
  };

  const loginFormConfig = React.useMemo<(selectConfigType | inputConfigType)[]>(
    () => [
      {
        label: "Email",
        value: mock ? mockUser.email : "",
        placeHolder: "mirana@ecos.com",
        type: "email",
        StartIcon: EmailRoundedIcon,
        initialFocused: true,
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
