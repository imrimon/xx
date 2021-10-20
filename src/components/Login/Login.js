import React from "react";
import useFirebase from "../hooks/useFirebase";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="Login-c">
      <div className="login-container">
        <div className="login-screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <button
                  onClick={handleGoogleLogin}
                  className="button rounded btn-light login__google justify-content-center mb-5"
                >
                  <span className="button__text">Google Sign In</span>

                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <p>
              New to Meidscare?{" "}
              <Link to="/register" className="text-info">
                Create Account
              </Link>
            </p>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Login;
