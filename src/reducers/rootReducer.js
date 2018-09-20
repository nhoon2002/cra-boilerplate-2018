import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import sampleReducer from "./sampleReducer.js";

export default combineReducers({
  sampleReducer,
  routing: routerReducer
});
