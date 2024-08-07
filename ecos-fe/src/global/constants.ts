import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";

export enum ROLES {
  unauthenticated = "",
  admin = "admin",
  club_admin = "club_admin",
  user = "user",
}

export const APP_CONSTATNTS = {
  backGround: "linear-gradient(to right,#243b55,#141e30)",
  gap: 16,
  radius: 10,
  appName: "ECOS",
  appIcon: GiAtomicSlashes,
  sidebarWidth: 75,
  cellWidth: 130,
};

export const MESSAGE = {
  auth: "Taking you to authentication page...",
};

export const request = {
  NOT_FOUND: "Requested resource not found.",
  REQUEST_FAILED: "Unable to complete request.",
  INVALID_DATA: "Request made with Iinvalid or incomplete data.",
  SUCCESS: "",
};

export const mockUser = {
  username: "Mirana Love",
  email: "mirana@ecos.com",
  role: "user",
  password: "Mirana#2847",
};

export const MOCK_TOKEN = "<mock_token#465382>";

export enum transactionMode {
  EXTERNAL_RESOURCE_REQ = 1,
  STORAGE_REQ = 2,
  RESOURCE_UPDATE_REQ = 3,
}