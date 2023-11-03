import { styled, TableCell, tableCellClasses } from "@mui/material";
import React from "react";
import { CustomStyledTableProps } from "../../../types/table";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CustomTableCell = ({ children }: CustomStyledTableProps) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default CustomTableCell;
