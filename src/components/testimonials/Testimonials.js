import React from "react";
import "../card/CarouselCard.css";

export default function Testimonials() {
  return (
    <div className="my-testimonials">
      <h1>Customers Testimonials</h1>
      <div class="testimonials-container">
        <div class="testimonials">
          <figure class="testimoial">
            <img
              src="https://i.ibb.co/DCjhMTZ/steve.jpg"
              alt="customer photo"
            />
            <blockquote class="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p class="testimonial-name">&mdash; Dave Bryson</p>
          </figure>
          <figure class="testimoial">
            <img
              src="https://i.ibb.co/5KBzmYJ/customer-4.jpg"
              alt="customer photo"
            />
            <blockquote class="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p class="testimonial-name">&mdash; Ben Hadley</p>
          </figure>
          <figure class="testimoial">
            <img
              src="https://i.ibb.co/jkvJ0W9/customer-2.jpg"
              alt="customer photo"
            />
            <blockquote class="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p class="testimonial-name">&mdash; Steve Miller</p>
          </figure>
        </div>
      </div>
    </div>
  );
}
