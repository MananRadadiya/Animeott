import React from "react";
import "./App.css";
import bg from "./images/hero-1.jpg";

export default function AdminPage() {
  return (
    <div className="anime-login-root" style={{ "--bg-img": `url(${bg})` }}>
      {/* HERO */}
      <section className="anime-hero">
        <h1>Admin Dashboard</h1>
        <p>Manage anime, users, and content</p>
      </section>

      {/* MAIN */}
      <div className="anime-container">
        <div className="anime-panel">
          {/* LEFT */}
          <div>
            <h2>Quick Actions</h2>

            <button className="btn" style={{ marginBottom: "1rem" }}>
              Add New Anime
            </button>

            <button className="btn" style={{ marginBottom: "1rem" }}>
              Manage Users
            </button>

            <button className="btn">
              Upload Episodes
            </button>
          </div>

          {/* RIGHT */}
          <div>
            <h2>Admin Info</h2>
            <p className="light-text">
              You are logged in as <strong>Administrator</strong>.
            </p>

            <button className="btn-ghost">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
