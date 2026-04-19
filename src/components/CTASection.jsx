import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const CTASection = () => {
  return (
    <section style={{ 
      padding: '80px 0', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      color: 'white' 
    }}>
      <Container className="text-center">
        <h2 style={{ marginBottom: '1rem' }}>Prêt à transformer votre entreprise ?</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Contactez-nous dès aujourd'hui pour un devis personnalisé
        </p>
        <Button variant="light" size="lg" style={{ borderRadius: '50px', padding: '12px 40px' }}>
          Obtenir un devis gratuit
        </Button>
      </Container>
    </section>
  )
}

export default CTASection