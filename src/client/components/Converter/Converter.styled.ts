import { styled } from "styled-components";

export const StyledConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem 4rem;
  max-width: 20rem;
  width: 100%;

  @media screen and (max-width: 900px) {
    align-self: center;
    padding: 0 2rem 2rem;
  }
`;
