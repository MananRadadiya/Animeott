// src/HeroSlider.jsx
import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "./App.css";

import slide1 from "./images/hero-1.jpg";
import slide2 from "./images/hero-1.jpg";
import slide3 from "./images/hero-1.jpg";

const slides = [
  {
    id: 1,
    tag: "Adventure",
    title: "Fate / Stay Night: Unlimited Blade Works",
    description:
      "After 30 days of travel across the world, the Holy Grail War begins.",
    image: slide1,
    cta: "Watch Now",
  },
  {
    id: 2,
    tag: "Action",
    title: "Attack on Titan: The Final Stand",
    description: "Humanity fights its last battle on the edge of extinction.",
    image: slide2,
    cta: "Continue Watching",
  },
  {
    id: 3,
    tag: "Fantasy",
    title: "Demon Slayer: Crimson Night",
    description: "A new moon rises, bringing an ancient demon from its slumber.",
    image: slide3,
    cta: "Start Season 1",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-slider-wrapper">
      <Carousel
        fade
        controls
        indicators={false}
        interval={5000}
        pause="hover"
        className="hero-carousel"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="hero-slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image"
              />

              <div className="hero-slide-overlay" />

              <Container className="hero-slide-inner">
                <div className="hero-slide-content">
                  <div className="hero-tag">{slide.tag}</div>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>

                  <div className="hero-buttons">
                    <Button className="hero-btn-primary">
                      {slide.cta}
                    </Button>
                    <Button
                      variant="outline-light"
                      className="hero-btn-secondary"
                    >
                      + Add to List
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSlider;
