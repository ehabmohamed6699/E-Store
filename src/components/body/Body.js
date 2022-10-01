import React from "react";
import CarouselTrending from "../card/CarouselTrending";
import Testimonials from "../testimonials/Testimonials";
import CarouselBestselling from "../card/CarouselBestselling";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
export default function Body() {
  

  return (
    <div>
      <Carousel className="Carousel p-0">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=996&t=st=1664147388~exp=1664147988~hmac=591e5e7181cc47d1a7d328fd0a625b4ce61cb0baa1fb669f77710541c29e2be0"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing_158538-5355.jpg?w=900&t=st=1664147445~exp=1664148045~hmac=7d7ee1c6b203295c742fa5b88f7ea2be4b477f58db12dee9fee3ed4be1f4a207"
                    />
                </Carousel.Item>
      </Carousel>

      <div className="container"></div>
      <div className="section">
        <div className="title-box container">
          <h1 className="heading-primary" id="trending">Trending This Week</h1>
        </div>
        <CarouselTrending />
      </div>

      <Testimonials />

      <div className="section">
        <div className="title-box container">
          <h1 className="heading-primary" id="best-selling">Bestselling </h1>
        </div>
        <CarouselBestselling />
      </div>
    </div>
  );
}
