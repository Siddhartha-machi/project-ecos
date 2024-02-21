import * as React from "react";

import { useAppSelector } from "../redux/hooks";
import { ROLES } from "../global/constants";
import { ELHOC } from "./HOCS";

const PageNotFound = React.lazy(() => import("./PageNotFound"));

// import { authWapperProps } from "../Types/layoutTypes"; --fix

const PermLayer = (props) => {
  const { adminView, Component } = props;
  const { role } = useAppSelector((store) => store.user.currentUser);

  if (adminView && role !== ROLES.admin) {
    return <PageNotFound />;
  }
  return (
    <ELHOC loadingLabel="Finishing up things...">
      <Component />
    </ELHOC>
  );
};

export default PermLayer;
