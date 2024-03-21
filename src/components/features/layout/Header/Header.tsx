'use client'
import i18n from 'i18next'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import {
  Buttons,
  RouteBox,
  ButtonContainer,
  HeaderContainer,
} from '@features/layout/Header/Header.elements'

export const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  setBackgroundColor,
  color,
  setColor,
}) => {
  const { t } = useTranslation() // Now useTranslation will have access to the i18n instance
  const router = useRouter()

  const handleChangeLanguage = (e) => {
    const locale = e.target.value
    const currentPath = router.asPath
    router.push(`${currentPath.split('?')[0]}?lang=${locale}`)
    i18n.changeLanguage(locale)
  }

  const toggleBackground = () => {
    const newBackgroundColor = backgroundColor === '#222427' ? '#FFF' : '#222427'
    const newColor = color === '#fff' ? '#000' : '#fff'
    setBackgroundColor(newBackgroundColor)
    setColor(newColor)
  }

  return (
    <HeaderContainer>
      <RouteBox>
        <Link href="">{t('home')}</Link>
        <Link href="">{t('experience')}</Link>
        <Link href="">{t('skills')}</Link>
        <Link href="">{t('project')}</Link>
        <Link href="">{t('contact')}</Link>
      </RouteBox>
      <ButtonContainer>
        <Buttons onChange={handleChangeLanguage} defaultValue={i18n.language}>
          <option value="en">{t('english')}</option>
          <option value="es">{t('spanish')}</option>
        </Buttons>
        <Buttons onClick={toggleBackground}>{t('background')}</Buttons>
      </ButtonContainer>
    </HeaderContainer>
  )
}
