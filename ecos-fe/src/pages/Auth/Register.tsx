import * as React from "react";

import { useNavigate } from "react-router";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import {
  checkPassEquality,
  checkPasswordStrength,
  validateEmail,
} from "../../global/helpers";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { selectConfigType, inputConfigType } from "../../typeDefs/formAtoms";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // --api conversion
  const submitHandler = async (formData: formReturnTypes) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const invalid = formData.Email !== "admin@ecos.com";
    if (invalid) {
      return "Unable to sign you up, please try again.";
    }
    dispatch(setCurrentUser({ role: "admin" }));
    navigate("/personal-details");
    return null;
  };

  const registerFormConfig: Array<selectConfigType | inputConfigType> = React.useMemo(
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
      {
        label: "Confirm Password",
        value: "",
        CVType: true,
        placeHolder: "mirana#2847",
        type: "password",
        StartIcon: KeyRoundedIcon,
        validator: checkPassEquality,
      },
    ],
    []
  );

  return (
    <GenericForm
      formFields={registerFormConfig}
      submitHandler={submitHandler}
      formTitle={"Sign up"}
    />
  );
};

export default Register;
