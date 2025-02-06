import { PiSignInBold } from "react-icons/pi"
import Logo from "../../assets/Logo.svg"
import people from "../../assets/people.svg"
import { ActionContainer, ContentContainer, ImageContainer, LoginContainer, LogoContainer, LogonContainer, SignInContainer } from "./style"
export function Login() {
  return (
    <LoginContainer>
      <ContentContainer>
        <LogoContainer>
          <img src={Logo} alt="Be The Hero " />
        </LogoContainer>

        <LogonContainer>
          <h1>Faça seu Logon</h1>

          <ActionContainer>
            <input type="text" placeholder="Sua ID" />
            <button>Entrar</button>
          </ActionContainer>

          <SignInContainer href="/">
            <PiSignInBold size={18} color="red"/>
              Não tenho cadastro
          </SignInContainer>

        </LogonContainer>

      </ContentContainer>
      <ImageContainer>
        <img src={people} alt="Pessoas se abraçando" />
      </ImageContainer>

    </LoginContainer>
  )
}
