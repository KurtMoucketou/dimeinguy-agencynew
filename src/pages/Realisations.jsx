import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa'

const Realisations = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Site E-commerce TechStore",
      category: "web",
      type: "Création web",
      description: "Plateforme e-commerce complète avec paiement intégré",
      image: "/Logo.png",
      client: "TechStore",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Identité visuelle GreenLife",
      category: "branding",
      type: "Branding",
      description: "Branding complet pour startup éco-responsable",
      image: "/africommerce-consulting.PNG",
      client: "GreenLife",
      technologies: ["Logo", "Charte graphique", "Packaging"],
      link: "#"
    },
    {
      id: 3,
      title: "Campagne Instagram ModeX",
      category: "marketing",
      type: "Marketing digital",
      description: "Campagne d'influence +100K de reach",
      image: "/amak-electricite.png",
      client: "ModeX",
      technologies: ["Social Media", "Influence", "Content"],
      link: "#"
    },
    {
      id: 4,
      title: "Chatbot IA BankAssist",
      category: "ia",
      type: "Solutions IA",
      description: "Assistant virtuel pour service client bancaire",
      image: "/sopri.PNG",
      client: "BankAssist",
      technologies: ["NLP", "OpenAI", "WhatsApp API"],
      link: "#"
    },
    {
      id: 5,
      title: "Application Mobile FitCoach",
      category: "web",
      type: "Application mobile",
      description: "Application fitness avec suivi personnalisé",
      image: "/Logo.png",
      client: "FitCoach",
      technologies: ["React Native", "Firebase"],
      link: "#"
    },
    {
      id: 6,
      title: "Site Vitrine Hôtel Luxe",
      category: "web",
      type: "Site vitrine",
      description: "Site responsive avec réservation en ligne",
      image: "/Logo.png",
      client: "Hôtel Luxe",
      technologies: ["WordPress", "PHP", "MySQL"],
      link: "#"
    }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  // Modal pour les détails
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }} onClick={onClose}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }} onClick={e => e.stopPropagation()}>
          <div style={{ position: 'relative' }}>
            <img 
              src={project.image} 
              alt={project.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
            />
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>
          <div style={{ padding: '20px' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h4>Client: {project.client}</h4>
            <h4>Technologies:</h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} style={{ backgroundColor: '#6366f1' }}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                {/* Image - La correction est ici */}
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa'
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'fill', // 'contain' pour voir l'image entière
                      padding: '20px'
                    }}
                    onError={(e) => {
                      console.error('Erreur chargement image:', project.image)
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;">🏢</div>'
                    }}
                  />
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
                      <Badge key={idx} style={{ backgroundColor: '#e9ecef', color: '#495057', padding: '5px 10px' }}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    style={{ color: '#6366f1', marginTop: '15px', padding: 0 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    Voir l'étude de cas <FaExternalLinkAlt style={{ marginLeft: '5px', fontSize: '12px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}

export default Realisations