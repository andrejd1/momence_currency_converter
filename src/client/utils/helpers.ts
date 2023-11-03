import { TData } from "../types/table";
import axios from "axios";

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

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
