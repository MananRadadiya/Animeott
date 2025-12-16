// src/Popular.jsx
import React from "react";
import "./App.css";

// Popular show images
import pop1 from "./images/popular-1.jpg";
import pop2 from "./images/popular-2.jpg";
import pop3 from "./images/popular-3.jpg";
import pop4 from "./images/popular-4.jpg";
import pop5 from "./images/popular-5.jpg";
import pop6 from "./images/popular-6.jpg";

// Comment images
import c1 from "./images/comment-1.jpg";
import c2 from "./images/comment-2.jpg";
import c3 from "./images/comment-3.jpg";
import c4 from "./images/comment-4.jpg";
import c5 from "./images/comment-2.jpg";

const popularShows = [
  { id: 1, title: "Sen to Chihiro no Kamikakushi", image: pop1, tags: ["Active", "Movie"] },
  { id: 2, title: "Kizumonogatari III: Reiket su-hen", image: pop2, tags: ["Active", "Movie"] },
  { id: 3, title: "Shirogane Tamashii hen Kouhan sen", image: pop3, tags: ["Active", "Movie"] },
  { id: 4, title: "Rurouni Kenshin: Meiji Kenkaku Romantan", image: pop4, tags: ["Active", "Movie"] },
  { id: 5, title: "Mushishi Zoku Shou 2nd Season", image: pop5, tags: ["Active", "Movie"] },
  { id: 6, title: "Monogatari Series: Second Season", image: pop6, tags: ["Active", "Movie"] },
];

const newComments = [
  { id: 1, title: "The Seven Deadly Sins: Wrath of the Gods", image: c1, views: "19,141 Views" },
  { id: 2, title: "Shirogane Tamashii hen Kouhan sen", image: c2, views: "19,141 Views" },
  { id: 3, title: "Kizumonogatari III: Reiket su-hen", image: c3, views: "19,141 Views" },
  { id: 4, title: "Monogatari Series: Second Season", image: c4, views: "19,141 Views" },
  { id: 5, title: "Another Cool Anime Title", image: c5, views: "19,141 Views" },
];

function Popular() {
  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <h2>POPULAR SHOWS</h2>
          <button className="view-all-btn">
            VIEW ALL <span>→</span>
          </button>
        </div>

        <div className="popular-layout">
          {/* LEFT: 6 cards grid */}
          <div className="popular-grid">
            {popularShows.map((show) => (
              <article className="anime-card" key={show.id}>
                <div className="anime-card-thumb">
                  <img src={show.image} alt={show.title} />
                  <span className="episode-badge">18 / 18</span>

                  <div className="card-meta">
                    <span>💬 11</span>
                    <span>👁 9141</span>
                  </div>
                </div>

                <div className="anime-card-body">
                  <div className="anime-card-tags">
                    {show.tags.map((tag) => (
                      <span className="tag-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="anime-card-title">{show.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: New comment list */}
          <aside className="comment-sidebar">
            <h3 className="comment-sidebar-title">NEW COMMENT</h3>

            <ul className="comment-list">
              {newComments.map((item) => (
                <li className="comment-item" key={item.id}>
                  <div className="comment-thumb">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="comment-content">
                    <div className="comment-tags">
                      <span className="tag-pill">Active</span>
                      <span className="tag-pill">Movie</span>
                    </div>
                    <h4 className="comment-title">{item.title}</h4>
                    <p className="comment-views">👁 {item.views}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Popular;
