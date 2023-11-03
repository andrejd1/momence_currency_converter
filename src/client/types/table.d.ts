export type TData = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

export type TableHeaderProps = {
  headerItems: string[];
};

export type TableProps = {
  headerItems: string[];
  rows: TData[];
};
