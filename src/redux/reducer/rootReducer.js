import { combineReducers } from "redux";
import fundReducer from "./fundReducer";
import favoriteReducer from "./favoriteReducer";

export default combineReducers({
  retirementFund: fundReducer,
  favorites: favoriteReducer,
});
