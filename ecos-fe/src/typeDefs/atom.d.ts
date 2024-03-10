import { inputConfigType, selectConfigType } from "./formAtoms";
import { extensionType } from "./extension";

export type GLoaderProps = {
  loadLabel?: string;
  size?: 'small' | 'medium' | 'large'
};

export type formReturnTypes = {
  [key: string]: string;
};

export type genericFormProps = {
  formFields: Array<selectConfigType | inputConfigType>;
  formTitle: string;
  submitHandler: (formData: formReturnTypes) => void;
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
  itemIndex: number;
}

export type messageToolTipProps = {
  Icon?: React.ElementType;
  data: string;
};

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
