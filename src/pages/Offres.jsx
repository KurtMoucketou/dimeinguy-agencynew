import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck, FaRocket, FaChartLine, FaRobot, FaSync } from 'react-icons/fa'

const Offres = () => {
  const packs = [
    {
      id: 1,
      name: "Pack Startup",
      icon: <FaRocket size={40} />,
      price: "2 500 MAD",
      period: "/mois",
      description: "Idéal pour les jeunes entreprises qui démarrent",
      features: [
        "Site vitrine (5 pages)",
        "Identité visuelle basique",
        "Stratégie réseaux sociaux",
        "Support email",
        "Rapport mensuel"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Pack Visibilité",
      icon: <FaChartLine size={40} />,
      price: "5 000 MAD",
      period: "/mois",
      description: "Pour booster votre présence en ligne",
      features: [
        "Site e-commerce",
        "Branding complet",
        "SEO & SEA",
        "Community management",
        "Support prioritaire",
        "Analytics avancé"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Pack IA Business",
      icon: <FaRobot size={40} />,
      price: "8 000 MAD",
      period: "/mois",
      description: "Solutions IA pour optimiser vos processus",
      features: [
        "Chatbot intelligent",
        "Automatisation marketing",
        "Analyse prédictive",
        "Formation IA",
        "Support 24/7",
        "Dashboard personnalisé"
      ],
      popular: false
    },
    {
      id: 4,
      name: "Pack Transformation Digitale",
      icon: <FaSync size={40} />,
      price: "Sur devis",
      period: "",
      description: "Accompagnement complet sur mesure",
      features: [
        "Audit complet",
        "Feuille de route stratégique",
        "Formation des équipes",
        "Accompagnement dédié",
        "Solutions sur mesure",
        "Support prioritaire 24/7"
      ],
      popular: false
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0 60px',
        marginTop: '70px'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Nos Offres & Packs
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Des solutions adaptées à tous les besoins et budgets
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          {packs.map((pack, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className={`h-100 border-0 shadow-sm ${pack.popular ? 'border-primary' : ''}`} style={{
                transition: 'transform 0.3s',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                {pack.popular && (
                  <Badge style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#6366f1',
                    padding: '8px 15px',
                    borderRadius: '50px'
                  }}>
                    Populaire ⭐
                  </Badge>
                )}
                <Card.Body style={{ padding: '30px' }}>
                  <div style={{ color: '#6366f1', marginBottom: '20px' }}>
                    {pack.icon}
                  </div>
                  <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>
                    {pack.name}
                  </Card.Title>
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#6366f1' }}>
                      {pack.price}
                    </span>
                    {pack.period && <span style={{ color: '#666' }}>{pack.period}</span>}
                  </div>
                  <Card.Text style={{ color: '#666', marginBottom: '20px' }}>
                    {pack.description}
                  </Card.Text>
                  <hr />
                  <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                    {pack.features.map((feature, idx) => (
                      <div key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <FaCheck style={{ color: '#6366f1', marginRight: '10px', fontSize: '12px' }} />
                        <span style={{ fontSize: '14px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    as={Link}
                    to="/contact"
                    variant={pack.popular ? 'primary' : 'outline-primary'}
                    style={{
                      width: '100%',
                      borderRadius: '50px',
                      padding: '12px',
                      fontWeight: '600'
                    }}
                  >
                    Choisir cette offre
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Note sur les prix */}
        <Row className="mt-5">
          <Col className="text-center">
            <p style={{ color: '#666' }}>
              * Tous nos packs sont personnalisables selon vos besoins. Contactez-nous pour une offre sur mesure.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Offres