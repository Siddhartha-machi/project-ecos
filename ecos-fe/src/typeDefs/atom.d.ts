import { inputConfigType, selectConfigType } from "./formAtoms";
import { extensionType } from "./extension";
import { DividerProps, IconButtonProps, SxProps, TooltipProps } from "@mui/material";

export type GLoaderProps = {
  loadLabel?: string;
  size?: "small" | "medium" | "large";
};

export type formReturnTypes = {
  [key: string]: string;
};

export type genericFormProps = {
  formFields: Array<selectConfigType | inputConfigType>;
  submitHandler: (formData: formReturnTypes) => Promise<string>;
  formTitle?: string;
  submitButtonText?: string;
  formContainerSx?: SxProps;
  formTitleSx?: SxProps;
};

export interface eActionType {
  value: boolean;
  Icon: React.ElementType;
  handler: () => void;
  color: string;
  toolTip: string;
}

export interface eActionsType {
  remove?: eActionType;
  disable?: eActionType;
  enable?: eActionType;
  add?: eActionType;
}

export interface listToolTipItemType {
  title: string;
  data: extensionType[] | Partial<extensionType>[];
  option?: {
    Icon?: React.ElementType;
    label: string;
    action: () => void;
  };
}

export interface extensionActionProps {
  data: extensionType;
  privileged: boolean;
}

export type sidebarItemType = {
  label: string;
  path: string;
  Icon: React.ElementType;
  children?: listToolTipItemType;
};

export type localHeaderProps = {
  pageTitle: string;
  pageCaption: string;
  options?: {
    label: string;
    Icon: React.ElementType;
  }[];
};

export type appChipProps = {
  data: Array<string>;
  maxChips?: number;
};

export type truncateTypoTypes = {
  content: string;
  styles?: SxProps;
  noOfLines?: number;
};

export type editableTypoProps = {
  label: string;
  value: string;
  valueType: "text" | "number" | "email";
  enableEditing: boolean;
  action: (newValue: string) => void;
  Icon?: React.ElementType;
};

export interface responsiveBox {
  breakPoint: "sm" | "md" | "lg" | "xl" | "xs";
  children: React.ReactNode;
  sx?: SxProps;
  part?: number;
}

export type AppDialogProps = {
  open: boolean;
  title: string;
  actions: { label: string; handler: () => void }[];
  enableResizing?: boolean;
  children?: React.ReactNode;
  closeHandler: () => void;
};

export interface anyObject {
  [k: string]: unknown;
}

export interface ttlIconButtonProps extends IconButtonProps, TooltipProps {

}

type dataQueryReturnType = {
  isError: boolean;
  isLoading: boolean;
  error: unknown;
  data: unknown;
};

export type ratingStatProps = {
  filled: number;
  count?: number;
  size?: number;
  color?: string;
};

export interface textDividerProps extends DividerProps {
  label: string;
}