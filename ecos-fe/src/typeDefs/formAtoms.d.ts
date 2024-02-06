export type selectDataType = {
  val: string | number;
  Icon?: React.ElementType;
};

export interface selectConfigType {
  label: string;
  value: selectDataType;
  placeHolder: selectDataType;
  options: selectDataType[];
  StartIcon?: React.ElementType;
}

export interface inputConfigType {
  label: string;
  value: string | number;
  type: "text" | "email" | "number" | "password" | "date";
  placeHolder: string;
  error?: string;
  initialFocused?: boolean;
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
