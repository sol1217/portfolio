'use client'

import { useState, useEffect } from 'react'

import { Header, HomePage } from '@features'

export default function Page() {
  const [language, setLanguage] = useState('English')
  const [background, setBackground] = useState('#222427')
  const [color, setColor] = useState('#fff')

  useEffect(() => {
    document.body.style.backgroundColor = background
    document.body.style.color = color
  }, [background])

  return (
    <div>
      <Header
        color={color}
        setColor={setColor}
        backgroundColor={background}
        setBackgroundColor={setBackground}
        language={language}
        setLanguage={setLanguage}
      />
      <HomePage language={language} />
    </div>
  )
}
