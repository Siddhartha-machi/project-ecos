import React from "react";

import { Box, InputBase, Typography } from "@mui/material";

import { inputBoxProps } from "../typeDefs/formAtoms";
import { formAtom } from "../styles/formAtom";

export const InputBox = (props: inputBoxProps) => {
  const { label, type, error, placeHolder, value, changeHandler } = props;
  const { StartIcon, EndIcon, onKeyDown, focus } = props;

  const isError = React.useMemo(() => Boolean(error), [error]);

  return (
    <Box sx={formAtom.inputContainer}>
      <Typography sx={formAtom.formLabel({ check: isError })}>
        {label}
      </Typography>
      <InputBase
        id={label}
        type={type}
        error={isError}
        sx={formAtom.inputBox}
        value={value}
        autoFocus={focus}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        placeholder={placeHolder}
        fullWidth
        startAdornment={StartIcon && <StartIcon sx={formAtom.startIcon} />}
        endAdornment={EndIcon && <EndIcon />} // --cleanup
        inputProps={{
          style: {
            padding: "12px 0px 12px 0px",
            fontWeight: "bold",
          },
        }}
      />
      {isError && <Typography sx={formAtom.errorText}>{error}</Typography>}
    </Box>
  );
};
