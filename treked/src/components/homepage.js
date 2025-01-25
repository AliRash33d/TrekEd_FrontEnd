import React from 'react';
import hillClimbingImage from './assets/hill.png';

const HomePage = () => {
  return (
    <div className="container-fluid vh-100 bg-white position-relative" style={{ overflow: 'hidden', paddingBottom: '7rem' }}>
      <div className="row h-100 m-0">
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start px-5 text-center text-lg-start">
          <h1 className="display-4 fw-bold text-center text-md-start" style={{ color: '#008CBA', fontSize: '3rem' }}>
            Educate,<br /> Empower,<br /> Earn!
          </h1>
          <p className="fs-5 mt-3 text-center text-md-start" style={{ fontSize: '1.25rem' }}>
            Trek-Ed offers digital skills training and certification, empowering you to secure new
            job opportunities and achieve financial success.
          </p>
          <div className="text-center text-md-start">
            <button className="btn btn-primary btn-lg rounded-pill mt-4" style={{ backgroundColor: '#008CBA', border: 'none' }}>
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-end align-items-end p-0">
          <img
            src={hillClimbingImage}
            alt="Climber silhouette"
            className="img-fluid position-absolute"
            style={{ height: '96%', right: '0', bottom: '0', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
