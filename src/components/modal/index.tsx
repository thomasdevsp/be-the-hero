import { ReactNode } from "react"
import { ModalCard, ModalContainer, ModalContent, ModalForm, ModalMain, ModalOverlay } from "./style"
import { IoArrowBackOutline } from "react-icons/io5"
import { useAppContext } from "../../context/useAppContext"
import { BackToNav, TextContainer } from "../../styles/themes/global"

interface ModalProps {
  children: ReactNode
  title: string
  text: string
}

export function Modal({ title, text, children }: ModalProps) {
  const { toggleModal } = useAppContext()

  const handleToggleModal = () => {
    toggleModal()
  }

  return (
    <ModalMain>
      <ModalOverlay />

      <ModalContainer>

        <ModalCard>

          <ModalContent>
            <TextContainer>
              <h1>{title}</h1>
              <span>{text}</span>
            </TextContainer>

            <BackToNav onClick={handleToggleModal}>
              <IoArrowBackOutline size={24} color="red" />
              <span>Voltar para o Dashboard</span>
            </BackToNav>

            <ModalForm>
              {children}
            </ModalForm>

          </ModalContent>

        </ModalCard>

      </ModalContainer>

    </ModalMain>
  )
}
