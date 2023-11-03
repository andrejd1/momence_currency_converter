import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type TTextFieldProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error?: boolean;
  errorMessage?: string;
};

const TextFieldComponent: React.FC<TTextFieldProps> = React.forwardRef<
  HTMLInputElement,
  TTextFieldProps
>(
  (
    { register, type, defaultValue, label, error, errorMessage },
    ref,
  ): React.JSX.Element => {
    return (
      <>
        <TextField
          type={type}
          sx={{ width: "100%" }}
          inputRef={ref}
          defaultValue={defaultValue}
          label={label}
          size={"small"}
          error={error}
          {...register}
        />
        {error && (
          <FormHelperText sx={{ color: "#D32F2F" }}>
            {errorMessage}
          </FormHelperText>
        )}
      </>
    );
  },
);

export default TextFieldComponent;
