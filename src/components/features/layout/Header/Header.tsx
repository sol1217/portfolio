'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { MdAttachEmail } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { IoGitNetwork } from "react-icons/io5"
import { MdPermContactCalendar } from "react-icons/md"
import { AiOutlineCodepenCircle } from "react-icons/ai"
import { FaCode } from "react-icons/fa"
import { NavigationLinks } from "../Header/NavigationLinks/NavigationLinks"

import {
  Links,
  Buttons,
  ButtonContainer,
  HeaderContainer,
  EmailLink,
  MobilNavBox,
  RouteMobilNav,
  ToggleButton,
  NavBox,
  ButtonBox
} from '@features/layout/Header/Header.elements'

export const Header: React.FC<HeaderProps> = ({backgroundColor,setBackgroundColor, color, setColor}) => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleChangeLanguage = () => {

  }


  const toggleBackground = () => {
    const newBackgroundColor = backgroundColor === '#222427' ? '#FFF' : '#222427'
    const newColor = color === '#fff' ? '#000' : '#fff'
    setBackgroundColor(newBackgroundColor)
    setColor(newColor)
  }

  return (
    <HeaderContainer>
      <NavBox>
        <NavigationLinks/>
        <ButtonContainer>
          <EmailLink href="mailto:solc0275@gmail.com?Subject=Portfolio%20Sol%20Calderon%20">Correo Electronico</EmailLink>
          <Buttons onClick={toggleBackground}>background</Buttons>
        </ButtonContainer>
      </NavBox>


        <ToggleButton onClick={() => setMenuOpen(!menuOpen)} $active={menuOpen} />
      

      {menuOpen && (
      <MobilNavBox>
        <NavigationLinks/>
      </MobilNavBox>
      )}
    </HeaderContainer>
  )
}
