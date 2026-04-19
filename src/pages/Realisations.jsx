import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa'

const Realisations = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Site E-commerce TechStore",
      category: "web",
      type: "Création web",
      description: "Plateforme e-commerce complète avec paiement intégré",
      image: "🛒",
      client: "TechStore",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Identité visuelle GreenLife",
      category: "branding",
      type: "Branding",
      description: "Branding complet pour startup éco-responsable",
      image: "🌿",
      client: "GreenLife",
      technologies: ["Logo", "Charte graphique", "Packaging"]
    },
    {
      id: 3,
      title: "Campagne Instagram ModeX",
      category: "marketing",
      type: "Marketing digital",
      description: "Campagne d'influence +100K de reach",
      image: "📱",
      client: "ModeX",
      technologies: ["Social Media", "Influence", "Content"]
    },
    {
      id: 4,
      title: "Chatbot IA BankAssist",
      category: "ia",
      type: "Solutions IA",
      description: "Assistant virtuel pour service client bancaire",
      image: "🤖",
      client: "BankAssist",
      technologies: ["NLP", "OpenAI", "WhatsApp API"]
    },
    {
      id: 5,
      title: "Application Mobile FitCoach",
      category: "web",
      type: "Création web",
      description: "Application fitness avec suivi personnalisé",
      image: "💪",
      client: "FitCoach",
      technologies: ["React Native", "Firebase"]
    },
    {
      id: 6,
      title: "Site Vitrine Hôtel Luxe",
      category: "web",
      type: "Création web",
      description: "Site responsive avec réservation en ligne",
      image: "🏨",
      client: "Hôtel Luxe",
      technologies: ["WordPress", "PHP", "MySQL"]
    }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 0 60px',
        marginTop: '-70px'
      }}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Nos Réalisations
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Découvrez nos projets et études de cas
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        {/* Filtres */}
        <Row className="mb-5">
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              {['all', 'web', 'branding', 'marketing', 'ia'].map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? 'primary' : 'outline-primary'}
                  onClick={() => setFilter(cat)}
                  style={{ borderRadius: '50px', padding: '8px 25px' }}
                >
                  {cat === 'all' ? 'Tous' : cat === 'web' ? 'Création web' : cat === 'branding' ? 'Branding' : cat === 'marketing' ? 'Marketing' : 'Solutions IA'}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Projets */}
        <Row>
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="h-100 border-0 shadow-sm" style={{
                transition: 'transform 0.3s',
                borderRadius: '15px',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                  padding: '40px',
                  textAlign: 'center',
                  fontSize: '4rem'
                }}>
                  {project.image}
                </div>
                <Card.Body>
                  <Badge style={{ backgroundColor: '#6366f1', marginBottom: '10px' }}>
                    {project.type}
                  </Badge>
                  <Card.Title style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: '#666' }}>
                    {project.description}
                  </Card.Text>
                  <div style={{ marginTop: '15px' }}>
                    <small style={{ color: '#999' }}>Client: {project.client}</small>
                  </div>
                  <div style={{ marginTop: '15px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" style={{ backgroundColor: '#e9ecef', color: '#495057' }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    style={{ color: '#6366f1', marginTop: '15px', padding: 0 }}
                  >
                    Voir l'étude de cas <FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '12px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Realisations