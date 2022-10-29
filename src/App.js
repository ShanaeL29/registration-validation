import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const firstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const emailHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setIsValid(true);
    }
    setHasSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {hasSubmitted && isValid && (
          <div className="success-message">
            <span>Success! Thank you for registering!</span>
          </div>
        )}
        <input
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
          onChange={firstNameHandler}
        />
        {hasSubmitted && !values.firstName && (
          <span className="error-message">Please enter a first name</span>
        )}

        <input
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
          onChange={lastNameHandler}
        />
        {hasSubmitted && !values.lastName && (
          <span className="error-message">Please enter a last name</span>
        )}

        <input
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
          onChange={emailHandler}
        />
        {/* email will need more specific validation added */}
        {hasSubmitted && !values.email && (
          <span className="error-message">Please enter an email address</span>
        )}

        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
