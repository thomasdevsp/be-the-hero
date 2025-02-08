import styled from "styled-components"

export const RegisterContainer = styled.main`
  width: 100%;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterCard = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 60dvh;
  padding: 96px;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;



  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.2);
`
export const ContentContainer = styled.div`
  max-width: 390px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-size: 1.125rem;
    color: ${props => props.theme["text"]};
  }
`

export const BackToLoginNav = styled.a`
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

export const FormContainer = styled.div`
  max-width: 448px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
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
