import * as React from "react";

import {
  Box,
  Button,
  CircularProgress,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import { formReturnTypes, genericFormProps } from "../typeDefs/atom";
import { formAtom } from "../styles/formAtom";
import { singleNestedCopy } from "../global/helpers";
import { InputBox, SelectField } from "./formAtoms";
import {
  inputBoxProps,
  inputConfigType,
  selectConfigType,
  selectDataType,
  selectFieldProps,
} from "../typeDefs/formAtoms";
import ErrorContainer from "../layout/ErrorContainer";

const GenericForm = (props: genericFormProps) => {
  const { formFields, submitHandler, formTitle } = props;

  const [APIState, setAPIState] = React.useState({
    loading: false,
    error: "",
  });

  const [formState, setformState] = React.useState(formFields);

  const disableSubmit = React.useMemo(() => {
    for (const field of formState) {
      if (field.value === "") {
        return true;
      }
    }
    return false;
  }, [formState]);

  const switchFocus = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
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

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | React.ReactNode,
    index: number
  ) => {
    setformState((prev) => {
      const newState = singleNestedCopy(prev);
      newState[index].value = (
        e as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ).target.value;
      newState[index].error = "";
      return newState;
    });
  };

  const selectHandler = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode,
    index: number
  ) => {
    const key = (
      child as React.ReactElement<
        unknown,
        string | React.JSXElementConstructor<unknown>
      >
    )?.key;
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
        fieldValue = field.value.val;
        optionalArgs = (formState[compareFieldIndex].value as selectDataType)
          .val;
      } else {
        fieldValue = field.value;
        optionalArgs = formState[compareFieldIndex].value as string;
      }
      if (field.validator) {
        const result = field.validator(fieldValue, optionalArgs);
        updatedField.error = result.message;
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
      // --api conversion
      console.log({ formData });
      response = await submitHandler(formData);
    }
    setAPIState({ error: response, loading: false });
  };

  return (
    <ErrorContainer>
      <Box sx={formAtom.container}>
        {APIState.error && (
          <Typography sx={formAtom.loginError}>
            <ErrorRoundedIcon />
            {APIState.error}
          </Typography>
        )}
        <Typography sx={formAtom.formTitle}>{formTitle}</Typography>
        {formState.map((field, index) => {
          const options = (field as selectConfigType).options;
          if (options) {
            const value = (field as selectFieldProps).value;
            const placeHolder = (field as selectFieldProps).placeHolder;
            return (
              <SelectField
                key={`field-${field.label}`}
                label={field.label}
                value={value}
                placeHolder={placeHolder}
                options={options}
                changeHandler={(e, c) => selectHandler(e, c, index)}
              />
            );
          }
          return (
            <InputBox
              key={`field-${field.label}`}
              label={field.label}
              value={field.value as string}
              type={(field as inputBoxProps).type}
              initialFocused={field.initialFocused}
              changeHandler={(e) => changeHandler(e, index)}
              onKeyDown={(e) => switchFocus(e, index)}
              error={field.error}
              placeHolder={field.placeHolder as string}
              StartIcon={(field as inputConfigType).StartIcon}
            />
          );
        })}

        <Button
          id="signinSubmit"
          type="submit"
          fullWidth
          disabled={disableSubmit || APIState.loading}
          variant="contained"
          onClick={formSubmitHandler}
          sx={formAtom.submitButton}
        >
          {APIState.loading ? (
            <CircularProgress size="1.4rem" sx={{ color: "#fff", py: 0.1 }} />
          ) : (
            "Sign In"
          )}
        </Button>
      </Box>
    </ErrorContainer>
  );
};

export default GenericForm;
