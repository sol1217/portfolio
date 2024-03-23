import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 100px;
  width: 70%;
`

export const TitleContact = styled.h2`
  font-size: 40px;
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const InformationBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
`

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const TextContact = styled.h1`
  border-bottom: 2px solid blueviolet;
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
`

export const TextAreatBox = styled.textarea`
  width: 400px;
  border-radius: 5px;
  padding: 5px;
  background-color: #efe9e9;
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
`
