import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        marginLeft: '15px',
        color: theme === 'light' ? '#1a1a1a' : '#ffffff'
      }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle