import styled from "styled-components"

export const ButtonElement = styled.button`
    padding: 1.15rem;
    border: 0;
    font-size: 1.125rem;
    border-radius: 0.5rem;


    color: ${props => props.theme["background"]};
    background-color: ${props => props.theme["redHero"]};
  `
