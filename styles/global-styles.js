import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, p {
    margin: 0;
  }


`;

export default GlobalStyles;
