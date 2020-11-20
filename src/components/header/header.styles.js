import styled from "styled-components";
import mediaQueries from "../../styles/breakpoints";

export const HeaderContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.elementBackgroundColor
      ? theme.elementBackgroundColor
      : "transparent"};
  box-shadow: 0px 0px 10px -2px #000000;

  ${mediaQueries.md`
    padding: 1rem 3rem;
  `}
`;

export const HeaderTitle = styled.h3`
  font-size: 16px;
`;
