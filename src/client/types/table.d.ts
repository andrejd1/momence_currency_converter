import React from "react";

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

export type CustomStyledTableProps = {
  children: React.ReactNode;
};

export type TableProps = {
  date: string;
  rows: TData[];
} & TableHeaderProps;

export type TFlags = {
  name: string;
  flag: string;
  code: string;
};
