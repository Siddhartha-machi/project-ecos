import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

import { formConfigType } from "../../typeDefs/auth";
import { checkPasswordStrength, validateEmail } from "../../global/helpers";

export const loginFormConfig: formConfigType[] = [
  {
    label: "Email",
    value: "",
    placeHolder: "mirana@ecos.com",
    type: "email",
    focus: true,
    startIcon: EmailRoundedIcon,
    validator: validateEmail,
  },
  {
    label: "Password",
    value: "",
    placeHolder: "mirana#2847",
    type: "password",
    startIcon: KeyRoundedIcon,
    validator: checkPasswordStrength,
  },
];
