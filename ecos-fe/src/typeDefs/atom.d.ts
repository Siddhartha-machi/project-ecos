import { TooltipProps } from "@mui/material";
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

export type listToolTipItemType = {
  title: string;
  data: {
    label: string;
    path: string;
    Icon: React.ElementType;
  }[];
  option?: {
    Icon?: React.ElementType;
    label: string;
    action: () => void;
  };
  actions: {
    Icon: React.ElementType;
    handler: () => void;
    toolTip: string;
    color: string;
  }[];
};

export type messageToolTipProps = {
  Icon?: React.ElementType;
  data: string;
};

export interface appToolTipProps extends TooltipProps {
  variant: "simple" | "message" | "list";
  title: listToolTipItemType | string | messageToolTipProps;
}

export type dynamicTooltipBindType = {
  Tcomponent: React.ElementType;
  tProps: listToolTipItemType | { data: string } | messageToolTipProps;
};

export type sidebarItemType = {
  label: string;
  path: string;
  Icon: React.ElementType;
  children?: listToolTipItemType;
};
