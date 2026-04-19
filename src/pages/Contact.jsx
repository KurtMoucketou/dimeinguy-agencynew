import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

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
                Contactez-nous
              </h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Un projet ? Une question ? N'hésitez pas à nous contacter
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container style={{ padding: '80px 0' }}>
        <Row>
          {/* Informations de contact */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Informations</h3>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <FaWhatsapp size={24} color="#25D366" />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>WhatsApp Business</span>
                </div>
                <a href="https://wa.me/212600000000" style={{ color: '#25D366', textDecoration: 'none' }}>
                  +212 600 000 000
                </a>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <FaEnvelope size={24} color="#6366f1" />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Email</span>
                </div>
                <a href="mailto:contact@dimeinguy.com" style={{ color: '#6366f1', textDecoration: 'none' }}>
                  contact@dimeinguy.com
                </a>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <FaPhone size={24} color="#6366f1" />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Téléphone</span>
                </div>
                <a href="tel:+212522000000" style={{ color: '#333', textDecoration: 'none' }}>
                  +212 522 000 000
                </a>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <FaMapMarkerAlt size={24} color="#6366f1" />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Adresse</span>
                </div>
                <p style={{ margin: 0, color: '#666' }}>
                  123 Avenue Mohammed V,<br />
                  Casablanca, Maroc
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <FaClock size={24} color="#6366f1" />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Horaires</span>
                </div>
                <p style={{ margin: 0, color: '#666' }}>
                  Lundi - Vendredi: 9h - 18h<br />
                  Samedi: 10h - 14h
                </p>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Suivez-nous</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="#" style={{ color: '#6366f1', fontSize: '24px' }}><FaLinkedin /></a>
                  <a href="#" style={{ color: '#6366f1', fontSize: '24px' }}><FaTwitter /></a>
                  <a href="#" style={{ color: '#6366f1', fontSize: '24px' }}><FaFacebook /></a>
                </div>
              </div>
            </div>
          </Col>

          {/* Formulaire de contact */}
          <Col lg={8}>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Envoyez-nous un message</h3>
              
              {submitted && (
                <Alert variant="success">
                  Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Nom complet *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ padding: '12px' }}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ padding: '12px' }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ padding: '12px' }}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Sujet *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{ padding: '12px' }}
                    />
                  </Col>
                </Row>

                <div className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ padding: '12px' }}
                  />
                </div>

                <Button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '12px 40px',
                    fontWeight: '600'
                  }}
                >
                  Envoyer le message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Carte Google Maps */}
        <Row style={{ marginTop: '60px' }}>
          <Col>
            <div style={{
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
            }}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.587297214532!2d-7.621706684789513!3d33.57334048074032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd3b8c9e7e8b%3A0x8b5a3c9e7e8b5a3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1699999999999!5m2!1sfr!2sma"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact