import React from "react";
import { StyledErrorContainer } from "./Error.styled";
import { ErrorProps } from "../../types/table";
import { StyledParagraphText, StyledTitleText } from "../../App.styled";

const Error = ({ title, message }: ErrorProps) => {
  return (
    <StyledErrorContainer>
      <StyledTitleText>{title}</StyledTitleText>
      <StyledParagraphText>{message}</StyledParagraphText>
    </StyledErrorContainer>
  );
};

export default Error;
