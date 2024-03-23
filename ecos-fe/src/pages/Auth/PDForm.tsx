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
import APIClient from "../../api/APIClient";

const PDForm = () => {
  const dispatch = useAppDispatch();

  const submitHandler = async (formData: formReturnTypes) => {
    const client = new APIClient();

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
