import { styled, TableCell, tableCellClasses } from "@mui/material";
import React from "react";
import { CustomStyledComponentProps } from "../../../types/common";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CustomTableCell = ({ children }: CustomStyledComponentProps) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default CustomTableCell;
