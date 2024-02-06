import * as React from "react";

import { useNavigate } from "react-router";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";

import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { inputConfigType, selectConfigType } from "../../typeDefs/formAtoms";

const PDForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // --api conversion
  const submitHandler = async (formData: formReturnTypes) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const invalid = formData.Email !== "admin@ecos.com";
    if (invalid) {
      return "Something went wrong, please try again.";
    }
    dispatch(setCurrentUser({ role: "admin" }));
    navigate("/personal-details");
    return null;
  };

  const PDFormConfig: Array<selectConfigType | inputConfigType> = React.useMemo(
    () => [
      {
        label: "Full Name",
        value: "",
        placeHolder: "Mirana",
        type: "text",
        focus: true,
        startIcon: EmailRoundedIcon,
      },
      {
        label: "Gender",
        value: { val: "Select gender" },
        placeHolder: { val: "Select gender" },
        options: [
          {
            val: "Male",
            Icon: MaleIcon,
          },
          {
            val: "Female",
            Icon: FemaleIcon,
          },
          {
            val: "Trans",
            Icon: TransgenderIcon,
          },
          {
            val: "Rather not say",
            Icon: DoDisturbAltIcon,
          },
        ],
        startIcon: EmailRoundedIcon,
      },
      {
        label: "Date of birth",
        value: "",
        placeHolder: "12/12/2012",
        type: "date",
        startIcon: KeyRoundedIcon,
      },
    ],
    []
  );

  return (
    <GenericForm
      formFields={PDFormConfig}
      submitHandler={submitHandler}
      formTitle={"Personal Details"}
    />
  );
};

export default PDForm;
