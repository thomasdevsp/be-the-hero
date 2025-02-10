import { ReactNode } from "react"
import Logo from "../../assets/Logo.svg"
import { BackToDashboard, ModalCard, ModalContainer, ModalContent, ModalForm, ModalMain, ModalOverlay, TextContainer } from "./style"

interface ModalProps {
  children: ReactNode
  title: string
  text: string
}

export function Modal({ title, text, children }: ModalProps) {
  return (
    <ModalMain>
      <ModalOverlay />

      <ModalContainer>

        <ModalCard>

          <ModalContent>
            <div>
              <img src={Logo}  />
            </div>

            <TextContainer>
              <h1>{title}</h1>
              <span>{text}</span>
            </TextContainer>

            <BackToDashboard>

            </BackToDashboard>
          </ModalContent>

          <ModalForm>
            {children}
          </ModalForm>

        </ModalCard>

      </ModalContainer>

    </ModalMain>
  )
}
