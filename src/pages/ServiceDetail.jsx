import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPalette, FaCode, FaChartLine, FaPenFancy, FaRobot, FaDigitalTattoo, FaGlobe } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Branding & Communication",
      icon: <FaPalette size={40} />,
      description: "Créez une identité unique et mémorable qui vous démarque de la concurrence.",
      features: ["Identité visuelle", "Stratégie de marque", "Naming & storytelling", "Charte graphique"],
      slug: "branding"
    },
    {
      id: 2,
      title: "Création Web",
      icon: <FaCode size={40} />,
      description: "Des sites web modernes, rapides et responsive design sur mesure.",
      features: ["Sites vitrines", "E-commerce", "Applications web", "Maintenance technique"],
      slug: "creation-web"
    },
    {
      id: 3,
      title: "Marketing Digital",
      icon: <FaChartLine size={40} />,
      description: "Stratégies data-driven pour booster votre croissance en ligne.",
      features: ["SEO/SEA", "Réseaux sociaux", "Email marketing", "Analytics & reporting"],
      slug: "marketing-digital"
    },
    {
      id: 4,
      title: "Production de contenus",
      icon: <FaPenFancy size={40} />,
      description: "Des contenus engageants pour tous vos supports de communication.",
      features: ["Rédaction web", "Vidéos corporatives", "Infographies", "Podcasts"],
      slug: "production-contenus"
    },
    {
      id: 5,
      title: "Solutions IA",
      icon: <FaRobot size={40} />,
      description: "Intégrez l'intelligence artificielle dans vos processus métier.",
      features: ["Chatbots intelligents", "Automatisation", "Analyse prédictive", "Agents IA"],
      slug: "solutions-ia"
    },
    {
      id: 6,
      title: "Transformation digitale",
      icon: <FaGlobe size={40} />, // Remplacé FaDigitalTattoo par FaGlobe
      description: "Accompagnement complet vers le digital pour votre entreprise.",
      features: ["Audit digital", "Formation", "Conseil stratégique", "Accompagnement sur mesure"],
      slug: "transformation-digitale"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0 80px',
        marginTop: '70px'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Nos Services
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Des solutions complètes pour votre communication digitale
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm" style={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                }}>
                  <Card.Body style={{ padding: '30px' }}>
                    <div style={{ color: '#6366f1', marginBottom: '20px' }}>
                      {service.icon}
                    </div>
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '15px' }}>
                      {service.title}
                    </Card.Title>
                    <Card.Text style={{ color: '#666', marginBottom: '20px' }}>
                      {service.description}
                    </Card.Text>
                    <ul style={{ paddingLeft: '20px', marginBottom: '25px' }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{ marginBottom: '8px', color: '#555' }}>{feature}</li>
                      ))}
                    </ul>
                    <Button 
                      as={Link} 
                      to={`/services/${service.slug}`}
                      variant="outline-primary"
                      style={{ borderRadius: '50px', padding: '10px 25px' }}
                    >
                      En savoir plus →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Vous avez un projet ?
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
              <Button 
                as={Link} 
                to="/contact"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '12px 40px',
                  fontWeight: '600'
                }}
              >
                Demander un devis
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services