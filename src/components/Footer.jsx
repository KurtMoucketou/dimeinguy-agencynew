import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ 
      background: '#1a1a1a', 
      color: 'white', 
      padding: '60px 0 20px',
      marginTop: 'auto'
    }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 style={{ 
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px'
            }}>
              DIMEINGUY AGENCY
            </h3>
            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
              Agence de communication digitale innovante spécialisée en IA, 
              accompagnant les entreprises dans leur transformation digitale.
            </p>
          </Col>
          
          <Col md={2} className="mb-4 mb-md-0">
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Liens rapides</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#aaa', textDecoration: 'none' }}>Accueil</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: '#aaa', textDecoration: 'none' }}>À propos</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/services" style={{ color: '#aaa', textDecoration: 'none' }}>Services</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/solutions-ia" style={{ color: '#aaa', textDecoration: 'none' }}>Solutions IA</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/blog" style={{ color: '#aaa', textDecoration: 'none' }}>Blog</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Services</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/services/branding" style={{ color: '#aaa', textDecoration: 'none' }}>Branding</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/services/creation-web" style={{ color: '#aaa', textDecoration: 'none' }}>Création web</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/services/marketing-digital" style={{ color: '#aaa', textDecoration: 'none' }}>Marketing digital</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/services/solutions-ia" style={{ color: '#aaa', textDecoration: 'none' }}>Solutions IA</Link></li>
            </ul>
          </Col>
          
          <Col md={3}>
            <h5 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Contact</h5>
            <p style={{ color: '#aaa', marginBottom: '10px' }}>
              📧 <a href="mailto:contact@dimeinguy.com" style={{ color: '#aaa', textDecoration: 'none' }}>contact@dimeinguy.com</a>
            </p>
            <p style={{ color: '#aaa', marginBottom: '10px' }}>
              📞 <a href="tel:+212522000000" style={{ color: '#aaa', textDecoration: 'none' }}>+212 522 000 000</a>
            </p>
            <p style={{ color: '#aaa', marginBottom: '10px' }}>
              📍 Casablanca, Maroc
            </p>
          </Col>
        </Row>
        
        <hr style={{ background: '#333', margin: '30px 0 20px' }} />
        
        <Row>
          <Col className="text-center">
            <p style={{ margin: 0, color: '#888' }}>
              &copy; 2024 DIMEINGUY AGENCY - Tous droits réservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer  // Vérifie bien que cette ligne existe