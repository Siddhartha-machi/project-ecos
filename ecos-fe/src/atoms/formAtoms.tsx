import React from "react";

import { Box, InputBase, MenuItem, Select, Typography } from "@mui/material";

import { inputBoxProps, selectProps } from "../typeDefs/formAtoms";
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

export const SelectField = (props: selectProps) => {
  const { label, value, options, placeHolder } = props;
  const { changeHandler } = props;

  return (
    <Box sx={formAtom.inputContainer}>
      <Typography sx={formAtom.formLabel({ check: false })}>{label}</Typography>
      <Select
        displayEmpty
        value={value.val}
        onChange={changeHandler}
        //   input={<InputBase />}
        sx={formAtom.inputBox}
        renderValue={() => {
          if (!value.val) {
            return <em>Select</em>;
          }

          return (
            <Box>
              {value.Icon && <value.Icon />}
              {value.val}
            </Box>
          );
        }}
      >
        <MenuItem disabled value="">
          <em>{placeHolder.val}</em>
        </MenuItem>
        {options.map((item) => (
          <MenuItem key={item.val} value={item.val}>
            {item.Icon && <item.Icon />}
            {item.val}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
