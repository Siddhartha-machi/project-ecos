import { Navigate, createBrowserRouter } from "react-router-dom";

import PageNotFound from "../layout/PageNotFound";
import AuthLayout from "../pages/Auth/AuthLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/signin" />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound auth />,
  },
]);

export default authRouter;
