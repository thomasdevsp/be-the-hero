import styled from "styled-components"

export const DashboardContainer = styled.main `
  padding: 3rem 10rem 0; // top - sides - bottom
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2rem 2rem;
  height: calc(80dvh - 4rem);
  overflow: auto;




  @media(max-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
