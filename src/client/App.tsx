import "./App.css";
import axios from "axios";
import useSWR from "swr";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type TData = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

function createData(
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

function App() {
  const { data, error, isLoading } = useSWR("/exchange/rates", fetcher);

  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>Loading...</div>;

  const splitData: string[] = data.split("\n");
  const splitDataHeader: string[] = splitData[1].toLowerCase().split("|");
  const splitDataWithoutHeader: string[] = [...splitData];
  splitDataWithoutHeader.splice(0, 2);

  const rows = splitDataWithoutHeader.map((row) => {
    const cells = row.split("|");
    return createData(
      cells[0],
      cells[1],
      Number(cells[2]),
      cells[3],
      Number(cells[4]),
    );
  });

  return (
    <>
      {data && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 680 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {splitDataHeader.map((headerData) => (
                    <TableCell key={headerData}>
                      {headerData.toUpperCase()}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {splitDataHeader.map((column) => {
                        const value = row[column as keyof TData];

                        return (
                          <TableCell key={row.code}>
                            {value}
                            {column === "rate" ? " CZK" : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
}

export default App;
