import React from 'react';
import logo from './assets/logoo.png';

const Navbar = ({ onNavigate }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top"
      style={{
        height: '5rem',
        borderBottom: '1px solid darkgray',
        zIndex: 50,
      }}
    >
      <div className="container-fluid">
          <img 
            src={logo} 
            alt="Trek-Ed Logo" 
            style={{ height: '50px', marginRight: '10px' }}
            onClick={() => onNavigate('home')}
          />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavigate('signup')}
              >
                Find Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavigate('signup')}
              >
                Find Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => onNavigate('about')}
              >
                About
              </a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ maxWidth: '200px' }}
            />
          </form>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => onNavigate('login')}
          >
            Log In
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
