import { IoPower } from "react-icons/io5"
import Logo from "../../assets/Logo.svg"
import { Button } from "../button"
import { ActionContainer, ContentContainer, HeaderContainer, PowerButton } from "./style"
import { useAppContext } from "../../context/useAppContext"

export function Header() {
  const { toggleModal } = useAppContext()
  const userName = "Thomas"

  const handleToggleModal = () => {
    toggleModal()
  }

  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={Logo} alt="Be The Hero" />

        <span>Bem vindo, {userName}</span>
      </ContentContainer>

      <ActionContainer>
        <Button onClick={handleToggleModal} text="Cadastrar um novo caso" />
        <PowerButton href="/">
          <IoPower size={24} color="red" />
        </PowerButton>
      </ActionContainer>
    </HeaderContainer>
  )
}
