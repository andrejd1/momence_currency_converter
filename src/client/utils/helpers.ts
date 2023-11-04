import { TData } from "../types/table";

export function createData(
  country: string,
  currency: string,
  amount: number,
  code: string,
  rate: number,
): TData {
  return {
    country,
    currency,
    amount,
    code,
    rate,
  };
}
