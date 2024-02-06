import * as React from "react";
import { Suspense } from "react";

import { Box } from "@mui/material";

import { useAppSelector } from "../redux/hooks";
import { ROLES } from "../global/constants";

const PageNotFound = React.lazy(() => import("./PageNotFound"));

// import { authWapperProps } from "../Types/layoutTypes"; --fix

const PermsWrap = (props) => {
  const { adminView, Component } = props;
  const { role } = useAppSelector((store) => store.user.currentUser);

  if (adminView && role !== ROLES.admin) {
    return <PageNotFound />;
  }
  return (
    <Suspense fallback={<Box>loading component...</Box>}>
      <Component />
    </Suspense>
  );
};

export default PermsWrap;
