import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    /* background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);     */
    background-color: #082032;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

@keyframes win {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}
`;

export default GlobalStyle;
