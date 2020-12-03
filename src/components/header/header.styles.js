import styled from "styled-components";
import mediaQueries from "../../styles/breakpoints";

export const HeaderContainer = styled.div`
  padding: 1rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.elementBackgroundColor};
  box-shadow: 0px 0px 10px -2px #000000;

  ${mediaQueries.md`
    padding: 1rem 3rem;
  `}
`;

export const HeaderTitle = styled.h3`
  font-size: 16px;
`;
