import { Box } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";

import PageNotFound from "../layout/PageNotFound";
import PermsWrap from "../layout/PermLayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PermsWrap Component={PageNotFound} />,
    errorElement: <Box>Something went wrong, please contact dev team</Box>,
    children: [
      {
        path: "/",
        element: <PermsWrap Component={PageNotFound} />,
      },
      {
        path: "/overview",
        element: <PermsWrap Component={PageNotFound} />,
      },
      {
        path: "/archive",
        element: <PermsWrap Component={PageNotFound} />,
      },
      {
        path: "/clubs",
        element: <PermsWrap Component={PageNotFound} />,
      },
      {
        path: "/account",
        element: <PermsWrap Component={PageNotFound} />,
      },

      {
        path: "/settings",
        element: <PermsWrap Component={PageNotFound} />,
      },
      {
        path: "/users",
        element: <PermsWrap Component={PageNotFound} adminView />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
