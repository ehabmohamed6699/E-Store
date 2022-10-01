import { createStore } from "redux";

import favouriteReducer from "./reducer";

const store = createStore(favouriteReducer);

export default store;

import reducer from "./reducer";
import languageReducer from "./reducer";

const store = createStore(reducer)

export default store;

