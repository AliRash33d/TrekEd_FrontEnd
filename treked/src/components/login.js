import React from 'react';
import appleIcon from './assets/apple-logo.png'; 
import googleIcon from './assets/google.png'; 
import user from './assets/user.png';

const LoginPage = ({ onNavigate }) => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Login Box */}
      <div className="card p-4" style={{ borderRadius: '10px', width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ color: '#008CBA' }}>
          Login to TREK-Ed
        </h2>

        {/* Username or Email Input */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="usernameIcon">
            <img src={user} alt="Username Icon" style={{ width: '20px' }} />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username or Email" 
            aria-label="Username or Email" 
            aria-describedby="usernameIcon" 
          />
        </div>

        {/* Continue Button */}
        <button 
          className="btn btn-primary btn-lg rounded-pill w-100 mb-3" 
          style={{ backgroundColor: '#008CBA', border: 'none' }}
        >
          Continue
        </button>

        {/* Horizontal Line with "or" */}
        <div className="d-flex justify-content-center align-items-center mb-3">
          <hr style={{ width: '45%' }} />
          <span className="mx-2">or</span>
          <hr style={{ width: '45%' }} />
        </div>

        {/* Social Login Buttons */}
        <div className="d-flex flex-column mb-3">
          <button 
            className="btn btn-light d-flex align-items-center mb-2" 
            style={{ 
              border: '1px solid #ccc', 
              borderRadius: '30px', 
              padding: '10px 20px' // Reduced padding to make the button less "fat"
            }}
          >
            <img src={appleIcon} alt="Apple Icon" style={{ width: '20px', marginRight: '10px' }} />
            Continue with Apple
          </button>
          <button 
            className="btn btn-light d-flex align-items-center" 
            style={{ 
              border: '1px solid #ccc', 
              borderRadius: '30px', 
              padding: '10px 20px' // Reduced padding to make the button less "fat"
            }}
          >
            <img src={googleIcon} alt="Google Icon" style={{ width: '20px', marginRight: '10px' }} />
            Continue with Google
          </button>
        </div>

        {/* Don't Have an Account? */}
        <p className="text-center">
          <span>Don't have a TREK-Ed account? </span>
          <button 
            className="btn btn-link p-0" 
            style={{ color: '#008CBA' }} 
            onClick={() => onNavigate('signup')}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
