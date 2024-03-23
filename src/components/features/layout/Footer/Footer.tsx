import React from 'react'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

import {
  LinkContact,
  ContactButton,
  FooterContainer,
} from '@features/layout/Footer/Footer.elements'

export const Footer = () => {
  return (
    <FooterContainer>
      <h2>Thanks for visiting my site!</h2>
      <ContactButton>
        <Link href="mailto:solc0275@gmail.com?Subject=Portfolio%20Sol%20Calderon%20">
          Contact Me
        </Link>
      </ContactButton>
      <p>Or you can contact through:</p>

      <LinkContact>
        <Link href="https://www.linkedin.com/in/sol-calderón-30aa7425a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BX7ybWozOQTWMMLApO%2Bq%2BlA%3D%3D">
          <FaLinkedinIn fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
        <Link href="https://github.com/sol1217">
          <FaGithubAlt fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
        <Link href="https://wa.link/xxye4u">
          <IoLogoWhatsapp fontSize={30} style={{ color: '#8b8d8e' }} />
        </Link>
      </LinkContact>
    </FooterContainer>
  )
}
