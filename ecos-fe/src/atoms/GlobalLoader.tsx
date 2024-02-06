import React from "react";

import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { Box, Typography } from "@mui/material";

import { useAppSelector } from "../redux/hooks";
import { gLoader } from "../styles/layout";
import { APP_CONSTATNTS } from "../global/constants";

const GlobalLoader = () => {
  const { loadingLabel } = useAppSelector((store) => store.app);

  const message = React.useMemo(
    () =>
      loadingLabel ? loadingLabel : "Taking you into app... please wait...",
    [loadingLabel]
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
