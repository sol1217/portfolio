'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import {
  Links,
  Buttons,
  RouteBox,
  ButtonContainer,
  HeaderContainer,
} from '@features/layout/Header/Header.elements'

export const Header = () => {
  /*const { t } = useTranslation() // Now useTranslation will have access to the i18n instance
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
  }*/

  /*<HeaderContainer>
      <RouteBox>
        <Links href="">{t('home')}</Links>
        <Links href="">{t('experience')}</Links>
        <Links href="">{t('skills')}</Links>
        <Links href="">{t('project')}</Links>
        <Links href="">{t('contact')}</Links>
      </RouteBox>
      <ButtonContainer>
        <Buttons onChange={handleChangeLanguage} defaultValue={i18n.language}>
          <option value="en">{t('english')}</option>
          <option value="es">{t('spanish')}</option>
        </Buttons>
        <Buttons onClick={toggleBackground}>{t('background')}</Buttons>
      </ButtonContainer>
    </HeaderContainer>*/

  return <div>Sol</div>
}
