import { SxProps } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import AirIcon from "@mui/icons-material/Air";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { strFormatArgsType, stylesFuncProps } from "../typeDefs/helpers";

export function createStyles<T extends Record<string, SxProps> | ((params: stylesFuncProps) => SxProps)>(styles: T) {
  return styles;
}

export const strFormat = (options: strFormatArgsType) => {
  const { str, replace, replacement } = options;

  return str.replaceAll(replace, replacement);
};

export const capFirst = (s: string) => {
  return s
    .split(" ")
    .reduce((prev, curr) => {
      prev += curr[0].toUpperCase() + curr.slice(1) + " ";
      return prev;
    }, "")
    .trimEnd();
};

// --fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const singleNestedCopy = (original: any[]) => {
  return original.map((obj) => ({ ...obj }));
};

export const validateEmail = (email: string) => {
  const valid = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false;
  if (valid) {
    return {
      valid,
      message: "",
    };
  }
  return { valid, message: "Invalid email provided." };
};

export const checkPasswordStrength = (password: string) => {
  let valid = true;
  if (password.length < 8) {
    valid = false;
  }
  let strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }

  valid = strength === 4 && valid ? true : false;
  if (valid) {
    return { valid, message: "" };
  }
  return {
    valid,
    message: "Password should be atleast 8 characters long and must contain a uppercase, lowercase, sepcial character and a number.",
  };
};

export const checkPassEquality = (val: string, compare?: string) => {
  const result = {
    valid: true,
    message: "",
  };

  if (val !== compare) {
    result.valid = false;
    result.message = "Password and compare password doesn't match.";
  }

  return result;
};

export const APIMock = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const NullOrUndefined = (value: unknown) => {
  return value === undefined || value === null;
};

export const isObject = (value: unknown) => typeof value === "object" && Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(value), Object);

export const isArray = (obj: unknown) => {
  return typeof obj === "object" && obj?.constructor === Array;
};

export const isAlpha = (str: string) => {
  return str.match(/[a-z][A-Z]/) !== null;
};

export const statusCodeToMessage = (code: number = 500, label: string = "Resource") => {
  const _config = {
    msg: "Request completed successfully",
    result: "success",
    Icon: CheckCircleIcon,
  };
  switch (code) {
    case 200:
      break;
    case 201:
      _config.msg = `${label} created successfully.`;
      _config.Icon = AddTaskIcon;
      break;
    case 204:
      _config.msg = `${label} deleted successfully.`;
      break;
    case 400:
      _config.msg = "Invalid or bad data";
      _config.result = "fail";
      break;
    case 404:
      _config.msg = `No ${label}s data found with current filters. Try changing or resetting them.`;
      _config.result = "fail";
      _config.Icon = AirIcon;
      break;
    default:
      _config.msg = "Uh oh! something went seriously wrong on our end. We'll fix this issue ASAP.";
      _config.result = "error";
      _config.Icon = ReportIcon;
  }

  return _config;
};
