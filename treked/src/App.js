import React, { useState } from 'react';
import Navbar from './components/navbar.js';
import HomePage from './components/homepage.js';
import SignUpPage from './components/signup1.js';
import SignUpBox from './components/signup2.js';
import LoginPage from './components/login.js'; // Import the login page component
import AboutSection from './components/about.js';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
        {currentPage === 'signup' && <SignUpPage onNavigate={handleNavigation} />}
        {currentPage === 'signup2' && <SignUpBox onNavigate={handleNavigation} />}
        {currentPage === 'login' && <LoginPage onNavigate={handleNavigation} />} {/* Handle login page */}
        {currentPage === 'about' && <AboutSection onNavigate={handleNavigation} />}
      </main>
    </div>
  );
}

export default App;
