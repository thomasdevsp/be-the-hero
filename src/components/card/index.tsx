import { PiTrash } from "react-icons/pi"
import { CardContainer, ContentContainer } from "./style"

interface CardProps {
  event: string
  description: string
  value: number
}

export function Card({ event, description, value }: CardProps) {
  return (
    <CardContainer>
      <ContentContainer>
        <div>
          <h4>CASO:</h4>
          <button onClick={() => console.log("Apaguei")}>
            <PiTrash size={24}  />
          </button>
        </div>
        <p>{event}</p>
      </ContentContainer>

      <ContentContainer>
        <h4>DESCRIÇÃO:</h4>
        <p>{description}</p>
      </ContentContainer>

      <ContentContainer>
        <h4>VALOR:</h4>
        <p>R$ {value} reais</p>
      </ContentContainer>
    </CardContainer>
  )
}
