import { Table, TableBody, TableContainer } from "@mui/material";
import React from "react";
import TableHeader from "./TableHead/TableHead";
import { TableProps, TData } from "../../types/table";
import CustomTableCell from "./TableCell/TableCell";
import CustomTableRow from "./TableRow/TableRow";
import { renderCountryFlag } from "../../utils/converters";
import { StyledTableContainer } from "./Table.styled";
import { StyledParagraphText, StyledTitleText } from "../../App.styled";
import CustomPaper from "../Paper/Paper";

const ExchangeRateTable = ({ date, headerItems, rows }: TableProps) => {
  return (
    <StyledTableContainer>
      <StyledTitleText>Exchange Rate</StyledTitleText>
      <StyledParagraphText>Last Update: {date}</StyledParagraphText>
      <CustomPaper>
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
      </CustomPaper>
    </StyledTableContainer>
  );
};

export default ExchangeRateTable;
