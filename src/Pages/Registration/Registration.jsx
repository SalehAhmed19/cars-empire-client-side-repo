import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    setEmail(email);
    setPassword(password);
    createUserWithEmailAndPassword(email, password);
  };
  if (loading) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const toggleToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2 className="fw-bold text-success text-center">Register Here</h2>
      <div className="w-75 mx-auto border p-3 rounded-3 bg-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Accept Terms and Conditions of Cars-Empire"
            />
          </Form.Group>
          <Button className="w-100 d-block h-2" variant="success" type="submit">
            Login
          </Button>
        </Form>
        <p className="text-center pt-3">
          Already have an account?{" "}
          <Button
            onClick={toggleToLogin}
            className="text-success"
            variant="transparent"
          >
            Please Login
          </Button>
          <p className="text-danger text-center">{error?.message}</p>
        </p>
      </div>
    </div>
  );
};

export default Registration;
