import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Open+Sans:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
  }

`;

export default GlobalStyles;
