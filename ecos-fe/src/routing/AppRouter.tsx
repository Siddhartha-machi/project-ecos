import * as React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const PageNotFound = React.lazy(() => import("../layout/PageNotFound"));
const PermsWrap = React.lazy(() => import("../layout/PermLayer"));
const Overview = React.lazy(() => import("../pages/Overview/Overview"));
const UnderProgress = React.lazy(() => import("../layout/UnderProgress"));
const AppLayout = React.lazy(() => import("../layout/AppLayout"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PermsWrap Component={AppLayout} />}>
          <Route
            path="overview"
            element={<PermsWrap Component={Overview} />}
          />
          <Route
            path="YECOS"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="settings"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="account"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="logout"
            element={<PermsWrap Component={UnderProgress} />}
          />
        </Route>
        <Route
          path="/extensions"
          element={<PermsWrap Component={UnderProgress} />}
        >
          <Route
            path="clubs"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="users"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="todo"
            element={<PermsWrap Component={UnderProgress} />}
          />
          <Route
            path="expense-manager"
            element={<PermsWrap Component={UnderProgress} />}
          />
        </Route>
        <Route path="/signin" element={<Navigate to={"/"} />} />
        <Route path="/personal-details" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
