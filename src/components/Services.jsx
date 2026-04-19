import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
  const services = [
    { title: "Branding & Communication", icon: "🎨", desc: "Créez une identité unique et mémorable pour votre marque" },
    { title: "Création Web", icon: "💻", desc: "Sites modernes, rapides et responsive design" },
    { title: "Marketing Digital", icon: "📈", desc: "Stratégies data-driven pour votre croissance" },
    { title: "Solutions IA", icon: "🤖", desc: "Automatisation et agents intelligents sur mesure" },
    { title: "Production de contenus", icon: "📝", desc: "Contenus engageants pour tous vos supports" },
    { title: "Transformation digitale", icon: "🔄", desc: "Accompagnement vers le digital" }
  ]

  return (
    <section style={{ padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Nos Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm card-hover">
                <Card.Body>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                  <Card.Title style={{ fontWeight: 'bold' }}>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services