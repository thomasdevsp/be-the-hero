import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  img {
    max-width: 200px;
  }

  span {
    font-size: 1.125rem;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

`
export const PowerButton = styled.a`
  padding: 1.125rem;
  border: 1.5px solid #DCDCE5;
  background-color: #FFF;
  border-radius: 0.5rem;
`
