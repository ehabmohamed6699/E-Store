import { createStore } from "redux";
import reducer from "./reducer";
// import favouriteReducer from "./reducer";

const store = createStore(reducer);

export default store;



