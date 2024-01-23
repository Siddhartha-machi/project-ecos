export type formConfigType = {
  label: string;
  value: string;
  placeHolder: string;
  type: "text" | "email" | "number" | "password";
  error?: string;
  focus?: boolean;
  startIcon?: React.ElementType;
  validator?: (
    val: string,
    compare?: string
  ) => { valid: boolean; message: string };
};
