import styled from 'styled-components'

export const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  gap: 50px;
  position: relative ;
  width: 90%;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const RouteBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  font-size: 20px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    font-size: 28px;
    gap: 50px;
    justify-content: flex-start;
    height: 700px;
  }

  
`
