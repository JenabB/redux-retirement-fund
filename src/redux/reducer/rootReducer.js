import { combineReducers } from "redux";
import fundReducer from "./fundReducer";

export default combineReducers({
  retirementFund: fundReducer,
});
