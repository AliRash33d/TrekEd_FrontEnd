import React from 'react';
import employerIcon from './assets/businessman.png';
import employeeIcon from './assets/employee.png';
import learnerIcon from './assets/book.png';
import courseSellerIcon from './assets/instructor.png';

const SignUpPage = ({ onNavigate }) => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center mb-4" style={{ color: '#008CBA' }}>
        Join as an Employer, Employee, Learner or Course Seller
      </h2>

      <div className="row w-100">
        {/* Employer */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card p-3 d-flex flex-column align-items-start">
            <img src={employerIcon} alt="Employer Icon" className="mb-2" style={{ width: '40px' }} />
            <h5>Employer?</h5>
            <p>I'm a client, hiring for a project</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="employer"
              />
              <label className="form-check-label" htmlFor="employer">
                Select
              </label>
            </div>
          </div>
        </div>

        {/* Employee */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card p-3 d-flex flex-column align-items-start">
            <img src={employeeIcon} alt="Employee Icon" className="mb-2" style={{ width: '40px' }} />
            <h5>Employee?</h5>
            <p>I'm a freelancer, looking for work.</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="employee"
              />
              <label className="form-check-label" htmlFor="employee">
                Select
              </label>
            </div>
          </div>
        </div>

        {/* Learner */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card p-3 d-flex flex-column align-items-start">
            <img src={learnerIcon} alt="Learner Icon" className="mb-2" style={{ width: '40px' }} />
            <h5>Learner?</h5>
            <p>I'm a student, seeking to gain new skills</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="learner"
              />
              <label className="form-check-label" htmlFor="learner">
                Select
              </label>
            </div>
          </div>
        </div>

        {/* Course Seller */}
        <div className="col-lg-6 col-md-12 mb-3">
          <div className="card p-3 d-flex flex-column align-items-start">
            <img src={courseSellerIcon} alt="Course Seller Icon" className="mb-2" style={{ width: '40px' }} />
            <h5>Course Seller?</h5>
            <p>I'm an instructor, offering my courses</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="courseSeller"
              />
              <label className="form-check-label" htmlFor="courseSeller">
                Select
              </label>
            </div>
          </div>
        </div>
      </div>

      <button 
        className="btn btn-primary btn-lg rounded-pill mt-4" 
        style={{ backgroundColor: '#008CBA', border: 'none' }}
        onClick={() => onNavigate('signup2')} // Navigate to SignUpBox
      >
        Create Account
      </button>
      <p className="mt-3">
        Already have an account? <a href="#" style={{ color: '#008CBA' }}>Log In</a>
      </p>
    </div>
  );
};

export default SignUpPage;
