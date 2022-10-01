// import Card from "../card/Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./fav.css";
import { addToCart } from "../../store/action";

export default function Favs() {
  const dispatch = useDispatch();
  let [favList, setFavList] = useState(
    useSelector((state) => state.favourites)
  );

  let size = favList.length;

  useEffect(() => {
    // console.log(favList.length);
    // console.log("the first element id in vafourite list is ");
    // console.log(favList[0].id);
  }, [favList]);

  return (
    <div className="container wishlist">
      {size ? (
        <div>
          <h1 className="text-center mb-5 mt-5">My Wishlist</h1>
          {favList.map((fav) => (
            <div class="cart-whishlist">
              <div class="img-col">
                <img class="img-wishlist" src={fav.thumbnail} />
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/productDetails/${fav.id}`}
                >
                  <span className="cart-name">{fav.title}</span>
                </Link>
              </div>

              <p class="price-before-discount">
                $
                {Math.round(
                  fav.price - fav.price * (fav.discountPercentage * 0.01)
                )}
              </p>
              <p class="price-after-discount"> ${fav.price}</p>
              <button
                class="btn-whishlist"
                onClick={() => {
                  dispatch(addToCart(fav));
                  console.log("add to cart");
                  console.log(fav.id);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="container text-center m-5">
          <h1 className="" style={{ color: "#999", fontFamily: "Jost" }}>
            Wishlist is Empty
          </h1>
        </div>
      )}
    </div>
  );
}
