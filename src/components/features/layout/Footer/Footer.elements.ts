import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  height: 300px;
  border-top: 1px solid gray;
  margin-top: 60px;
`

export const LinkContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ContactButton = styled.button`
  width: 200px;
  border: none;
  cursor: pointer;
  background-color: #604e81;
  color: white;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;

  &:active {
    transform: scale(0.97);
  }
`
