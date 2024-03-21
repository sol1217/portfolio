import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  min-width: 100vw;
  min-height: 100px;
  gap: 50px;
`

export const RouteBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 23px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Buttons = styled.button`
  background-color: #604e81;
  border-radius: 20px;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }
`
