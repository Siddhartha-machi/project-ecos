import * as React from "react";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";

import { useAppDispatch } from "../../redux/hooks";
import { setCurrentUser } from "../../redux/slices/userSlice";
import GenericForm from "../../atoms/GenericForm";
import { formReturnTypes } from "../../typeDefs/atom";
import { inputConfigType, selectConfigType } from "../../typeDefs/formAtoms";

const PDForm = () => {
  const dispatch = useAppDispatch();

  // --api conversion
  const submitHandler = async (formData: formReturnTypes) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const invalid = formData["Date of birth"] === "01-01-0001";
    if (invalid) {
      return "Something went wrong, please try again.";
    }
    dispatch(setCurrentUser({ role: "admin", active: true }));
    return null;
  };

  const PDFormConfig: Array<selectConfigType | inputConfigType> = React.useMemo(
    () => [
      {
        label: "Full Name",
        value: "",
        placeHolder: "Mirana Blake",
        type: "text",
        focus: true,
        StartIcon: EmailRoundedIcon,
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
      },
      {
        label: "Date of birth",
        value: "",
        placeHolder: "12/12/2012",
        type: "date",
        StartIcon: InsertInvitationRoundedIcon,
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
