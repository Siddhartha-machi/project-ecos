import * as React from "react";

import { Box, Button, CircularProgress, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { formAtom } from "../styles/formAtom.s";
import { singleNestedCopy } from "../global/helpers";

import ErrorContainer from "../layout/ErrorContainer";
import { formReturnTypes, genericFormProps } from "../typeDefs/atom";
import { selectDataType, selectConfigType, inputConfigType } from "../typeDefs/formAtoms";
import { customTheme } from "../global/theme";

const GenericForm = (props: genericFormProps) => {
  const { formFields, submitHandler, formTitle, submitButtonText } = props;
  const { formContainerSx, formTitleSx } = props;

  const [APIState, setAPIState] = React.useState({
    loading: false,
    error: "",
  });

  const [formState, setformState] = React.useState(formFields);

  const disableSubmit = React.useMemo(() => {
    for (const field of formState) {
      if ((field as inputConfigType).value === "" || (field as selectConfigType).value.val === "") {
        return true;
      }
    }
    return false;
  }, [formState]);

  const switchFocus = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>, index: number) => {
    if (e.key === "Enter") {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextFieldIndex = index + 1;
        if (nextFieldIndex < formState.length) {
          const focusFieldName = formState[nextFieldIndex].label;
          document.getElementById(focusFieldName)?.focus();
        } else {
          !disableSubmit && formSubmitHandler();
        }
      }
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | React.ReactNode, index: number) => {
    setformState((prev) => {
      const newState = singleNestedCopy(prev);
      newState[index].value = (e as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>).target.value;
      newState[index].error = "";
      return newState;
    });
  };

  const selectHandler = (event: SelectChangeEvent<string>, child: React.ReactNode, index: number) => {
    const key = (child as React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>)?.key;
    const selectedItemIndex = parseInt(key?.split("-")[1] || "0");
    setformState((prev) => {
      const newState = singleNestedCopy(prev);
      newState[index].value = {
        Icon: newState[index].options[selectedItemIndex].Icon,
        val: event.target.value,
      };
      newState[index].error = "";
      return newState;
    });
  };

  const runValidations = () => {
    let valid = true;
    const formData: formReturnTypes = {};
    const newState = formState.map((field, index) => {
      const updatedField = { ...field };
      const compareFieldIndex = index - 1 > 0 ? index - 1 : 0;
      let fieldValue = "";
      let optionalArgs = "";

      if (typeof field.value !== "string") {
        fieldValue = (field.value as selectDataType).val;
        optionalArgs = (formState[compareFieldIndex].value as selectDataType).val;
      } else {
        fieldValue = field.value;
        optionalArgs = formState[compareFieldIndex].value as string;
      }
      if (field.validator) {
        const result = field.validator(fieldValue, optionalArgs);
        updatedField.errorText = result.message;
        valid = result.valid && valid;
      }
      formData[field.label] = fieldValue;
      return updatedField;
    });
    return { valid, newState, formData };
  };

  const formSubmitHandler = async () => {
    setAPIState((prev) => ({ ...prev, loading: true }));
    let response = "";
    const { valid, newState, formData } = runValidations();
    if (!valid) {
      setformState(newState);
    } else {
      response = await submitHandler(formData);
    }
    setAPIState({ error: response, loading: false });
  };

  React.useEffect(() => {
    setformState(formFields);
  }, [formFields]);

  return (
    <ErrorContainer>
      <Box sx={{ ...formAtom.container, ...formContainerSx }}>
        {APIState.error && (
          <Typography sx={formAtom.loginError}>
            <ErrorRoundedIcon />
            {APIState.error}
          </Typography>
        )}

        {formTitle && <Typography sx={{ ...formAtom.formTitle, ...formTitleSx }}>{formTitle}</Typography>}

        {formState.map((field, index) => {
          const options = (field as selectConfigType).options;
          if (options) {
            const { value, placeHolder, ...rest } = field as selectConfigType;
            return (
              <Box sx={formAtom.inputContainer} key={`inp-field-${index}-${field.label}`}>
                <Typography sx={formAtom.formLabel({ check: false })}>{field.label}</Typography>
                <Select
                  required
                  value={value.val}
                  onChange={(e, c) => selectHandler(e, c, index)}
                  startAdornment={value.Icon && <value.Icon />}
                  renderValue={() => value.val}
                  {...rest}
                >
                  <MenuItem disabled value={placeHolder.val}>
                    {placeHolder.val}
                    {placeHolder.Icon && <placeHolder.Icon />}
                  </MenuItem>
                  {options.map((item, index) => (
                    <MenuItem key={`select-${index}`} value={item.val}>
                      {item.Icon && <item.Icon />}
                      {item.val}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            );
          } else {
            const { label, error, errorText, StartIcon, inputProps, ...rest } = field as inputConfigType;

            return (
              <Box sx={formAtom.inputContainer} key={`sel-field-${field.label}`}>
                <Typography sx={formAtom.formLabel({ check: error })}>{label}</Typography>
                <Box sx={formAtom.fieldContainer}>
                  {StartIcon && <StartIcon sx={formAtom.startIcon} />}
                  <InputBase
                    id={label}
                    inputProps={{
                      sx: {
                        ...customTheme.components?.MuiInputBase?.defaultProps?.inputProps?.sx,
                        ...inputProps?.style,
                      },
                    }}
                    fullWidth
                    {...rest}
                    error={error}
                    itemType={StartIcon ? "withIcon" : undefined}
                    onChange={(e) => changeHandler(e, index)}
                    onKeyDown={(e) => switchFocus(e, index)}
                  />
                </Box>
                {error && <Typography sx={formAtom.errorText}>{errorText}</Typography>}
              </Box>
            );
          }
        })}

        <Button id="submit" type="submit" fullWidth disabled={disableSubmit || APIState.loading} variant="contained" onClick={formSubmitHandler} sx={{ py: "10px" }}>
          {APIState.loading ? <CircularProgress size="1.4rem" sx={{ color: "#fff", py: 0.1 }} /> : submitButtonText || "Submit"}
        </Button>
      </Box>
    </ErrorContainer>
  );
};

export default GenericForm;
