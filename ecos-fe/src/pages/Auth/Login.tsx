import * as React from "react";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import { checkPasswordStrength, validateEmail } from "../../global/helpers";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { selectConfigType, inputConfigType } from "../../typeDefs/formAtoms";

const Login = () => {
  const dispatch = useAppDispatch();

  // --api conversion
  const submitHandler = async (formData: formReturnTypes) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const invalid = formData.Email !== "admin@ecos.com";
    if (invalid) {
      return "Can't login with provided credentials";
    }
    dispatch(setCurrentUser({ role: "admin", active: true }));
    return null;
  };

  const loginFormConfig: Array<selectConfigType | inputConfigType> = React.useMemo(
    () => [
      {
        label: "Email",
        value: "",
        placeHolder: "mirana@ecos.com",
        type: "email",
        focus: true,
        StartIcon: EmailRoundedIcon,
        validator: validateEmail,
      },
      {
        label: "Password",
        value: "",
        placeHolder: "mirana#2847",
        type: "password",
        StartIcon: KeyRoundedIcon,
        validator: checkPasswordStrength,
      },
    ],
    []
  );

  return (
    <GenericForm
      formFields={loginFormConfig}
      formTitle={"Sign In"}
      submitHandler={submitHandler}
    />
  );
};

export default Login;
