import { TData } from "./table";

export type TConverterFormValues = {
  czk_amount: number;
} & TData;

export type ConverterFormProps = {
  rows: TData[];
};
