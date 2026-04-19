import React from 'react'
import './BackgroundAnimation.css'

const BackgroundAnimation = ({ theme }) => {
  return (
    <div className="background-animation">
      <div className="gradient-bg">
        <div className="gradient-layer gradient-layer-1"></div>
        <div className="gradient-layer gradient-layer-2"></div>
        <div className="gradient-layer gradient-layer-3"></div>
      </div>
      <svg className="noise-svg" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>
    </div>
  )
}

export default BackgroundAnimation