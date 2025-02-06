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
  max-width: 351px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.25rem;

`
export const LogoContainer = styled.div`
  img {
    max-width: 250px;
    height: 106px;
  }
`

export const LogonContainer = styled.div`
  width: 100%;
  height: 264px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 2.25rem;
  }

`
export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  input {
    outline: none;
    font-size: 1.125rem;
    border: 0;
    padding: 1.15rem;
    border-radius: 0.5rem;
    border: 1px solid #DCDCE5;
  }

  button {
    padding: 1.15rem;
    border: 0;
    font-size: 1.125rem;
    border-radius: 0.5rem;


    color: ${props => props.theme["background"]};
    background-color: ${props => props.theme["redHero"]};
  }
`

export const SignInContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 1.125rem;

    color: ${props => props.theme["sub-text"]};
    font-weight: bold;
    font-size: 1.125rem;
    text-decoration: none;
    cursor: pointer;
`

export const ImageContainer = styled.div`
  img {
    max-width: 640px;
    max-height: 576px;
  }
`
