import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Partners = () => {
  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"]

  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h3 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Ils nous font confiance</h3>
        <Row className="justify-content-center align-items-center">
          {partners.map((partner, index) => (
            <Col md={2} key={index} className="text-center mb-3">
              <div style={{ 
                padding: '20px', 
                backgroundColor: 'white', 
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}>
                <p className="mb-0 fw-bold">{partner}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Partners