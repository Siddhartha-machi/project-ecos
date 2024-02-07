export type selectDataType = {
  val: string;
  Icon?: React.ElementType;
};

export interface genericFieldType {
  required?: boolean;
  label: string;
  initialFocused?: boolean;
  error?: string;
  validator?: (
    val: string,
    compare: string
  ) => { message: string; valid: boolean };
  dependentField?: string;
}

export interface selectConfigType extends genericFieldType {
  value: selectDataType;
  placeHolder: selectDataType;
  options: selectDataType[];
}

export interface inputConfigType extends genericFieldType {
  value: string;
  type: "text" | "email" | "number" | "password" | "date";
  placeHolder: string;
  StartIcon?: React.ElementType;
}

export interface selectFieldProps extends selectConfigType {
  changeHandler: (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => void;
}

export interface inputBoxProps extends inputConfigType {
  changeHandler: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | React.ReactNode
  ) => void;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  StartIcon?: React.ElementType;
  EndIcon?: React.ElementType;
}
