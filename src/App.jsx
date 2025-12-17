import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";

import Navigation from "./Navigation";
import HeroSlider from "./HeroSlider";
import Popular from "./Popular";
import Trending from "./Trending";
import Footer from "./Footer";

/* PAGES */
import AnimeDetails from "./AnimeDetails";
import Watch from "./Watch";
import Details from "./Details";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AdminPage from "./AdminPage";

const BlogPage = () => (
  <h2 style={{ color: "white", padding: "2rem" }}>Blog Page</h2>
);

const ContactsPage = () => (
  <h2 style={{ color: "white", padding: "2rem" }}>Contacts Page</h2>
);

const CategoryPage = () => {
  const { categorySlug } = useParams();
  return (
    <div style={{ color: "white", padding: "2rem" }}>
      <h2>Category: {categorySlug}</h2>
      <p>Here you can show anime for this category.</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <Trending />
              <Popular />
            </>
          }
        />

        <Route path="/blog" element={<Details />} />
        <Route path="/contacts" element={<ContactsPage />} />

        {/* ANIME */}
        <Route path="/category/anime" element={<AnimeDetails />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/category/details" element={<Details />} />
        <Route path="/category/watch" element={<Watch />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/category/:categorySlug" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
