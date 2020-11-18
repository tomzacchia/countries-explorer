import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default GlobalStyles;
