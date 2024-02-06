import React from "react";

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
import { selectDataType } from "../typeDefs/formAtoms";

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
    child: React.ReactNode
  ) => {
    console.log({ event, child });

    // setformState((prev) => {
    //   const newState = singleNestedCopy(prev);
    //   newState[index].value = (
    //     e as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    //   ).target.value;
    //   newState[index].error = "";
    //   return newState;
    // });
  };
  const runValidations = () => {
    let valid = true;
    const formData: formReturnTypes = {};
    const newState = formState.map((field, index) => {
      const updatedField = { ...field };
      if (field.validator) {
        const compareFieldIndex = index - 1 > 0 ? index - 1 : 0;
        const optionalArgs = field.CVType
          ? formState[compareFieldIndex].value
          : undefined;
        const result = field.validator(field.value, optionalArgs);
        updatedField.error = result.message;
        valid = result.valid && valid;
      }
      formData[field.label] = field.value;
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
      response = await submitHandler(formData);
    }
    setAPIState({ error: response, loading: false });
  };

  return (
    <Box sx={formAtom.container}>
      {APIState.error.length > 0 && (
        <Typography sx={formAtom.loginError}>
          <ErrorRoundedIcon />
          {APIState.error}
        </Typography>
      )}
      <Typography sx={formAtom.formTitle}>{formTitle}</Typography>
      {formState.map((field, index) => {
        if (field.selectOptions) {
          return (
            <SelectField
              label={field.label}
              value={field.value as selectDataType}
              placeHolder={field.placeHolder as selectDataType}
              options={field.selectOptions}
              changeHandler={selectHandler}
            />
          );
        }
        return (
          <InputBox
            key={`login-${field.label}`}
            label={field.label}
            value={field.value as string}
            type={field.type}
            focus={field.focus}
            changeHandler={(e) => changeHandler(e, index)}
            onKeyDown={(e) => switchFocus(e, index)}
            error={field.error}
            placeHolder={field.placeHolder as string}
            StartIcon={field.startIcon}
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
          <CircularProgress size="1.5rem" sx={{ color: "#fff" }} />
        ) : (
          "Sign In"
        )}
      </Button>
    </Box>
  );
};

export default GenericForm;
