import { GiAtomicSlashes } from "@react-icons/all-files/gi/GiAtomicSlashes";

export enum ROLES {
  unauthenticated = "",
  admin = "admin",
  club_admin = "club_admin",
  user = "user",
}

export const APP_CONSTATNTS = {
  backGround:
    "radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%));",
  borderRadius: "12px",
  appName: "ECOS",
  appIcon: GiAtomicSlashes,
  animation: {
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
    animation: "infinite 1.2s linear spin",
  },
};

export const MESSAGE = {
  auth: 'Taking you to authentication page...'
}