
export function addToFav(fav) {
  return {
    type: "SET_Favourite",
    payload: fav,
  };
}

export function removeFav(fav) {
  return {
    type: "REMOVE_Favourite",
    payload: fav,
  };
}

export function addToCart(cartItem) {
  return {
    type: "SET_Cart",
    payload: cartItem,
  };
export default function setCheckout(checkout){
    return{
        type: 'SET_Checkout',
        payload: checkout
    }
}
