import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Hero = () => {
  const slides = [
    {
      title: "Transformez votre communication digitale",
      subtitle: "Solutions innovantes pour votre succès",
      cta1: "Demander un devis",
      cta2: "Nos services",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "L'IA au service de votre entreprise",
      subtitle: "Automatisation intelligente et agents IA",
      cta1: "Découvrir nos solutions IA",
      cta2: "Contactez-nous",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Créez l'identité qui vous ressemble",
      subtitle: "Branding, web, marketing - Tout-en-un",
      cta1: "Voir nos réalisations",
      cta2: "Pack spécial startup",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ]

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      effect="fade"
      style={{ height: '100vh', width: '100%' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={{
            background: slide.bg,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <Container>
              <Row className="text-center text-white">
                <Col lg={8} className="mx-auto">
                  <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    animation: 'fadeInUp 1s ease'
                  }}>
                    {slide.title}
                  </h1>
                  <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '2rem',
                    opacity: 0.9
                  }}>
                    {slide.subtitle}
                  </p>
                  <div>
                    <Button 
                      variant="light" 
                      size="lg" 
                      className="me-3"
                      style={{
                        borderRadius: '50px',
                        padding: '12px 30px',
                        fontWeight: '600'
                      }}
                    >
                      {slide.cta1}
                    </Button>
                    <Button 
                      variant="outline-light" 
                      size="lg"
                      style={{
                        borderRadius: '50px',
                        padding: '12px 30px',
                        fontWeight: '600'
                      }}
                    >
                      {slide.cta2}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero