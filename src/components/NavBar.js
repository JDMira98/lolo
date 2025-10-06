import React from 'react';

export default function NavBar({ onHome }) {
  return (
    <header className="app-navbar" role="banner">
      {/* <div className="navbar-left">
        <button className="menu" aria-label="Open menu">☰</button>
      </div> */}

      <div className="navbar-center">
        <div className="brand">HORA INCIERTA</div>
      </div>

      <div className="navbar-right">
        <button className="home-btn" onClick={onHome} aria-label="Go to first slide">Inicio</button>
      </div>
    </header>
  );
}
