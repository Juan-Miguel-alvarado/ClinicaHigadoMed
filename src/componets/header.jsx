import { useState } from "react";
import logoImg from "../assets/Logo.png";
import "../App.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <img className="header_logo" src={logoImg} alt="Logo" />

      {/* Botón hamburguesa (solo aparece en móvil) */}
      <button 
        className="hamburger_btn" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
      </button>

      {/* Navegación */}
      <nav className={`header_nav ${menuOpen ? "open" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#locations" onClick={() => setMenuOpen(false)}>Ubicación</a>
      </nav>

      {/* Botón cita (solo escritorio) */}
      <a href="#locations" className="defauld_btn desktop_only">
        <i className="bi bi-telephone"></i> Agenda tu cita
      </a>
    </header>
  );
}

export default Header;
