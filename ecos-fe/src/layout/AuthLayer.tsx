import React, { Suspense } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { appLoading } from "../redux/slices/appSlice";
import GlobalLoader from "../atoms/GlobalLoader";

const Router = React.lazy(() => import("../routing/Router"));
const AuthRouter = React.lazy(() => import("../routing/AuthRoutes"));

const AuthLayer = () => {
  const dispatch = useAppDispatch();
  const { role, active } = useAppSelector((store) => store.user.currentUser);
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

  if (!role || !active) {
    return (
      <Suspense
        fallback={
          <GlobalLoader loadLabel="Taking you to login page... please wait..." />
        }
      >
        <AuthRouter />
      </Suspense>
    );
  }

  if (loading) {
    return <GlobalLoader loadLabel="Taking you into app... please wait..." />;
  }
  return (
    <Suspense
      fallback={
        <GlobalLoader loadLabel="Setting up few last things... please wait..." />
      }
    >
      <Router />
    </Suspense>
  );
};
export default AuthLayer;
