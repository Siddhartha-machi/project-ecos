import { inputConfigType, selectConfigType } from "./formAtoms";

export type GLoaderProps = {
  loadLabel?: string;
};

export type formReturnTypes = {
  [key: string]: string;
};

export type genericFormProps = {
  formFields: Array<selectConfigType | inputConfigType>;
  formTitle: string;
  submitHandler: (formData: formReturnTypes) => Promise;
};
