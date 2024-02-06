export type inputBoxProps = {
  label: string;
  value: string | number;
  type: "email" | "text" | "password" | "number";
  changeHandler: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error?: string;
  placeHolder: string;
  focus?: boolean;
  onKeyDown?: () => void;
  StartIcon?: React.ElementType;
  EndIcon?: React.ElementType;
};
