import Image from 'next/image'
import { IoCodeSlash } from 'react-icons/io5'
import { RiBaseStationFill } from 'react-icons/ri'

import {
  ItemBox,
  AbilitiesBox,
  SkillsContainer,
  EachSkillsContainer,
} from '@features/Skills/Skills.elements'

export const Skills = () => {
  const frontend = ['Hml', 'Css', 'Sass', 'Javascript', 'TypeScript', 'Git/Git Hub']
  const frameworks = ['React js', 'Next js', 'Vue js', 'Node js', 'React Native']
  const courses = ['Banking and Finances', 'Customer Services', 'Entrepreneurship']
  return (
    <SkillsContainer>
      <AbilitiesBox>
        <ItemBox>
          <IoCodeSlash style={{ color: '#604e81' }} fontSize={200} />
          <EachSkillsContainer>
            {frontend.map((elemento, index) => (
              <p key={index}>{elemento}</p>
            ))}
          </EachSkillsContainer>
        </ItemBox>

        <ItemBox>
          <RiBaseStationFill style={{ color: '#604e81' }} fontSize={200} />
          <EachSkillsContainer>
            {frameworks.map((elemento, index) => (
              <p key={index}>{elemento}</p>
            ))}
          </EachSkillsContainer>
        </ItemBox>

        <ItemBox>
          <RiBaseStationFill style={{ color: '#604e81' }} fontSize={200} />
          <EachSkillsContainer>
            {courses.map((elemento, index) => (
              <p key={index}>{elemento}</p>
            ))}
          </EachSkillsContainer>
        </ItemBox>
      </AbilitiesBox>
    </SkillsContainer>
  )
}
