import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-image: linear-gradient(to right bottom, #e1e1e1, #e0e0e0, #dedfde, #dddddd, #dcdcdc);
  }

  body {
    font-family: Roboto, sans-serif;
  }
`;
