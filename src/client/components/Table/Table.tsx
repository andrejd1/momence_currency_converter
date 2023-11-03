import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import TableHeader from "./TableHead/TableHead";
import { TableProps, TData } from "../../types/table";

const ExchangeRateTable = (props: TableProps) => {
  if (!props.headerItems && !props.rows) {
    return <div>Error fetching data...</div>;
  } else {
    return (
      <>
        <h1>Exchange Rate Table</h1>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "60vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHeader headerItems={props.headerItems} />
              <TableBody>
                {props.rows.map((row, rowIndex) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={`${row.country}-${rowIndex}-row`}
                    >
                      {props.headerItems.map((column, columnIndex) => {
                        const value = row[column as keyof TData];

                        return (
                          <TableCell key={`${row.country}-${columnIndex}-cell`}>
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
      </>
    );
  }
};

export default ExchangeRateTable;
