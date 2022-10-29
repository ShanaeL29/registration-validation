import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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
  };

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
          onChange={firstNameHandler}
        />
        <input
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
          onChange={lastNameHandler}
        />
        <input
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email"
          onChange={emailHandler}
        />
        <button onSubmit={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default App;
