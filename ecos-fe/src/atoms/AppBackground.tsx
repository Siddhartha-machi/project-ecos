import { Box } from "@mui/material";

import { layout } from "../styles/layout";

const AppBackground = ({ children }: appBackgroundProps) => {
  return <Box sx={layout.appBackground}>{children}</Box>;
};

export default AppBackground;
