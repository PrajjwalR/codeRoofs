import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <span>ULTRA</span>
        <span className="brand-star" aria-hidden="true">★</span>
        <span>VIRAL</span>
      </div>

      <nav className="nav">
        <a href="#">For Fans</a>
        <a href="#">For Talent</a>
        <a href="#">For Brands</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <input className="search" placeholder="Search" />
        <div className="auth">
          <a href="#">Sign Up</a>
          <span>|</span>
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  )
}

export default Header


