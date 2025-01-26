import React from 'react';
import appleIcon from './assets/apple-logo.png';
import googleIcon from './assets/google.png';

const SignUpBox = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center"
    style={{paddingTop:'25rem'}}
    >
      <div className="card p-4 rounded shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4" style={{ color: '#008CBA' }}>
          Sign Up
        </h2>

        {/* Apple and Google Buttons */}
        <div className="d-flex flex-column mb-4">
          <button className="btn btn-outline-dark mb-2 d-flex align-items-center justify-content-center rounded-pill">
            <img src={appleIcon} alt="Apple Icon" style={{ width: '20px', marginRight: '8px' }} />
            Continue with Apple
          </button>
          <button className="btn btn-outline-dark mb-2 d-flex align-items-center justify-content-center rounded-pill">
            <img src={googleIcon} alt="Google Icon" style={{ width: '20px', marginRight: '8px' }} />
            Continue with Google
          </button>
        </div>

        {/* Horizontal line with 'or' */}
        <div className="text-center mb-4">
          <hr className="border-dark" style={{ width: '100px', display: 'inline-block' }} />
          <span className="mx-2">or</span>
          <hr className="border-dark" style={{ width: '100px', display: 'inline-block' }} />
        </div>

        {/* First Name and Last Name */}
        <div className="d-flex mb-3">
          <div className="w-50 pr-2">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" id="firstName" className="form-control" placeholder="First Name" />
          </div>
          <div className="w-50 pl-2">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" id="lastName" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        {/* Work Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Work Email</label>
          <input type="email" id="email" className="form-control" placeholder="Email" />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" />
        </div>

        {/* Country */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input type="text" id="country" className="form-control" placeholder="Country" />
        </div>

        {/* Terms and Conditions */}
        <div className="mb-3">
          <input type="checkbox" id="terms" className="form-check-input" />
          <label htmlFor="terms" className="form-check-label">
            Yes, I understand and agree to the TREK-Ed Terms of Service, including the User Agreement and Privacy Policy.
          </label>
        </div>

        {/* Create Account Button */}
        <button className="btn btn-primary btn-lg rounded-pill w-100 mb-3" style={{ backgroundColor: '#008CBA', border: 'none' }}>
          Create my Account
        </button>

        {/* Login Link */}
        <p className="text-center">
          Already have an account? <a href="#" style={{ color: '#008CBA' }}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpBox;
