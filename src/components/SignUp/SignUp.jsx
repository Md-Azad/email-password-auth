import React, { useState } from "react";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmail = (event) => {
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h3>Sign Up page here.</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Your Email" />
        <br></br>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
        />
        <br></br>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
