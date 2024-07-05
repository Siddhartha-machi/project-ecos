import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";

export enum ROLES {
  unauthenticated = "",
  admin = "admin",
  club_admin = "club_admin",
  user = "user",
}

export const APP_CONSTATNTS = {
  backGround: "linear-gradient(to right,#243b55,#141e30)",
  borderRadius: "0px",
  appName: "ECOS",
  appIcon: GiAtomicSlashes,
  sidebarWidth: 70,
};

export const MESSAGE = {
  auth: "Taking you to authentication page...",
};

export const mockUser = {
  username: "Mirana Love",
  email: "mirana@ecos.com",
  role: "user",
  password: "Mirana#2847",
};

export const MOCK_TOKEN = "<mock_token#465382>";
