import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const toggleToRegister = () => {
    navigate("/registration");
  };
  const handleSignin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setEmail(email);
    setPassword(password);
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <h2 className="text-success fw-bold text-center">Login</h2>
      <div className="w-75 mx-auto border p-3 rounded-3 bg-light">
        <Form onSubmit={handleSignin}>
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
          <Button className="w-100 d-block h-2" variant="success" type="submit">
            Login
          </Button>
        </Form>
        <p className="text-center pt-3">
          New to Cars-Empire?{" "}
          <Button
            onClick={toggleToRegister}
            className="text-success"
            variant="transparent"
          >
            Please Register
          </Button>
          <p className="text-danger text-center">{error?.message}</p>
        </p>
      </div>
    </div>
  );
};

export default Login;
