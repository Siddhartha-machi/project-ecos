import * as React from "react";

import { Box, Typography } from "@mui/material";

import { gLoader } from "../styles/layout";
import { GLoaderProps } from "../typeDefs/atom";

const GlobalLoader = (props: GLoaderProps) => {
  const { loadLabel, size } = props;

  const message = React.useMemo(
    () => (loadLabel ? loadLabel : "Loading, please wait..."),
    [loadLabel]
  );
  return (
    <Box sx={gLoader.container}>
      <div className={`spinner-${size || "medium"}`}></div>
      <Typography sx={gLoader.loadLabel}>{message}</Typography>
    </Box>
  );
};

export default GlobalLoader;
