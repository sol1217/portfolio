import { useState, useEffect } from 'react'
import { FaMouse } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa6'

import { ScrollContainer } from '@core/Scroll/Scroll.elements'

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight

      setIsVisible(scrollTop > windowHeight / 2)

      if (scrollTop === 0) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <ScrollContainer style={{ display: isVisible ? 'flex' : 'none' }} onClick={scrollToTop}>
      <FaMouse fontSize={20} style={{ color: '#604e81' }} />
      <p>Scroll Up</p>
      <FaArrowUp fontSize={20} style={{ color: '#604e81' }} />
    </ScrollContainer>
  )
}
