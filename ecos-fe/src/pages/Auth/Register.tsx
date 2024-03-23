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
import APIClient from "../../api/APIClient";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = async (formData: formReturnTypes) => {
    const client = new APIClient();

    const response = await client.request({
      requestType: "get",
      path: "user",
      payload: formData,
    });

    if (response.success) {
      dispatch(setCurrentUser({ role: "admin" }));
      navigate("/personal-details");
    }
    return response.message;
  };

  const registerFormConfig: Array<selectConfigType | inputConfigType> =
    React.useMemo(
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
