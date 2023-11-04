import React, { useEffect, useState } from "react";
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
import { TData } from "../../types/table";
import { roundNumber } from "../../utils/converters";

const Converter = ({ rows }: ConverterFormProps) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<TConverterFormValues>();
  const [selectedCurrency, setSelectedCurrency] = useState<TData>(rows[0]);

  useEffect(() => {
    setValue("amount", selectedCurrency.amount);
    setValue("czk_amount", selectedCurrency.rate);
  }, [selectedCurrency]);

  const onCodeChange = (event: SelectChangeEvent) => {
    const newSelectedCurrency = rows.find(
      (row) => row.code === event.target.value,
    );
    if (newSelectedCurrency) {
      setSelectedCurrency(newSelectedCurrency);
      setValue("code", event.target.value);
    }
  };

  const onAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);
    const czkAmountPerUnit = selectedCurrency.rate / selectedCurrency.amount;
    const czkAmount = roundNumber(amount * czkAmountPerUnit, 3);
    setValue("czk_amount", czkAmount);
  };

  const onCZKAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const CZKAmount = parseFloat(event.target.value);
    const amount = roundNumber(CZKAmount / selectedCurrency.rate, 3);
    setValue("amount", amount);
  };

  return (
    <StyledConverterContainer>
      <h1>Currency Converter</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextFieldComponent
            label={"Amount"}
            type={"number"}
            register={register("amount", {
              onChange: onAmountChange,
              pattern: {
                value: /^[0-9.]+$/,
                message: "Your input is NaN.",
              },
            })}
            defaultValue={selectedCurrency.amount.toString()}
            error={Boolean(errors.amount)}
            errorMessage={errors.amount?.message}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <SelectField
            label={`Currency (${selectedCurrency.rate} CZK)`}
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
            label={"Amount (CZK)"}
            type={"number"}
            register={register("czk_amount", {
              onChange: onCZKAmountChange,
              pattern: {
                value: /^[0-9.]+$/,
                message: "Your input is NaN.",
              },
            })}
            defaultValue={selectedCurrency.rate.toString()}
            error={Boolean(errors.czk_amount)}
            errorMessage={errors.czk_amount?.message}
          />
        </Grid>
      </Grid>
    </StyledConverterContainer>
  );
};

export default Converter;
