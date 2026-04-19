import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const WhyChooseUs = () => {
  const reasons = [
    { icon: "🚀", title: "Expertise IA", desc: "Solutions d'intelligence artificielle sur mesure" },
    { icon: "🎯", title: "Résultats garantis", desc: "Stratégies data-driven pour votre ROI" },
    { icon: "🤝", title: "Support 24/7", desc: "Assistance continue et réactive" },
    { icon: "💡", title: "Innovation constante", desc: "Veille technologique permanente" },
    { icon: "🌍", title: "Vision internationale", desc: "Marchés Maroc, Afrique, Europe" },
    { icon: "📊", title: "Transparence", desc: "Reporting détaillé et régulier" }
  ]

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>
          Pourquoi choisir DIMEINGUY AGENCY ?
        </h2>
        <Row>
          {reasons.map((reason, index) => (
            <Col md={4} key={index} className="text-center mb-4">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{reason.icon}</div>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default WhyChooseUs