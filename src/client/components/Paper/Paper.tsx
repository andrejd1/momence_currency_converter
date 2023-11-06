import { Paper, styled } from "@mui/material";
import React from "react";
import { CustomStyledComponentProps } from "../../types/common";

const StyledCustomPaper = styled(Paper)(() => ({
  width: "100%",
  overflow: "hidden",
}));

const CustomPaper = ({ children, style }: CustomStyledComponentProps) => {
  return <StyledCustomPaper sx={style}>{children}</StyledCustomPaper>;
};

export default CustomPaper;
