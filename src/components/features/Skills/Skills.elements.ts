import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 150px;
`

export const AbilitiesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  width: 60em;
`

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  flex-direction: column;
`

export const EachSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
  text-transform: uppercase;
`
