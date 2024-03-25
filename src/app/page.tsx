'use client'

import { useState, useEffect } from 'react'

import { Header, HomePage } from '@features'
import { Scroll } from '@core/Scroll/Scroll'
import { Footer } from '@features/layout/Footer/Footer'

export default function Page() {
  const [language, setLanguage] = useState('English')
  const [background, setBackground] = useState('#222427')
  const [color, setColor] = useState('#fff')

  useEffect(() => {
    document.body.style.backgroundColor = background
    document.body.style.color = color
  }, [color, background])

  return (
    <div>
      <Header backgroundColor={background} color={color} setBackgroundColor={setBackground} setColor={setColor}/>
      <HomePage language={language} />
      <Scroll />
      <Footer />
    </div>
  )
}
