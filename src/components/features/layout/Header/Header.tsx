'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { MdAttachEmail } from "react-icons/md"

import {
  Links,
  Buttons,
  RouteBox,
  ButtonContainer,
  HeaderContainer,
  EmailLink
} from '@features/layout/Header/Header.elements'

export const Header: React.FC<HeaderProps> = ({backgroundColor,setBackgroundColor, color, setColor}) => {
  const { t } = useTranslation("common")
  const router = useRouter()

  const handleChangeLanguage = () => {

  };


  const toggleBackground = () => {
    const newBackgroundColor = backgroundColor === '#222427' ? '#FFF' : '#222427'
    const newColor = color === '#fff' ? '#000' : '#fff'
    setBackgroundColor(newBackgroundColor)
    setColor(newColor)
  }

  return (
    <HeaderContainer>
      <RouteBox>
        <Link href="/">{t('Home')}</Link>
        <Link href="#about">Experience</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#project">Project</Link>
        <Link href="#contact">Contact</Link>
      </RouteBox>
      <ButtonContainer>
        <EmailLink href="mailto:solc0275@gmail.com?Subject=Portfolio%20Sol%20Calderon%20">Correo Electronico</EmailLink>
        <Buttons onClick={toggleBackground}>background</Buttons>
      </ButtonContainer>
    </HeaderContainer>
  )
}
