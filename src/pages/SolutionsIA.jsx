import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Badge, Form, InputGroup } from 'react-bootstrap'
import { FaSearch, FaCalendar, FaUser, FaTag, FaArrowRight, FaBookOpen, FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  // Articles du blog
  const articles = [
    {
      id: 1,
      title: "Comment l'IA transforme le marketing digital en 2024",
      excerpt: "Découvrez comment l'intelligence artificielle révolutionne les stratégies marketing et comment votre entreprise peut en bénéficier.",
      category: "Intelligence artificielle",
      date: "15 Décembre 2024",
      author: "Jean Dupont",
      readTime: "8 min",
      image: "🤖",
      icon: <FaRobot />,
      tags: ["IA", "Marketing Digital", "Innovation"]
    },
    {
      id: 2,
      title: "Les clés d'une stratégie de branding réussie",
      excerpt: "Apprenez les fondamentaux pour créer une identité de marque forte et mémorable qui vous démarque de la concurrence.",
      category: "Marketing digital",
      date: "10 Décembre 2024",
      author: "Sophie Martin",
      readTime: "6 min",
      image: "🎨",
      icon: <FaLightbulb />,
      tags: ["Branding", "Identité", "Stratégie"]
    },
    {
      id: 3,
      title: "Transformation digitale : 5 erreurs à éviter",
      excerpt: "Les pièges courants dans la transformation digitale et comment les contourner pour réussir votre transition.",
      category: "Transformation digitale",
      date: "5 Décembre 2024",
      author: "Ahmed Benali",
      readTime: "10 min",
      image: "🔄",
      icon: <FaChartLine />,
      tags: ["Transformation", "Digital", "Conseils"]
    },
    {
      id: 4,
      title: "Les tendances web design pour 2025",
      excerpt: "Découvrez les tendances qui façonneront le design web dans les années à venir.",
      category: "Marketing digital",
      date: "28 Novembre 2024",
      author: "Marie Curie",
      readTime: "7 min",
      image: "💻",
      icon: <FaBookOpen />,
      tags: ["Web Design", "Tendances", "UI/UX"]
    },
    {
      id: 5,
      title: "Agents IA : Automatisez vos processus métier",
      excerpt: "Comment les agents IA peuvent optimiser vos opérations et augmenter votre productivité.",
      category: "Intelligence artificielle",
      date: "20 Novembre 2024",
      author: "Jean Dupont",
      readTime: "9 min",
      image: "🤖",
      icon: <FaRobot />,
      tags: ["IA", "Automatisation", "Productivité"]
    },
    {
      id: 6,
      title: "Guide complet du SEO en 2024",
      excerpt: "Maîtrisez les techniques SEO pour améliorer votre visibilité sur Google.",
      category: "Marketing digital",
      date: "15 Novembre 2024",
      author: "Sophie Martin",
      readTime: "12 min",
      image: "📈",
      icon: <FaChartLine />,
      tags: ["SEO", "Visibilité", "Trafic"]
    }
  ]

  // Catégories avec compteurs
  const categories = [
    { name: "Tous", count: articles.length, icon: "📚" },
    { name: "Intelligence artificielle", count: articles.filter(a => a.category === "Intelligence artificielle").length, icon: "🤖" },
    { name: "Marketing digital", count: articles.filter(a => a.category === "Marketing digital").length, icon: "📊" },
    { name: "Transformation digitale", count: articles.filter(a => a.category === "Transformation digitale").length, icon: "🔄" }
  ]

  // Filtrer les articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
                Blog & Ressources
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                Découvrez nos articles, guides et conseils pour réussir votre transformation digitale
              </p>
              
              {/* Barre de recherche */}
              <InputGroup style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Form.Control
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: '50px 0 0 50px', padding: '12px 20px' }}
                />
                <Button 
                  variant="light" 
                  style={{ borderRadius: '0 50px 50px 0', padding: '12px 24px' }}
                >
                  <FaSearch />
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ marginTop: '-30px', marginBottom: '80px' }}>
        <Row>
          {/* Sidebar - Catégories */}
          <Col lg={3} className="mb-4">
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              position: 'sticky',
              top: '100px'
            }}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                Catégories
              </h4>
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{
                    padding: '12px 15px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    backgroundColor: selectedCategory === category.name ? '#6366f1' : 'transparent',
                    color: selectedCategory === category.name ? 'white' : '#333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span style={{ marginRight: '10px' }}>{category.icon}</span>
                    <span>{category.name}</span>
                  </div>
                  <Badge 
                    style={{
                      backgroundColor: selectedCategory === category.name ? 'white' : '#6366f1',
                      color: selectedCategory === category.name ? '#6366f1' : 'white'
                    }}
                  >
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </Col>

          {/* Articles */}
          <Col lg={9}>
            {filteredArticles.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px',
                background: '#f8f9fa',
                borderRadius: '15px'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <h3>Aucun article trouvé</h3>
                <p>Essayez une autre recherche ou catégorie</p>
              </div>
            ) : (
              <Row>
                {filteredArticles.map((article) => (
                  <Col lg={6} key={article.id} className="mb-4">
                    <Card className="h-100 border-0 shadow-sm" style={{
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      cursor: 'pointer',
                      borderRadius: '15px',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                        padding: '30px',
                        textAlign: 'center',
                        fontSize: '4rem'
                      }}>
                        {article.image}
                      </div>
                      <Card.Body>
                        <div style={{ marginBottom: '15px' }}>
                          <Badge style={{ backgroundColor: '#6366f1', marginRight: '10px' }}>
                            {article.category}
                          </Badge>
                          <small className="text-muted">
                            <FaCalendar style={{ marginRight: '5px' }} />
                            {article.date}
                          </small>
                        </div>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '15px' }}>
                          {article.title}
                        </Card.Title>
                        <Card.Text style={{ color: '#666', lineHeight: '1.6' }}>
                          {article.excerpt}
                        </Card.Text>
                        <div style={{ marginTop: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                            <FaUser style={{ marginRight: '8px', color: '#6366f1' }} />
                            <small style={{ marginRight: '15px' }}>{article.author}</small>
                            <FaBookOpen style={{ marginRight: '8px', color: '#6366f1' }} />
                            <small>{article.readTime} de lecture</small>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                            {article.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" style={{ backgroundColor: '#e9ecef', color: '#495057' }}>
                                <FaTag style={{ marginRight: '5px', fontSize: '10px' }} />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            variant="link" 
                            style={{ 
                              color: '#6366f1', 
                              textDecoration: 'none', 
                              padding: '0',
                              fontWeight: '600'
                            }}
                          >
                            Lire l'article <FaArrowRight style={{ marginLeft: '5px' }} />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            {/* Pagination */}
            {filteredArticles.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Button 
                  variant="outline-primary" 
                  style={{ margin: '0 5px', borderRadius: '50px' }}
                >
                  Précédent
                </Button>
                <Button 
                  variant="primary" 
                  style={{ margin: '0 5px', borderRadius: '50px' }}
                >
                  1
                </Button>
                <Button 
                  variant="outline-primary" 
                  style={{ margin: '0 5px', borderRadius: '50px' }}
                >
                  2
                </Button>
                <Button 
                  variant="outline-primary" 
                  style={{ margin: '0 5px', borderRadius: '50px' }}
                >
                  3
                </Button>
                <Button 
                  variant="outline-primary" 
                  style={{ margin: '0 5px', borderRadius: '50px' }}
                >
                  Suivant
                </Button>
              </div>
            )}
          </Col>
        </Row>

        {/* Newsletter Section */}
        <section style={{
          marginTop: '60px',
          padding: '60px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <Row>
            <Col lg={8} className="mx-auto">
              <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Restez informé des dernières tendances
              </h3>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Inscrivez-vous à notre newsletter pour recevoir nos meilleurs articles et conseils
              </p>
              <InputGroup style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Form.Control
                  type="email"
                  placeholder="Votre email"
                  style={{ borderRadius: '50px 0 0 50px', padding: '12px 20px' }}
                />
                <Button 
                  variant="light" 
                  style={{ borderRadius: '0 50px 50px 0', padding: '12px 30px', fontWeight: '600' }}
                >
                  S'abonner
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}

export default Blog