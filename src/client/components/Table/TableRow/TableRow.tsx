import { styled, TableRow } from "@mui/material";
import React from "react";
import { CustomStyledComponentProps } from "../../../types/common";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTableRow = ({ children }: CustomStyledComponentProps) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default CustomTableRow;
