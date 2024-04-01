import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  width: 70%;

  @media (max-width: 655px) {
    margin-top: 0;
  }
`

export const TitleContact = styled.h2`
  font-size: 40px;
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 655px) {
    font-size: 35px;
  }

  @media (max-width: 580px) {
    text-transform: uppercase;
    font-size: 20px;
  }

  @media (max-width: 470px) {
    font-size: 18px;
  }

  @media (max-width: 410px) {
    color: white;
    font-size: 15px;
  }

  @media (max-width: 350px) {
    display: none;
  }
  
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 520px) {
    align-items: center;
  }
`

export const ContactInfo = styled.span`
  @media (max-width: 470px) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 410px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 230px;
  }
`

export const TextContact = styled.h1`
  border-bottom: 2px solid blueviolet;

  @media (max-width: 510px) {
    font-size: 30px;
    width: 70%;
    text-align: center;
  }
  
`

export const ContactButton = styled.button`
  background-color: #604e81;
  border-radius: 10px;
  width: 250px;
  padding: 5px;
  border: none;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 520px) {
    width: 170px;
    font-size: 24px;
  }
`

export const EmailBox = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const InputBox = styled.input`
  width: 400px;
  border-radius: 5px;
  padding: 8px;
  border: none;
  background-color: #efe9e9;

  @media (max-width: 470px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 270px;
  }
`

export const TextAreatBox = styled.textarea`
  width: 400px;
  border-radius: 5px;
  padding: 5px;
  background-color: #efe9e9;

  @media (max-width: 470px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 270px;
  }
`

export const SendButton = styled.button`
  width: 400px;
  border-radius: 5px;
  background-color: #604e81;
  height: 50px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 470px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 270px;
  }
`
