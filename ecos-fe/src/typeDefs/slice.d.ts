import { extensionType } from "./extension";

export type extensionState = {
  extensions: Array<extensionType>;
  userExtensions: Array<Partial<extensionType>>;
};

export type appState = {
  loading: boolean;
  localLoading: boolean;
  disableSearch: boolean;
  loadingLabel: string;
};
