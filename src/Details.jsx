// src/components/AnimeDetails.jsx
import React from "react";
import "./App.css";

// Replace these paths with your actual images (public/assets or src/assets)
import HERO_IMG from "./images/blog-details-pic.jpg.webp";
import SECTION_IMG_1 from "./images/bd-item-1.jpg.webp";
import SECTION_IMG_2 from "./images/bd-item-2.jpg.webp";
import AUTHOR_AVATAR from "./images/bd-item-3.jpg.webp";


export default function AnimeDetails() {
  return (
    <main className="anime-details-page">
      <div className="inner-container">
        <article className="post">
          <header className="post-header">
            <h1 className="post-title">
              Anime for Beginners: 20 Pieces of Essential Viewing
            </h1>

            <div className="social-row">
              <button className="btn small">Facebook</button>
              <button className="btn small">Pinterest</button>
              <button className="btn small">LinkedIn</button>
              <button className="btn small">Twitter</button>
            </div>
          </header>

          <figure className="hero">
            <img src={HERO_IMG} alt="Hero" />
          </figure>

          <div className="post-body">
            <p className="lead">
              As a result the last couple of eps haven't been super exciting
              for me, because they've been more like settling into a familiar
              and comfortable routine. We're seeing character growth here but
              it's subtle (apart from Shouyou, arguably).
            </p>

            <h4 className="section-title">Tobio–Nishinoya showdown:</h4>
            <figure className="section-img">
              <img src={SECTION_IMG_1} alt="Tobio" />
            </figure>

            <p>
              In Japan the idea of a first-year speaking to a senior the way
              Kageyama did to Asahi is a lot more shocking than it would be in
              the West, but Tobio calling out teammates is genuinely rude.
            </p>

            <h4 className="section-title">Naratsu no Taizai: Kamigami No Gekirin</h4>
            <figure className="section-img">
              <img src={SECTION_IMG_2} alt="Naratsu" />
            </figure>

            <p>
              The overall dynamic with Kageyama is basically unchanged. The
              show does a good job balancing humor and high stakes action while
              maintaining stylish visuals and an engaging soundtrack.
            </p>

            <ul className="tags">
              <li>HEALTHFOOD</li>
              <li>SPORT</li>
              <li>GAME</li>
            </ul>

            <nav className="post-nav">
              <a className="prev">← Building a Better LIA...</a>
              <a className="next">Mugen no Juunin: Immortal - 21 →</a>
            </nav>

            <section className="comments">
              <h3>3 Comments</h3>

              <Comment
                name="John Smith"
                date="Sep 10, 2020"
                avatar={AUTHOR_AVATAR}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </Comment>

              <Comment
                name="Elizabeth Perry"
                date="Sep 08, 2020"
                avatar={AUTHOR_AVATAR}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi.
              </Comment>

              <Comment
                name="Adrian Coleman"
                date="Sep 05, 2020"
                avatar={AUTHOR_AVATAR}
              >
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </Comment>

              <div className="comment-form">
                <h4>Leave A Comment</h4>
                <div className="row">
                  <input placeholder="Name" />
                  <input placeholder="Email" />
                </div>
                <textarea placeholder="Message" />
                <button className="btn submit">Send Message</button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

function Comment({ name, date, avatar, children }) {
  return (
    <div className="comment">
      <img className="avatar" src={avatar} alt={name} />
      <div className="comment-body">
        <div className="meta">
          <strong className="c-name">{name}</strong>
          <span className="date">{date}</span>
        </div>
        <p className="c-text">{children}</p>
        <div className="comment-actions">
          <button className="btn tiny">Like</button>
          <button className="btn tiny">Reply</button>
        </div>
      </div>
    </div>
  );
}
