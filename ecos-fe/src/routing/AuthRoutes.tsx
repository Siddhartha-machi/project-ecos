import * as React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AuthLayout = React.lazy(() => import("../pages/Auth/AuthLayout"));
const Register = React.lazy(() => import("../pages/Auth/Register"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const PDForm = React.lazy(() => import("../pages/Auth/PDForm"));

import ErrorContainer from "../layout/ErrorContainer";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ErrorContainer>
              <AuthLayout />
            </ErrorContainer>
          }
        >
          <Route
            path="/"
            element={
              <ErrorContainer>
                <Navigate to="signin" />
              </ErrorContainer>
            }
          />
          <Route
            path="/signin"
            element={
              <ErrorContainer>
                <Login />{" "}
              </ErrorContainer>
            }
          />

          <Route
            path="/signup"
            element={
              <ErrorContainer>
                <Register />
              </ErrorContainer>
            }
          />

          <Route
            path="/personal-details"
            element={
              <ErrorContainer>
                <PDForm />
              </ErrorContainer>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <ErrorContainer>
              <Navigate to="signin" />
            </ErrorContainer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
