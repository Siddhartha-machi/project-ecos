import { SxProps } from "@mui/material";

import { stylesFuncProps } from "../typeDefs/helpers";

export function createStyles<
  T extends Record<string, SxProps | ((params: stylesFuncProps) => SxProps)>
>(styles: T) {
  return styles;
}
