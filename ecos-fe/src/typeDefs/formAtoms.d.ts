import { InputProps } from "@mui/material";

export type selectDataType = {
  val: string;
  Icon?: React.ElementType;
};

interface fieldMutationType {
  label: string;
  error: boolean;
  errorText?: string;
  validator?: (val: string, compare: string) => { message: string; valid: boolean };
  dependentField?: string;
}

interface selectConfigType extends SelectProps, fieldMutationType {
  value: selectDataType;
  placeHolder: selectDataType;
  options: selectDataType[];
}

interface inputConfigType extends InputProps, fieldMutationType {
  StartIcon?: React.ElementType;
}
