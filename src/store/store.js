import { createStore } from "redux";
import reducer from "./reducer";
import languageReducer from "./reducer";
import favouriteReducer from "./reducer";
const store = createStore(reducer)

export default store;


// const store = createStore(favouriteReducer);

// export default store;



