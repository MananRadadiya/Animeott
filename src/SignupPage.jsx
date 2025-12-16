// src/SignupPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import bg from "./images/hero-1.jpg";

export default function SignupPage() {
  return (
    <div className="anime-login-root" style={{ "--bg-img": `url(${bg})` }}>
      <section className="anime-hero">
        <h1>Create Account</h1>
        <p>Join the community and get access to exclusive content.</p>
      </section>

      <div className="anime-container">
        <div className="anime-panel">
          {/* LEFT SIDE */}
          <div>
            <h2>Create New Account</h2>

            <div className="field">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="field">
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="field">
              <input type="password" placeholder="Password" />
            </div>

            <div className="field">
              <input type="password" placeholder="Confirm Password" />
            </div>

            <button className="btn">Sign Up</button>

            <div className="center-text">OR</div>

            <div className="socials">
              <button className="fb">Sign up with Facebook</button>
              <button className="google">Sign up with Google</button>
              <button className="tw">Sign up with Twitter</button>
            </div>

            <p style={{ marginTop: "1rem" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "inherit", textDecoration: "underline" }}>
                Log in here
              </Link>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2>Why create an account?</h2>
            <p className="light-text">
              Access exclusive posts, comment on articles, save your favorites, and more.
            </p>
            <Link to="/login">
              <button className="btn-ghost">Back to Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
