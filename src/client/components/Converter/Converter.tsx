import React from "react";
import { Grid, MenuItem, SelectChangeEvent } from "@mui/material";
import TextFieldComponent from "../TextField/TextField";
import SelectField from "../SelectField/SelectField";
import { useForm } from "react-hook-form";
import { FLAGS } from "../../utils/enums";
import { StyledConverterContainer } from "./Converter.styled";
import {
  ConverterFormProps,
  TConverterFormValues,
} from "../../types/converter";

const Converter = ({ selectedCurrency }: ConverterFormProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<TConverterFormValues>();

  const onCodeChange = (event: SelectChangeEvent) => {
    setValue("code", event.target.value);
  };

  if (!selectedCurrency)
    return (
      <StyledConverterContainer>
        <h1>Currency Converter</h1>
        <p>Can't load the converter :(</p>
      </StyledConverterContainer>
    );

  return (
    <StyledConverterContainer>
      <h1>Currency Converter</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextFieldComponent
            label={"Amount (CZK)"}
            type={"number"}
            register={register("czk_amount", {
              pattern: {
                value: /^\d$/,
                message: "Your input is NaN.",
              },
            })}
            defaultValue={selectedCurrency.rate.toString()}
            error={Boolean(errors.czk_amount)}
            errorMessage={errors.czk_amount?.message}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <SelectField
            label={"Currency"}
            options={FLAGS.map((option) => (
              <MenuItem key={option.name} value={option.code}>
                {`${option.flag} ${option.code}`}
              </MenuItem>
            ))}
            defaultValue={selectedCurrency.code}
            {...register("code")}
            error={errors.code}
            onChange={onCodeChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextFieldComponent
            label={"Amount"}
            type={"number"}
            register={register("amount", {
              pattern: {
                value: /^\d$/,
                message: "Your input is NaN.",
              },
            })}
            defaultValue={selectedCurrency.amount.toString()}
            error={Boolean(errors.amount)}
            errorMessage={errors.amount?.message}
          />
        </Grid>
      </Grid>
    </StyledConverterContainer>
  );
};

export default Converter;
