import { Card } from "../../components/card"
import { Data } from "../../mock/date"
import { CardsContainer, DashboardContainer } from "./style"

export function Dashboard() {
  return (
    <DashboardContainer>
      <h1>Casos Cadastrados</h1>

      <CardsContainer>
        {Data.map((data) => (
          <Card
            key={data.id}
            event={data.caso}
            description={data.descricao}
            value={data.valor}
          />
        ))}

      </CardsContainer>

    </DashboardContainer>
  )
}
