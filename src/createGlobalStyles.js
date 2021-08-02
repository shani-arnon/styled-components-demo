import { createGlobalStyle } from "styled-components";
import Wrapper  from "./components/common/Wrapper";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;

    div${Wrapper} {
    background: purple;
    /* //${({color}) => color}; */
  }
  }
`;

export default GlobalStyle;
