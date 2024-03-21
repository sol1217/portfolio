'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaGithubAlt } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaVoicemail } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

import { About } from '@features/About/About'
import { Skills } from '@features/Skills/Skills'

import {
  LinksBox,
  TitleWithName,
  ButtonContainer,
  ButtonInformation,
  HomePageContainer,
  IntroduceContainer,
} from './HomePage.elements'

export const HomePage: React.FC<HomeProps> = ({ language }) => {
  const pdfUrl = '/resume.pdf'

  const [introTexts, setIntroTexts] = useState({
    greeting: 'Hello 👋🏻, I am',
    profession: 'Frontend Developer, Passionate about Web Development.',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
  })

  useEffect(() => {
    if (language === 'Spanish') {
      setIntroTexts({
        greeting: 'Hola 👋🏻, Soy',
        profession: 'Desarrollador Frontend, Apasionado por el Desarrollo Web.',
        downloadCV: 'Descargar CV',
        contactMe: 'Contáctame',
      })
    } else {
      setIntroTexts({
        greeting: 'Hello 👋🏻, I am',
        profession: 'Frontend Developer, Passionate about Web Development.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me',
      })
    }
  }, [language])

  return (
    <HomePageContainer>
      <IntroduceContainer>
        <h2>{introTexts.greeting}</h2>
        <TitleWithName>Sol Calderón</TitleWithName>
        <h2>{introTexts.profession}</h2>
        <ButtonContainer>
          <ButtonInformation>
            <a href={pdfUrl} download>
              {introTexts.downloadCV} <FaDownload />
            </a>
          </ButtonInformation>
          <ButtonInformation>
            <Link href="https://t.me/solci29">
              {introTexts.contactMe} <FaTelegramPlane />
            </Link>
          </ButtonInformation>
        </ButtonContainer>
      </IntroduceContainer>

      <LinksBox>
        <Link href="https://www.linkedin.com/in/sol-calderón-30aa7425a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BX7ybWozOQTWMMLApO%2Bq%2BlA%3D%3D">
          <FaLinkedinIn fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
        <Link href="https://github.com/sol1217">
          <FaGithubAlt fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
        <Link href="https://wa.link/xxye4u">
          <IoLogoWhatsapp fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
        <Link href="mailto:solc0275@gmail.com?Subject=Portfolio%20Sol%20Calderon%20">
          <FaVoicemail fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
      </LinksBox>

      <About />
      <Skills />
    </HomePageContainer>
  )
}
