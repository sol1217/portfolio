import styled from 'styled-components'

export const HomePageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 100px;
  padding-top: 100px;

  @media (max-width: 900px) {
    margin-top: 60px;
  }
`

export const IntroduceContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

export const TitleWithName = styled.h1`
  font-size: 130px;
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-family: Arial;
  font-weight: bold;

  @media (max-width: 910px) {
    font-size: 100px;
  }

  @media (max-width: 680px) {
    font-size: 70px;
  }

  @media (max-width: 490px) {
    font-size: 50px;
  }

  @media (max-width: 370px) {
    font-size: 35px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Profession = styled.h2`
  @media (max-width: 910px) {
    font-size: 18px;
  }

  @media (max-width: 680px) {
    font-size: 15px;
  }

  @media (max-width: 490px) {
    font-size: 13px;
  }

  @media (max-width: 340px) {
    font-size: 10px;
  }
  
`

export const ButtonInformation = styled.button`
  padding: 12px;
  background-color: #604e81;
  color: white;
  font-size: 17px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 680px) {
    padding: 6px;
    font-size: 15px;
  }

  @media (max-width: 490px) {
    font-size: 12px;
  }
`

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 900px;
  gap: 10px;
  padding: 10px;

  @media (max-width: 1040px) {
    width: inherit;
    flex-direction: row;
  }
`
