import {
  RouteBox,
  NavBox,
} from '@features/layout/Header/NavigationLinks/NavigationLinks.elements'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export const NavigationLinks = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.pathname)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 680)
    }

    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleRouteChange = (route: string) => {
    setCurrentRoute(route)
  }

  return (
    <Router>
      <div>
        <RouteBox>
          <Link
            href="/"
            style={{ borderBottom: isSmallScreen && currentRoute === '/' ? '4px solid #29becd' : 'none' }}
            onClick={() => handleRouteChange('/')}
          >
            Home
          </Link>
          <Link
            href="#about"
            style={{ borderBottom: isSmallScreen && currentRoute === '/about' ? '4px solid #29becd' : 'none' }}
            onClick={() => handleRouteChange('/about')}
          >
            About
          </Link>
          <Link
            href="#skills"
            style={{ borderBottom: isSmallScreen && currentRoute === '/skills' ? '4px solid #29becd' : 'none' }}
            onClick={() => handleRouteChange('/skills')}
          >
            Skills
          </Link>
          <Link
            href="#project"
            style={{ borderBottom: isSmallScreen && currentRoute === '/project' ? '4px solid #29becd' : 'none' }}
            onClick={() => handleRouteChange('/project')}
          >
            Project
          </Link>
          <Link
            href="#contact"
            style={{ borderBottom: isSmallScreen && currentRoute === '/contact' ? '4px solid #29becd' : 'none' }}
            onClick={() => handleRouteChange('/contact')}
          >
            Contact
          </Link>
        </RouteBox>
      </div>
    </Router>
  )
}
