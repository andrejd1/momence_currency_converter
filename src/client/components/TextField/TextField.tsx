import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
import { colors } from "../../theme/colors";

type TTextFieldProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  isPositiveNumber?: boolean;
  error?: boolean;
  errorMessage?: string;
};

const TextFieldComponent: React.FC<TTextFieldProps> = React.forwardRef<
  HTMLInputElement,
  TTextFieldProps
>(
  (
    {
      register,
      type,
      defaultValue,
      label,
      error,
      errorMessage,
      isPositiveNumber,
    },
    ref,
  ): React.JSX.Element => {
    return (
      <>
        <TextField
          type={type}
          InputProps={
            type === "number" && isPositiveNumber
              ? { inputProps: { min: 0 } }
              : {}
          }
          fullWidth
          inputRef={ref}
          defaultValue={defaultValue}
          label={label}
          size={"small"}
          error={error}
          {...register}
        />
        {error && (
          <FormHelperText sx={{ color: colors.danger }}>
            {errorMessage}
          </FormHelperText>
        )}
      </>
    );
  },
);

export default TextFieldComponent;
