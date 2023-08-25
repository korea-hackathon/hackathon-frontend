import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    overflow:hidden;
    margin: 0;
  }
`;

export default GlobalStyle;
