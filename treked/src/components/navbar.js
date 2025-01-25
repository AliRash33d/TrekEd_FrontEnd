import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top"
      style={{
        height: '5rem', // Increased height
        borderBottom: '1px solid darkgray', // Horizontal line
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem' }}>
          Trek-Ed {/* Replace this text with your logo image if you obtain one */}
        </a>
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
              <a className="nav-link" href="#">
                Find Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Find Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
              style={{ maxWidth: '300px' }}
            />
          </form>
          <button className="btn btn-outline-primary me-2">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
