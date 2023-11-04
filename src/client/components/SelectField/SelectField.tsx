import React, { ReactNode } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FieldError } from "react-hook-form";
import { colors } from "../../theme/colors";

type TSelectFieldProps = {
  label: string;
  name: string;
  error?: FieldError;
  options: ReactNode;
  readonly defaultValue?: string;
  readonly onChange: (event: SelectChangeEvent) => void;
};

const SelectField: React.FC<TSelectFieldProps> = React.forwardRef<
  HTMLSelectElement,
  TSelectFieldProps
>(
  (
    { label, name, error, onChange, options, defaultValue },
    ref,
  ): React.JSX.Element => {
    return (
      <FormControl fullWidth>
        <InputLabel id={name} size={"small"}>
          {label}
        </InputLabel>
        <Select
          labelId={name}
          id={name}
          label={label}
          onChange={(event: SelectChangeEvent) => onChange(event)}
          size="small"
          fullWidth
          inputRef={ref}
          defaultValue={defaultValue}
          error={Boolean(error)}
        >
          {options}
        </Select>
        {error && (
          <FormHelperText sx={{ color: colors.danger }}>
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  },
);

export default SelectField;
