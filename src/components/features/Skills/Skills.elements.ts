import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 150px;
`
export const TitleSkills = styled.h2`
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 40px;
`

export const AbilitiesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100em;
  text-align: center;
`

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
`

export const EachSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
  text-transform: uppercase;
`

export const CoursesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  padding: 10px;
`

export const AbilityText = styled.p`
  background-color: grey;
  border-radius: 10px;
  user-select: none;
  padding: 3px;
`
