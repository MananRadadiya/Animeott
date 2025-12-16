// src/AnimeDetails.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const episodes = Array.from({ length: 19 }, (_, i) => i + 1);

const reviews = [
  {
    id: 1,
    name: "Chris Curry",
    time: "1 Hour ago",
    text: `whachikan Just noticed that someone categorized this as belonging to the genre "demons" LOL`,
    avatar: "https://via.placeholder.com/48x48.png?text=C",
  },
  {
    id: 2,
    name: "Lewis Mann",
    time: "5 Hour ago",
    text: "Finally it came out ages ago",
    avatar: "https://via.placeholder.com/48x48.png?text=L",
  },
];

function AnimeDetails() {
  const navigate = useNavigate();

  return (
    <div className="anime-watch-page">
      {/* HERO */}
      <section
        className="watch-hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg')",
        }}
      >
        <div className="watch-hero-overlay">
          <div className="watch-hero-content">
            <h1 className="watch-title">Fate / Stay Night</h1>
            <p className="watch-meta">Action • Fantasy • 24 Episodes • 2025</p>
            <button
              className="watch-play-btn"
              onClick={() => navigate("/watch")}
            >
              ▶ Watch Now
            </button>
          </div>
        </div>
      </section>

      <div className="watch-inner">
        {/* EPISODES */}
        <section className="watch-section">
          <h3 className="watch-section-title">Episodes</h3>

          <div className="episode-grid">
            {episodes.map((ep) => (
              <button key={ep} className="episode-pill">
                Ep {ep.toString().padStart(2, "0")}
              </button>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="watch-section">
          <h3 className="watch-section-title">Reviews</h3>

          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <img src={review.avatar} alt={review.name} className="review-avatar" />
                <div className="review-body">
                  <div className="review-header">
                    <span className="review-name">{review.name}</span>
                    <span className="review-time">{review.time}</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AnimeDetails;
