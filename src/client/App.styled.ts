import { styled } from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledTitleText = styled.h1`
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const StyledParagraphText = styled.p`
  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;
