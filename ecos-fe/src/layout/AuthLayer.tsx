import React from "react";

import { RouterProvider } from "react-router-dom";

import router from "../routing/routes";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { appLoading } from "../redux/slices/appSlice";
import GlobalLoader from "../atoms/GlobalLoader";
import authRouter from "../routing/AuthRoutes";

const AuthLayer = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector((store) => store.user.currentUser);
  const { loading } = useAppSelector((store) => store.app);

  const timedCall = React.useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(
      appLoading({
        loadVal: false,
      })
    );
  }, [dispatch]);

  React.useEffect(() => {
    if (role) {
      timedCall();
    }
  }, [role, timedCall]);

  if (!role) {
    return <RouterProvider router={authRouter} />;
  }

  if (loading) {
    return <GlobalLoader />;
  }
  return <RouterProvider router={router} />;
};

export default AuthLayer;
