import { extensionType } from "./extension";
import { user } from "./user";

export type extensionState = {
  extensions: Array<extensionType>;
  userExtensions: Array<Partial<extensionType>>;
};

export type appState = {
  mock: boolean;
  loading: boolean;
  localLoading: boolean;
  disableSearch: boolean;
  loadingLabel: string;
};

export type userState = {
  currentUser: user;
  usersList: user[];
};
