import { IoArrowBackOutline } from "react-icons/io5"
import Logo from "../../assets/Logo.svg"
import { Button } from "../../components"
import { Input } from "../../components/input"
import { BackToLoginNav, ContentContainer, FormContainer, InlineInput, InputContainer, RegisterCard, RegisterContainer, TextContainer } from "./style"

export function Cadastro() {
  return (
    <RegisterContainer>
      <RegisterCard>
        <ContentContainer>
          <div>
            <img src={Logo} alt="Be The Hero" />
          </div>

          <TextContainer>
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da
              sua ONG
            </p>
          </TextContainer>

          <BackToLoginNav href="/">
            <IoArrowBackOutline size={24} color="red" />
            <span>Voltar para o logon</span>
          </BackToLoginNav>

        </ContentContainer>

        <FormContainer>
          <InputContainer>
            <Input placeholder="Nome da ONG" />
            <Input type="email" placeholder="E-mail"/>
            <Input type="tel" placeholder="WhatsApp" />

            <InlineInput>
              <Input placeholder="Cidade"/>
              <Input placeholder="UF"/>
            </InlineInput>

          </InputContainer>
          <Button text="Cadastrar" />

        </FormContainer>

      </RegisterCard>
    </RegisterContainer>
  )
}
