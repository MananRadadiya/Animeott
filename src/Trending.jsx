import React from "react";
import "./App.css";

// 🔁 replace these with your real image paths
import borutoImg from "./images/trend-1.jpg";
import sevenDeadlyImg from "./images/trend-2.jpg";
import gintamaImg from "./images/trend-3.jpg";
import kyojinImg from "./images/trend-4.jpg";
import abyssImg from "./images/trend-5.jpg";
import codeGeassImg from "./images/trend-6.jpg";

import borutoWideImg from "./images/trend-1.jpg";
import sevenDeadlyWideImg from "./images/trend-3.jpg";
import saoWideImg from "./images/trend-4.jpg";
import fateWideImg from "./images/trend-6.jpg";

const trendingData = [
  {
    id: 1,
    img: borutoImg,
    title: "The Seven Deadly Sins: Wrath of the Gods",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
  {
    id: 2,
    img: gintamaImg,
    title: "Gintama Movie 2: Kanketsu-hen",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
  {
    id: 3,
    img: kyojinImg,
    title: "Shingeki no Kyojin Season 3 Part 2",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
  {
    id: 4,
    img: abyssImg,
    title: "Fullmetal Alchemist: Brotherhood",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
  {
    id: 5,
    img: codeGeassImg,
    title: "Shiratorizawa Gakuen Koukou",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
  {
    id: 6,
    img: sevenDeadlyImg,
    title: "Code Geass: Hangyaku no Lelouch R2",
    ep: "18 / 18",
    comments: 11,
    views: 9141,
    tags: ["Active", "Movie"],
  },
];

const topViewsData = [
  {
    id: 1,
    img: borutoWideImg,
    ep: "18 / ?",
    views: 9141,
    title: "Boruto: Naruto Next Generations",
  },
  {
    id: 2,
    img: sevenDeadlyWideImg,
    ep: "18 / ?",
    views: 9141,
    title: "The Seven Deadly Sins: Wrath of the Gods",
  },
  {
    id: 3,
    img: saoWideImg,
    ep: "18 / ?",
    views: 9141,
    title: "Sword Art Online Alicization: War of Underworld",
  },
  {
    id: 4,
    img: fateWideImg,
    ep: "18 / ?",
    views: 9141,
    title: "Fate/stay night: Heaven's Feel",
  },
];

const Trending = () => {
  return (
    <section className="trending-section">
      {/* top row: titles + filters */}
      <div className="trending-top-row">
        <h2 className="section-title">TRENDING NOW</h2>

        <button className="view-all-link">VIEW ALL →</button>

        <div className="top-views-top">
          <h2 className="section-title">TOP VIEWS</h2>
          <div className="top-views-filters">
            <button className="filter-btn active">Day</button>
            <button className="filter-btn">Week</button>
            <button className="filter-btn">Month</button>
            <button className="filter-btn">Years</button>
          </div>
        </div>
      </div>

      {/* main grid: left 6 cards, right top views column */}
      <div className="trending-main">
        {/* LEFT: 6 cards grid */}
        <div className="trending-grid">
          {trendingData.map((item) => (
            <article key={item.id} className="anime-card">
              <div className="anime-card-image-wrapper">
                <span className="episode-badge">{item.ep}</span>
                <img src={item.img} alt={item.title} className="anime-image" />

                <div className="anime-card-bottom">
                  <span className="stat">
                    💬 <span>{item.comments}</span>
                  </span>
                  <span className="stat">
                    👁 <span>{item.views}</span>
                  </span>
                </div>
              </div>

              <div className="anime-card-info">
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="anime-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT: top views vertical cards */}
        <div className="top-views-column">
          {topViewsData.map((item) => (
            <article key={item.id} className="top-view-card">
              <img src={item.img} alt={item.title} className="top-view-image" />

              <span className="episode-badge small">{item.ep}</span>
              <span className="views-badge">👁 {item.views}</span>

              <div className="top-view-overlay">
                <h4 className="top-view-title">{item.title}</h4>
              </div>
            </article>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default Trending;
