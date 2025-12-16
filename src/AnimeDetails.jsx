// src/AnimeDetails.jsx
import React from "react";
import "./App.css";

// import your images (adjust paths/filenames)
import fate from "./images/details-pic.jpg";
import boruto from "./images/tv-1.jpg";
import seven from "./images/tv-2.jpg";
import sao from "./images/tv-3.jpg";
import fate2 from "./images/tv-4.jpg";

function AnimeDetails() {
  return (
    <div className="details-wrapper">
      <div className="details-container">
        {/* LEFT IMAGE */}
        <div className="details-left">
          <img src={fate} alt="anime poster" className="details-cover" />
          <div className="details-stats">
            <span className="tag">11</span>
            <span className="views">9141</span>
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="details-right">
          <h1>Fate Stay Night: Unlimited Blade</h1>
          <p className="sub">フェイト/ステイナイト, Feito / sutei naito</p>

          <p className="description">
            Every human inhabiting the world of Alcia is branded by a “Count” or a
            number written on their body. For Hina’s mother, her total drops to 0
            and she’s pulled into the Abyss, never to be seen again. But her
            mother’s last words send Hina on a quest to find a legendary hero from
            the Waste War - the fabled Ace!
          </p>

          <div className="grid-info">
            <ul>
              <li>
                <b>Type:</b> TV Series
              </li>
              <li>
                <b>Studios:</b> Lerche
              </li>
              <li>
                <b>Date aired:</b> Oct 02, 2019 to ?
              </li>
              <li>
                <b>Status:</b> Airing
              </li>
              <li>
                <b>Genre:</b> Action, Adventure, Fantasy, Magic
              </li>
            </ul>

            <ul>
              <li>
                <b>Scores:</b> 7.31 / 1,515
              </li>
              <li>
                <b>Rating:</b> 8.5 / 161 times
              </li>
              <li>
                <b>Duration:</b> 24 min/ep
              </li>
              <li>
                <b>Quality:</b> HD
              </li>
              <li>
                <b>Views:</b> 131,541
              </li>
            </ul>
          </div>

          <div className="actions">
            <button className="btn-follow">❤ FOLLOW</button>
            <button className="btn-watch">WATCH NOW ▶</button>
          </div>
        </div>
      </div>

      {/* REVIEWS + SIDE RECOMMENDATIONS */}
      <div className="reviews-section">
        <div className="reviews-left">
          <h2 className="section-title">REVIEWS</h2>

          <div className="review-box">
            <div className="avatar"></div>
            <div>
              <p>
                <b>Chris Curry</b> - 1 Hour ago
              </p>
              <p>
                whachikan just noticed that someone categorized this as belonging
                to the genre "demons" LOL
              </p>
            </div>
          </div>

          <div className="review-box">
            <div className="avatar"></div>
            <div>
              <p>
                <b>Lewis Mann</b> - 5 Hour ago
              </p>
              <p>Finally it came out ages ago</p>
            </div>
          </div>

          <div className="review-box">
            <div className="avatar"></div>
            <div>
              <p>
                <b>Louis Tyler</b> - 20 Hour ago
              </p>
              <p>Where is the episode 15 ? Slow update! Tch</p>
            </div>
          </div>

          <h2 className="section-title">YOUR COMMENT</h2>
          <textarea
            className="comment-area"
            placeholder="Your Comment"
          ></textarea>
          <button className="btn-review">➤ REVIEW</button>
        </div>

        {/* SIDE RECOMMENDATIONS */}
        <div className="reviews-right">
          <h2 className="section-title">YOU MIGHT LIKE…</h2>

          <div className="side-card">
            <img src={boruto} alt="Boruto" /> <br />
            <p>Boruto: Naruto next generations</p>
          </div>

          <div className="side-card">
            <img src={seven} alt="Seven Deadly Sins" />
            <p>The Seven Deadly Sins: Wrath of the Gods</p>
          </div>

          <div className="side-card">
            <img src={sao} alt="SAO" />
            <p>Sword art online alicization war of underworld</p>
          </div>

          <div className="side-card">
            <img src={fate2} alt="Fate Heaven's Feel" />
            <p>Fate/stay night: Heaven’s Feel - presage flower</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
