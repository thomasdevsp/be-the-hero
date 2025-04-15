import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Roboto", serif;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  }

  body {
    background-color: ${props => props.theme["background"]};
  }

  h1 {
    font-size: 2.25rem;
    color: ${props => props.theme["title"]};
  }

`

export const BackToNav = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme["nav-text"]};

`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  `

export const InlineInput = styled.div`
  display: grid;
  grid-template-columns: 80% 19%;
  gap: 0.5rem;
`
