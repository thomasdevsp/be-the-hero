import styled from "styled-components"

export const CardContainer = styled.div`
  max-width: 514px;
  width: 100%;

  padding: 2rem;
  border-radius: 0.5rem;

  background-color: ${props => props.theme["whiteVilon"]};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  h4 {
    font-weight: bold;
    font-size: 0.925rem;

    color: ${props => props.theme["nav-text"]};
  }

  p {
    font-size: 1.125rem;
    color: ${props => props.theme["text"]};
  }
`

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      background: transparent;

      svg {
        color: #A8A8B3;

        &:hover {
          transition: all 0.3s ease-in;
          color: red;
        }
      }

    }
  }
`
