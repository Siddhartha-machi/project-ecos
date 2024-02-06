import React, { Suspense } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const PageNotFound = React.lazy(() => import("../layout/PageNotFound"));
const AuthLayout = React.lazy(() => import("../pages/Auth/AuthLayout"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const PDForm = React.lazy(() => import("../pages/Auth/PDForm"));

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<div style={{ color: "#fff" }}>Loading auth routes..</div>}
      >
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="signin" />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/personal-details" element={<PDForm />} />
          </Route>
          <Route path="*" element={<PageNotFound auth />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AuthRouter;
