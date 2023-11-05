import { Paper, styled } from "@mui/material";
import React from "react";
import { CustomStyledTableProps } from "../../types/table";

const StyledCustomPaper = styled(Paper)(() => ({
  width: "100%",
  overflow: "hidden",
}));

const CustomPaper = ({ children, style }: CustomStyledTableProps) => {
  return <StyledCustomPaper sx={style}>{children}</StyledCustomPaper>;
};

export default CustomPaper;
