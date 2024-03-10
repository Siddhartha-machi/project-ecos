import * as React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const PageNotFound = React.lazy(() => import("../layout/PageNotFound"));
const PermLayer = React.lazy(() => import("../layout/PermLayer"));
const Overview = React.lazy(() => import("../pages/Overview/Overview"));
const UnderProgress = React.lazy(() => import("../layout/UnderProgress"));
const AppLayout = React.lazy(() => import("../layout/AppLayout"));
const Extensions = React.lazy(() => import("../pages/Extensions/Extensions"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PermLayer Component={AppLayout} />}>
          <Route path="overview" element={<PermLayer Component={Overview} />} />
          <Route
            path="YECOS"
            element={<PermLayer Component={UnderProgress} />}
          />
          <Route
            path="settings"
            element={<PermLayer Component={UnderProgress} />}
          />
          <Route
            path="users"
            element={<PermLayer Component={UnderProgress} />}
          />
          <Route
            path="account"
            element={<PermLayer Component={UnderProgress} />}
          />
          <Route
            path="logout"
            element={<PermLayer Component={UnderProgress} />}
          />
          <Route
            path="extensions"
            element={<PermLayer Component={Extensions} />}
          >
            <Route
              path="clubs"
              element={<PermLayer Component={UnderProgress} />}
            />
            <Route
              path="users"
              element={<PermLayer Component={UnderProgress} />}
            />
            <Route
              path="todo"
              element={<PermLayer Component={UnderProgress} />}
            />
            <Route
              path="expense-manager"
              element={<PermLayer Component={UnderProgress} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Redirect from auth routes to app routes */}
        <Route path="/signin" element={<Navigate to={"/"} />} />
        <Route path="/personal-details" element={<Navigate to={"/"} />} />
        <Route path="/signup" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
