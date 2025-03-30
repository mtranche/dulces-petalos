import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Go to homepage">
        <img src={logo} alt="Dulces Pétalos" className="Logo Dulces Pétalos" />
      </Link>
    </header>
  );
}

export default Header;
