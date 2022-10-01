import { createStore } from "redux";
import favouriteReducer from "./reducer";

const store = createStore(favouriteReducer);

export default store;
