import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <FaFilm className="logo-icon" />
          <span className="logo-text">Spoiler-Safe Reviews</span>
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Reviews
          </Link>
          <Link 
            to="/create" 
            className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}
          >
            Write Review
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
