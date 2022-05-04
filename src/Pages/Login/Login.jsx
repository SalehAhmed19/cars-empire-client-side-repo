import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const toggleToRegister = () => {
    navigate("/registration");
  };
  const handleSignin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setEmail(email);
    setPassword(password);
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://protected-lake-29761.herokuapp.com/login",
      { email }
    );
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please enter your email");
    }
  };
  return (
    <div>
      <h2 className="text-success fw-bold text-center">Login</h2>
      <div className="w-75 mx-auto border p-3 rounded-3 bg-light">
        <Form onSubmit={handleSignin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter email"
            />
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
          <p className="text-center mt-3">
            Forgot Password?{" "}
            <span>
              <button
                onClick={resetPassword}
                className="btn btn-transparent text-success"
              >
                Reset Password
              </button>
            </span>
          </p>
        </Form>
        <p className="text-center">
          New to Cars-Empire?{" "}
          <Button
            onClick={toggleToRegister}
            className="text-success"
            variant="transparent"
          >
            Please Register
          </Button>
        </p>
        <p className="text-danger text-center">{error?.message}</p>
      </div>
      <SocialLogin />
    </div>
  );
};

export default Login;
