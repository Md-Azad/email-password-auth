import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const RegisterRb = () => {
  const [registerError, setRegisterError] = useState("");
  const [valid, setValid] = useState("");

  const auth = getAuth(app);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRegisterError("");
    setValid("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!/(?=.*\d)/.test(password)) {
      setValid("Password should contain at least one digit");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setValid("Password should contain at least one UpperCase");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setValid("Password should contain at least one speceial character");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error.message);
      });
  };
  return (
    <div className="w-50  mx-auto mt-5">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>{registerError}</p>
      <p className="text-danger">{valid}</p>
    </div>
  );
};

export default RegisterRb;
