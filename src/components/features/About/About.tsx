"use client"

import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import solPicture from '@assets/SolCalderon.jpg'
import {
  ImageProfile,
  ExperienceBox,
  AboutContainer,
  ExperienceText,
  InformationBox,
  ProfessionalInformationBox,
  WhoIamText
} from '@features/About/About.elements'

export const About: React.FC<{ id: string }> = ({ id}) => {
  const { t } = useTranslation('common')

  return (
    <AboutContainer id={id}>
      <ProfessionalInformationBox>
        <ImageProfile src={solPicture} alt="Profile Picture" width={300} height={300} />
        <InformationBox>
          <WhoIamText>{t('¿Who I am?')}</WhoIamText>
          <ExperienceText>My Professional Profile</ExperienceText>
          <ExperienceBox>
            My experience in determining the structure and design of web pages has been based on
            solid knowledge of HTML, CSS and JavaScript.
            <br /> <br /> Worked with frameworks and libraries such as React JS to create dynamic
            and highly interactive web applications. In addition, it applied advanced CSS techniques
            to achieve flexible and attractive layouts, as well as to ensure an excellent experience
            on mobile devices.
            <br /> <br />
            Do not hesitate to contact me: <em>solc0275@gmail.com</em>
          </ExperienceBox>
        </InformationBox>
      </ProfessionalInformationBox>
    </AboutContainer>
  )
}
