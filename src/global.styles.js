import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    padding-top: 60px;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.25s linear;
  }
`;

export const ToTopIcon = styled.i`
  padding: 1rem;
  background: ${({ theme }) => theme.elementBackgroundColor};
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
`;
