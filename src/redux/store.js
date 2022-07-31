import { createStore } from "redux";
import rootReducer from "./rootReducer";

// createStore() function expects reducer/root reducer to work with
const store = createStore(rootReducer);
export default store;
