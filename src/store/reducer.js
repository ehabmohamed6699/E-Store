
export let initialState = {
  loader: false,
  lang:'EN',
  favourites: [],
  cartList: [],
  checkout: {
    cart: [],
    subTotal: 0
}
};




export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_Favourite":
      let isInFavourite = state.favourites.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isInFavourite === -1) {
        state.favourites.push(action.payload);
      }
      return state;
    
      case 'SET_Checkout':
        return {
            ...state, checkout: action.payload
        }
      
    case "SET_Cart":
      let isInCart = state.cartList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (isInCart === -1) {
        state.cartList.push(action.payload);
      }
      console.log(`the cart element in index ${isInCart}`);
      console.log(action.payload);
      console.log(state.cartList)
      // console.log(`index of product ${action.payload.id}`);
      return state;

    case "REMOVE_Favourite":
      let newArr = state.favourites.filter((product) => {
        return product.id !== action.payload.id;
      });
      state.favourites = newArr;
      console.log(state.favourites);
      return state;

    default:
      return state;
  }
};
