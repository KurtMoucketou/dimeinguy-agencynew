import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { FaClock, FaLightbulb, FaHandshake, FaRocket, FaUsers, FaGlobe } from 'react-icons/fa'

const About = () => {
  // Équipe
  const team = [
    { name: "Jean Dupont", role: "CEO & Fondateur", icon: "👨‍💼", description: "Expert en transformation digitale" },
    { name: "Marie Curie", role: "Directrice IA", icon: "👩‍🔬", description: "Spécialiste en intelligence artificielle" },
    { name: "Ahmed Benali", role: "Lead Designer", icon: "🎨", description: "Créatif passionné" },
    { name: "Sophie Martin", role: "Marketing Director", icon: "📊", description: "Stratège marketing" }
  ]

  // Valeurs
  const values = [
    { icon: <FaRocket size={40} />, title: "Innovation", desc: "À la pointe des technologies" },
    { icon: <FaHandshake size={40} />, title: "Intégrité", desc: "Transparence totale" },
    { icon: <FaLightbulb size={40} />, title: "Créativité", desc: "Solutions uniques" },
    { icon: <FaUsers size={40} />, title: "Collaboration", desc: "Partenariat gagnant" },
    { icon: <FaGlobe size={40} />, title: "Vision globale", desc: "Impact international" },
    { icon: <FaClock size={40} />, title: "Réactivité", desc: "Support 24/7" }
  ]

  // Méthodologie
  const methodology = [
    { step: "01", title: "Audit & Analyse", desc: "Nous analysons vos besoins et objectifs", icon: "📊" },
    { step: "02", title: "Stratégie", desc: "Élaboration d'une stratégie sur mesure", icon: "🎯" },
    { step: "03", title: "Création", desc: "Design et développement innovants", icon: "🎨" },
    { step: "04", title: "Déploiement", desc: "Lancement et intégration", icon: "🚀" },
    { step: "05", title: "Suivi & Optimisation", desc: "Accompagnement continu", icon: "📈" }
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
                À propos de DIMEINGUY AGENCY
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Votre partenaire de confiance pour la transformation digitale et l'innovation
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Histoire de l'agence */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>Notre Histoire</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Fondée en 2020, DIMEINGUY AGENCY est née d'une vision : démocratiser l'accès aux technologies 
                digitales et à l'intelligence artificielle pour les entreprises de toutes tailles.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
                En seulement 4 ans, nous avons accompagné plus de 100 entreprises dans leur transformation 
                digitale, avec une spécialisation unique dans l'intégration de solutions IA innovantes.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
                Aujourd'hui, notre agence rayonne sur 3 continents (Afrique, Europe, Moyen-Orient) 
                et continue d'innover pour offrir le meilleur de la technologie à nos clients.
              </p>
            </Col>
            <Col lg={6}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ fontWeight: 'bold' }}>100+</h3>
                <p>Clients accompagnés</p>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '2rem' }}>🌍</div>
                <h3 style={{ fontWeight: 'bold' }}>3</h3>
                <p>Continents</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Notre Mission</h3>
                <p style={{ lineHeight: '1.8' }}>
                  Accompagner les entreprises dans leur transformation digitale en proposant des solutions 
                  innovantes, accessibles et performantes, intégrant le meilleur de l'intelligence artificielle 
                  pour maximiser leur croissance et leur compétitivité.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                height: '100%'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Notre Vision</h3>
                <p style={{ lineHeight: '1.8' }}>
                  Devenir le leader africain de la communication digitale augmentée par l'IA, en créant 
                  un écosystème où technologie et créativité se rencontrent pour réinventer l'expérience 
                  client et propulser les entreprises vers l'avenir.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Valeurs */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Nos Valeurs</h2>
          <Row>
            {values.map((value, index) => (
              <Col md={4} key={index} className="mb-4">
                <div className="text-center" style={{
                  padding: '30px',
                  borderRadius: '15px',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ color: '#6366f1', marginBottom: '1rem' }}>{value.icon}</div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{value.title}</h4>
                  <p style={{ color: '#666' }}>{value.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Équipe */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Notre Équipe</h2>
          <Row>
            {team.map((member, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 text-center border-0 shadow-sm">
                  <Card.Body>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.icon}</div>
                    <Card.Title style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {member.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ color: '#6366f1' }}>
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Méthodologie */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ fontWeight: 'bold' }}>Notre Méthodologie</h2>
          <Row>
            {methodology.map((method, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <div style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  position: 'relative',
                  borderLeft: `4px solid #6366f1`
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '20px',
                    background: '#6366f1',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {method.step}
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{method.icon}</div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{method.title}</h4>
                    <p style={{ color: '#666', marginBottom: 0 }}>{method.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Chiffres clés */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 0'
      }}>
        <Container>
          <Row>
            <Col md={3} className="text-center mb-4 mb-md-0">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>100+</h2>
              <p>Projets réalisés</p>
            </Col>
            <Col md={3} className="text-center mb-4 mb-md-0">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>50+</h2>
              <p>Clients satisfaits</p>
            </Col>
            <Col md={3} className="text-center mb-4 mb-md-0">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>4</h2>
              <p>Années d'expertise</p>
            </Col>
            <Col md={3} className="text-center">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>24/7</h2>
              <p>Support disponible</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About