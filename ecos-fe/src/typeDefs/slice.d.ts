import { extensionType } from "./extension";

export type extensionState = {
  extensions: Array<extensionType>;
  userExtensions: {
    id: string;
    title: string;
  }[];
};

export type appState = {
  loading: boolean;
  localLoading: boolean;
  disableSearch: boolean;
  loadingLabel: string;
};