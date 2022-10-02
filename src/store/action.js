export default function setCheckout(checkout){
  return{
      type: 'SET_Checkout',
      payload: checkout
  }
}

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
<<<<<<< HEAD
}
export default function setCheckout(checkout){
    return{
        type: 'SET_Checkout',
        payload: checkout
    }
}
=======
}
>>>>>>> d6b5e0b97d3d24e42348d0817a1d39326f4ac85d
