import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import bg from "./images/hero-1.jpg";

export default function LoginPage() {
  return (
    <div
      className="anime-login-root"
      style={{ "--bg-img": `url(${bg})` }}
    >
      {/* HERO */}
      <section className="anime-hero">
        <h1>Login</h1>
        <p>Welcome to the official Anime blog.</p>
      </section>

      {/* MAIN */}
      <div className="anime-container">
        <div className="anime-panel">
          {/* LEFT SIDE */}
          <div>
            <h2>Login</h2>

            <div className="field">
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="field">
              <input type="password" placeholder="Password" />
            </div>

            <button className="btn">Login Now</button>

            {/* ADMIN LOGIN */}
            <Link to="/admin">
              <button
                className="btn-ghost"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                Login as Admin
              </button>
            </Link>

            <div className="center-text">OR</div>

            <div className="socials">
              <button className="fb">Sign in with Facebook</button>
              <button className="google">Sign in with Google</button>
              <button className="tw">Sign in with Twitter</button>
            </div>

            <p style={{ marginTop: "1rem" }}>
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Create one here
              </Link>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2>New here?</h2>
            <p className="light-text">
              Register now to get access to exclusive content.
            </p>

            <Link to="/signup">
              <button className="btn-ghost">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
