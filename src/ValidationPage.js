import React, { useState } from 'react';
import ValidationDetailsPage from './ValidationDetailsPage';
import './ValidationPage.css'; // Import the CSS file for styling




const ValidationPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phnumber:'',
    location:'',
    // Add more fields as per your requirement
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation logic here
    setIsSubmitted(true);
  };

  const isFormValid = userDetails.name && userDetails.email && userDetails.phnumber && userDetails.location; // Add more conditions as per your requirement

  return (
    <div className="validation-page">
      {!isSubmitted ? (
        <>
        <h1 className="validation-page-title">User Details Validation</h1>
          <form onSubmit={handleSubmit} className="validation-form">
            <label className="validation-label">
              Name:
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="validation-label">
              Email:
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="validation-label">
              Phone Number:
              <input
                type="text"
                name="phnumber"
                value={userDetails.phnumber}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="validation-label">
              Location:
              <input
                type="text"
                name="location"
                value={userDetails.location}
                onChange={handleChange}
              />
            </label>
            <br />
            {/* Add more fields as per your requirement */}
            <button type="submit" disabled={!isFormValid}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <ValidationDetailsPage userDetails={userDetails} />
      )}
    </div>
  );
};

export default ValidationPage;
