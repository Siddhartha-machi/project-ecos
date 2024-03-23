import * as React from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { appLoading } from "../redux/slices/appSlice";
import GlobalLoader from "../atoms/GlobalLoader";
import { MESSAGE } from "../global/constants";
import { ELHOC } from "./HOCS";
import { loadMockData } from "../api/mockHandles";
import { loadFunArgs } from "../typeDefs/helpers";
import { setCurrentUser } from "../redux/slices/userSlice";

const AppRouter = React.lazy(() => import("../routing/AppRouter"));
const AuthRouter = React.lazy(() => import("../routing/AuthRoutes"));

const AuthLayer = () => {
  const dispatch = useAppDispatch();
  const { role, active } = useAppSelector((store) => store.user.currentUser);
  const { mock, loading } = useAppSelector((store) => store.app);

  const setAppLoading = React.useCallback(
    (args: loadFunArgs) => dispatch(appLoading(args)),
    [dispatch]
  );
  const setUser = React.useCallback(
    (args: unknown) => dispatch(setCurrentUser(args)),
    [dispatch]
  );

  React.useEffect(() => {
    if (role && active) {
      if (mock) {
        loadMockData({ loading: setAppLoading, onSuccess: setUser });
      } else {
        // --api conversion
        setAppLoading({ loadVal: false, label: "" });
      }
    }
  }, [role, active, setAppLoading, mock, dispatch, setUser]);

  // Load auth router if the no role found or user is not active
  if (!role || !active) {
    return (
      <ELHOC loadingLabel={MESSAGE.auth}>
        <AuthRouter />
      </ELHOC>
    );
  }

  // Show a loader while fetching user data in local forage if exists
  if (loading) {
    return (
      <GlobalLoader loadLabel="Setting up few last things... please wait..." />
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
