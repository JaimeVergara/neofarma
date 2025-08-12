import React, { useState } from 'react';

export default function Nav() {
  const [active, setActive] = useState("#");

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Acerca de", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Galeria", href: "#gallery" },
    { label: "Equipo", href: "#team" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/images/neofarma.jpg"
            alt="Logo NeoFarma"
            className="img-fluid mx-auto d-block"
            style={{ maxWidth: '150px' }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  className={`nav-link ${active === item.href ? 'active-link' : ''}`}
                  href={item.href}
                  onClick={() => setActive(item.href)}
                >
                  <strong>{item.label}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
