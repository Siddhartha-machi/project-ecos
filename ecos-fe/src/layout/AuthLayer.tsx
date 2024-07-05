import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { appLoading, toggleMock } from "../redux/slices/appSlice";
import GlobalLoader from "../atoms/GlobalLoader";
import { MESSAGE } from "../global/constants";
import { ELHOC } from "./HOCS";
import { loadFunArgs } from "../typeDefs/helpers";
import { setCurrentUser } from "../redux/slices/userSlice";
import { loadUser } from "../api/mockHandles";
import { oType } from "../typeDefs/api";

const AppRouter = React.lazy(() => import("../routing/AppRouter"));
const AuthRouter = React.lazy(() => import("../routing/AuthRoutes"));

const AuthLayer = () => {
  const dispatch = useAppDispatch();
  const { role, active } = useAppSelector((store) => store.user.currentUser);
  const { loading } = useAppSelector((store) => store.app);

  const setAppLoading = React.useCallback(
    (args: loadFunArgs) => dispatch(appLoading(args)),
    [dispatch]
  );

  const setUser = React.useCallback(
    (args: unknown) => dispatch(setCurrentUser(args)),
    [dispatch]
  );

  const setMock = React.useCallback(
    (args: unknown) => dispatch(toggleMock((args as oType).mock)),
    [dispatch]
  );

  React.useEffect(() => {
    loadUser([
      { path: "user", loading: setAppLoading, onSuccess: setUser },
      { path: "config", loading: setAppLoading, onSuccess: setMock },
    ]);
  }, [setAppLoading, dispatch, setUser, setMock]);

  // Show a loader while fetching user data in local forage if exists
  if (loading) {
    return (
      <GlobalLoader loadLabel="Setting up few last things... please wait..." />
    );
  }

  // Load auth router if the no role found or user is not active
  if (!role || !active) {
    return (
      <ELHOC loadingLabel={MESSAGE.auth}>
        <AuthRouter />
      </ELHOC>
    );
  }

  // Load app router if the user is logged in
  return (
    <ELHOC loadingLabel="Taking you to ECOS home">
      <AppRouter />
    </ELHOC>
  );
};
export default AuthLayer;
