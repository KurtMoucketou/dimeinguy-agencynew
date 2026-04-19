import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FaBars } from 'react-icons/fa'

const NavigationBar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/services', label: 'Services' },
    { to: '/solutions-ia', label: 'Solutions IA' },
    { to: '/realisations', label: 'Réalisations' },
    { to: '/blog', label: 'Blog' },
    { to: '/offres', label: 'Offres' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: scrolled 
          ? `rgba(${theme === 'light' ? '255,255,255' : '10,10,10'}, 0.9)`
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <h3 style={{ 
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>
            DIMEINGUY AGENCY
          </h3>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.to}
                as={Link} 
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                style={{
                  color: theme === 'light' ? '#1a1a1a' : '#ffffff',
                  margin: '0 10px',
                  fontWeight: '500'
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar