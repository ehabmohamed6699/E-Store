import React from "react";
import CarouselTrending from "../card/CarouselTrending";
import Testimonials from "../testimonials/Testimonials";
import CarouselBestselling from "../card/CarouselBestselling";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <Link to="/favourites">wishlist</Link>
      <div className="container"></div>
      <div className="section">
        <div className="title-box container">
          <h1 className="heading-primary">Trending This Week</h1>
        </div>
        <CarouselTrending />
      </div>

      <Testimonials />

      <div className="section">
        <div className="title-box container">
          <h1 className="heading-primary">Bestselling </h1>
        </div>
        <CarouselBestselling />
      </div>
    </div>
  );
}
