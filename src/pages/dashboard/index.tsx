import { Card } from "../../components/card"
import { Modal } from "../../components/modal"
import { useAppContext } from "../../context/useAppContext"
import { Data } from "../../mock/date"
import { CardsContainer, DashboardContainer } from "./style"

export function Dashboard() {
  const { modal } = useAppContext()

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

      {modal && (
        <Modal
          title="Cadastrar novo caso"
          text="Descreva o caso detalhadamente para encontrar um héroi para resolver isso."
        >
          Aroba
        </Modal>
      )}

    </DashboardContainer>
  )
}
