import * as React from "react";

import { Box, InputBase, MenuItem, Select, Typography } from "@mui/material";

import { formAtom } from "../styles/formAtom.s";
import { inputBoxProps, selectFieldProps } from "../typeDefs/formAtoms";

export const InputBox = (props: inputBoxProps) => {
  const { label, type, error, placeHolder, value, changeHandler } = props;
  const { StartIcon, EndIcon, onKeyDown, initialFocused } = props;

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
        value={value}
        autoFocus={initialFocused}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        placeholder={placeHolder}
        startAdornment={StartIcon && <StartIcon sx={formAtom.startIcon} />}
        endAdornment={EndIcon && <EndIcon />} // --fix
      />
      {isError && <Typography sx={formAtom.errorText}>{error}</Typography>}
    </Box>
  );
};

export const SelectField = (props: selectFieldProps) => {
  const { label, value, options, placeHolder } = props;
  const { changeHandler } = props;

  return (
    <Box sx={formAtom.inputContainer}>
      <Typography sx={formAtom.formLabel({ check: false })}>{label}</Typography>
      <Select
        required
        value={value.val}
        onChange={changeHandler}
        startAdornment={value.Icon && <value.Icon />}
        renderValue={() => value.val}
      >
        <MenuItem
          disabled
          value={placeHolder.val}
        >
          {placeHolder.val}
          {placeHolder.Icon && <placeHolder.Icon />}
        </MenuItem>
        {options.map((item, index) => (
          <MenuItem
            key={`select-${index}`}
            value={item.val}
          >
            {item.Icon && <item.Icon />}
            {item.val}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
