import React from "react";

import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { Box, Typography } from "@mui/material";

import { gLoader } from "../styles/layout";
import { APP_CONSTATNTS } from "../global/constants";
import { GLoaderProps } from "../typeDefs/atom";

const GlobalLoader = (props: GLoaderProps) => {
  const { loadLabel } = props;

  const message = React.useMemo(
    () => (loadLabel ? loadLabel : "Loading, please wait..."),
    [loadLabel]
  );
  return (
    <Box sx={gLoader.container}>
      <Box sx={APP_CONSTATNTS.animation}>
        <WorkspacesIcon sx={{ fontSize: "60px" }} />
      </Box>
      <Typography sx={gLoader.loadLabel}>{message}</Typography>
    </Box>
  );
};

export default GlobalLoader;
