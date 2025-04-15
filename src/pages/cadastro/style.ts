import styled from "styled-components"

export const RegisterContainer = styled.main`
  width: 100%;
  height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RegisterCard = styled.div`
  max-width: 70rem;
  width: 100%;
  padding: 6rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
`
export const ContentContainer = styled.div`
  max-width: 24.375rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-size: 1.125rem;
    color: ${props => props.theme["text"]};
  }
`

export const FormContainer = styled.div`
  max-width: 28rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
