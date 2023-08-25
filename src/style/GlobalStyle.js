import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    overflow:hidden;
    margin: 0;
  }
  html {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
