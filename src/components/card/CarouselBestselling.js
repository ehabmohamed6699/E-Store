import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./CarouselCard.css";
import { Link } from "react-router-dom";
import CardIcons from "./CardIcons";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import initialState from "../../store/reducer";
import { addToFav, addToCart } from "../../store/action";

export default function CarouselTrending() {
  const dispatch = useDispatch();
  let [favList, setFavList] = useState(
    useSelector((state) => state.favourites)
  );
  let [firstSlide, setFirstSlide] = useState([]);
  let [secondSlide, setSecondSlide] = useState([]);
  let [thirdSlide, setThirdSlide] = useState([]);

  useEffect(() => {
    // https://dummyjson.com/products    Doha
    // https://api.escuelajs.co/api/v1/products   Ehab
    console.log("From use effect");
    axios
      .get("https://dummyjson.com/products")
      .then((products) => {
        console.log(products);

        setFirstSlide(products.data.products.slice(0, 4));
        setSecondSlide(products.data.products.slice(4, 8));
        setThirdSlide(products.data.products.slice(8, 12));
        console.log("third slide");
        console.log(thirdSlide);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      id="carouselExampleControls2"
      className="container carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card-wrapper">
            {firstSlide.map((product) => (
              <div
                className="my-card"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <div className="img-wrapper">
                  <img
                    className="my-card-img"
                    src={product.thumbnail}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <Link
                    style={{ color: "#333", textDecoration: "none" }}
                    to={`/productDetails/${product.id}`}
                  >
                    <h5 className="my-card-title">{product.title}</h5>
                  </Link>

                  <div className="price">
                    <span className="price-before-discount">
                      $
                      {Math.round(
                        product.price -
                          product.price * (product.discountPercentage * 0.01)
                      )}
                      &nbsp;
                    </span>
                    <span className="price-after-discount">
                      ${product.price}
                    </span>
                  </div>
                  <div className="card-icons">
                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToCart(product));
                        console.log("add to cart");
                        console.log(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>

                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToFav(product));
                        console.log("clicked");
                        console.log(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={`/productDetails/${product.id}`}
                    >
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="card-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-item">
          <div className="card-wrapper">
            {secondSlide.map((product) => (
              <div
                className="my-card"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <div className="img-wrapper">
                  <img
                    className="my-card-img"
                    src={product.thumbnail}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <Link
                    style={{ color: "#333", textDecoration: "none" }}
                    to={`/productDetails/${product.id}`}
                  >
                    <h5 className="my-card-title">{product.title}</h5>
                  </Link>
                  <div className="price">
                    <span className="price-before-discount">
                      $
                      {Math.round(
                        product.price -
                          product.price * (product.discountPercentage * 0.01)
                      )}
                      &nbsp;
                    </span>
                    <span className="price-after-discount">
                      ${product.price}
                    </span>
                  </div>
                  <div className="card-icons">
                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToCart(product));
                        console.log("add to cart");
                        console.log(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>

                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToFav(product));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={`/productDetails/${product.id}`}
                    >
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="card-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-item">
          <div className="card-wrapper">
            {thirdSlide.map((product) => (
              <div
                className="my-card"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <div className="img-wrapper">
                  <img
                    className="my-card-img"
                    src={product.thumbnail}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <Link
                    style={{ color: "#333", textDecoration: "none" }}
                    to={`/productDetails/${product.id}`}
                  >
                    <h5 className="my-card-title">{product.title}</h5>
                  </Link>
                  <div className="price">
                    <span className="price-before-discount">
                      $
                      {Math.round(
                        product.price -
                          product.price * (product.discountPercentage * 0.01)
                      )}
                      &nbsp;
                    </span>
                    <span className="price-after-discount">
                      ${product.price}
                    </span>
                  </div>
                  <div className="card-icons">
                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToCart(product));
                        console.log("add to cart");
                        console.log(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>

                    <button
                      className="btn-wish-list"
                      onClick={() => {
                        dispatch(addToFav(product));
                        console.log("clicked");
                        console.log(product.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="card-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={`/productDetails/${product.id}`}
                    >
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="card-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls2"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleControls2"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
}
