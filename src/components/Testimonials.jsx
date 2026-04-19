import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Testimonials = () => {
  const testimonials = [
    { name: "Marie Laurent", role: "CEO, TechStart", text: "Une agence exceptionnelle qui a transformé notre présence digitale." },
    { name: "Karim Benali", role: "Directeur Marketing", text: "Les solutions IA proposées ont révolutionné nos processus." },
    { name: "Sophie Martin", role: "Fondatrice", text: "Un accompagnement personnalisé et des résultats impressionnants." }
  ]

  return (
    <section style={{ padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Ce que disent nos clients</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div style={{ fontSize: '3rem', color: '#6366f1', marginBottom: '1rem' }}>"</div>
                  <Card.Text style={{ fontStyle: 'italic' }}>"{testimonial.text}"</Card.Text>
                  <hr />
                  <h6 className="mb-0">{testimonial.name}</h6>
                  <small className="text-muted">{testimonial.role}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials