import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  body {
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    margin: 0;
  }
`;

export default GlobalStyle;
