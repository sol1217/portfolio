"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaCodepen } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoCodeSlash } from 'react-icons/io5'

import {
  ItemBox,
  CoursesBox,
  AbilityText,
  TitleSkills,
  AbilitiesBox,
  SkillsContainer,
  EachSkillsContainer,
  IoCodeIcon,
  IoMdIcon,
  FaCodeIcon
} from '@features/Skills/Skills.elements'

export const Skills: React.FC<{ id: string }> = ({ id}) => {
  const frontend = ['Hml', 'Css', 'Sass', 'Javascript', 'TypeScript', 'Git ']
  const frameworks = ['React js', 'Next js', 'Vue js', 'Node js', 'React Native', 'Git Hub']
  const courses = ['Banking and Finances', 'Customer Services']

  return (
    <SkillsContainer id={id}>
      <TitleSkills>Acquired Technical Skills</TitleSkills>
      <AbilitiesBox>
        <ItemBox>
          <IoCodeIcon style={{ color: '#604e81' }} fontSize={200} />
          <EachSkillsContainer>
            {frontend.map((elemento, index) => (
              <AbilityText key={index}>{elemento}</AbilityText>
            ))}
          </EachSkillsContainer>
        </ItemBox>

        <ItemBox>
          <IoMdIcon style={{ color: '#604e81' }} fontSize={200} />
          <EachSkillsContainer>
            {frameworks.map((elemento, index) => (
              <AbilityText key={index}>{elemento}</AbilityText>
            ))}
          </EachSkillsContainer>
        </ItemBox>

        <ItemBox>
          <FaCodeIcon style={{ color: '#604e81' }} fontSize={160} />
          <CoursesBox>
            {courses.map((elemento, index) => (
              <AbilityText key={index}>{elemento}</AbilityText>
            ))}
          </CoursesBox>
        </ItemBox>
      </AbilitiesBox>
    </SkillsContainer>
  )
}
