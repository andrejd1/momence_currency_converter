import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import React from "react";
import TableHeader from "./TableHead/TableHead";
import { TableProps, TData } from "../../types/table";
import CustomTableCell from "./TableCell/TableCell";
import CustomTableRow from "./TableRow/TableRow";
import { renderCountryFlag } from "../../utils/converters";

const ExchangeRateTable = ({ date, headerItems, rows }: TableProps) => {
  return (
    <>
      <h1>Exchange Rate Table</h1>
      <p>Last Update: {date}</p>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "60vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHeader headerItems={headerItems} />
            <TableBody>
              {rows.map((row, rowIndex) => {
                return (
                  <CustomTableRow key={`${row.country}-${rowIndex}-row`}>
                    {headerItems.map((column, columnIndex) => {
                      const value = row[column as keyof TData];

                      return (
                        <CustomTableCell
                          key={`${row.country}-${columnIndex}-cell`}
                        >
                          {column === "country" &&
                            typeof value === "string" &&
                            renderCountryFlag(value)}
                          {value}
                          {column === "rate" && " CZK"}
                        </CustomTableCell>
                      );
                    })}
                  </CustomTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ExchangeRateTable;
