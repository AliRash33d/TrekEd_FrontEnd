import React from 'react';
import aboutImage from './assets/employee.png'; 

const AboutSection = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa'}}>
      <div className="row align-items-center">
        {/* About Image */}
        <div className="col-lg-6 mb-4 mb-lg-0" style={{paddingTop:'5rem'}}>
          <img
            src={aboutImage}
            alt="About TREK-Ed"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* About Content */}
        <div className="col-lg-6" style={{paddingTop:'5rem'}}>
          <h2 className="mb-4" style={{ color: '#008CBA' }}>
            About <span style={{ fontWeight: 'bold' }}>TREK-Ed</span>
          </h2>
          <p className="lead mb-3">
            TREK-Ed is your all-in-one platform for learning, working, and growing.
            Whether you’re a learner, a professional, or an employer, we provide the
            tools and opportunities to help you succeed in today’s dynamic world.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>For Learners:</strong> Explore top-rated courses, earn certifications, and gain the skills to excel.
            </li>
            <li className="mb-2">
              <strong>For Freelancers:</strong> Connect with clients and showcase your talents to land exciting projects.
            </li>
            <li className="mb-2">
              <strong>For Job Seekers:</strong> Find your dream job with opportunities from leading employers.
            </li>
            <li className="mb-2">
              <strong>For Employers:</strong> Post jobs, discover top talent, and build your dream team.
            </li>
          </ul>
          <button
            className="btn btn-primary rounded-pill mt-3"
            style={{ backgroundColor: '#008CBA', border: 'none' }}
            onClick={() => console.log('Learn More Clicked!')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
