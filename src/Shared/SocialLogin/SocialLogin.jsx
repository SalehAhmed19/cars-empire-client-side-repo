import React from "react";
import google from "../../img/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-secondary w-25"></div>
        <p className="mt-3 mx-3">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-25"></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary d-block mx-auto w-50"
      >
        <img style={{ width: "20px" }} src={google} alt="" /> Sign in with
        Google
      </button>
      <p className="text-danger text-center">{error?.message}</p>
    </div>
  );
};

export default SocialLogin;
