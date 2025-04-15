import styled from "styled-components"

export const LoginContainer = styled.main`
  height: 100dvh;
  max-width: 90rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1920px){
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    background-color: red;
  }
`

export const ContentContainer = styled.div`
  max-width: 21.938rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.25rem;

`
export const LogoContainer = styled.div`
  img {
    max-width: 15.625rem;
    height: 6.625rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  height: 16.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const SignInContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 1.125rem;

    color: ${props => props.theme["nav-text"]};
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
`

export const ImageContainer = styled.div`
  img {
    max-width: 40rem;
    max-height: 36rem;
  }
`
