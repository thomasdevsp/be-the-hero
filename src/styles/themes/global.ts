import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Roboto", serif;
  }

  body {
    background-color: ${props => props.theme["background"]};
  }

  h1 {
    font-size: 2.25rem;
    color: ${props => props.theme["title"]};
  }

`
