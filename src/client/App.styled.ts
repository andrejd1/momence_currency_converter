import { styled } from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
