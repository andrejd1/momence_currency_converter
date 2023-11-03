import { TData } from "./table";
import { Dispatch, SetStateAction } from "react";

export type TConverterFormValues = {
  czk_amount: number;
} & TData;

export type ConverterFormProps = {
  selectedCurrency: TData | undefined;
  setSelectedCurrency: Dispatch<SetStateAction<TData | undefined>>;
};
