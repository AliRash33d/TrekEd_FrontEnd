import React, { useState } from 'react';
import Navbar from './components/navbar.js';
import HomePage from './components/homepage.js';
import SignUpPage from './components/signup1.js';
import SignUpBox from './components/signup2.js';
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
        {currentPage === 'signup2' && <SignUpBox />} {/* Show SignUpBox when currentPage is 'signup2' */}
      </main>
    </div>
  );
}

export default App;
