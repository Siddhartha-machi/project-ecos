import { ROLES } from "../global/constants";

export type user = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: ROLES;
  active: boolean;
  joined_date: string;
};
