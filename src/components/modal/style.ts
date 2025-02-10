import styled from "styled-components"

export const ModalMain = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;

  display: flex;
`

export const ModalOverlay= styled.div`
  background: ${props => props.theme["background"]};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 6;

`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 7.5rem 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["background"]};

  z-index: 7;
`

export const ModalCard = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;
  background-color: ${props => props.theme["background"]};
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.2);

`

export const ModalContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 6rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BackToDashboard = styled.div``

export const ModalForm = styled.div``
