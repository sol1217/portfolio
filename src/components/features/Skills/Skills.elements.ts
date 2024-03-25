import styled from 'styled-components'
import { FaCodepen } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoCodeSlash } from 'react-icons/io5'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 700px;

  @media (max-width: 960px) {
    margin-top: 70px;
  }
`
export const TitleSkills = styled.h2`
  background: linear-gradient(45deg, #bd609b, #8782b7, #29b3d3, #29becd);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (max-width: 360px) {
    font-size: 24px;
  }
`

export const AbilitiesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 100em;
  text-align: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
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

  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 1060px) {
    font-size: 10px;
  }

  @media (max-width: 300px) {
    font-size: 8px;
  }
 
`

export const IoCodeIcon = styled(IoCodeSlash)`
  @media (max-width: 1300px) {
    font-size: 130px;
  }

  @media (max-width: 1060px) {
    font-size: 80px;
  }

  @media (max-width: 300px) {
    font-size: 70px;
  }
  
`

export const IoMdIcon = styled(IoMdSettings)`
  @media (max-width: 1300px) {
    font-size: 130px;
  }

  @media (max-width: 1060px) {
    font-size: 80px;
  }

  @media (max-width: 300px) {
    font-size: 70px;
  }
`

export const FaCodeIcon = styled(FaCodepen)`
  @media (max-width: 1300px) {
    font-size: 130px;
  }

  @media (max-width: 1060px) {
    font-size: 80px;
  }

  @media (max-width: 300px) {
    font-size: 70px;
  }
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
