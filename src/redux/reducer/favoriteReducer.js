import { SAVE_FUND, DELETE_FUND } from "../type/favoriteType";

const initialState = {
  funds: localStorage.getItem("funds")
    ? JSON.parse(localStorage.getItem("funds"))
    : [],
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_FUND:
      return {
        ...state,
        funds: [...state.funds, action.payload],
      };
    case DELETE_FUND:
      return {
        ...state,
        funds: state.funds.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
}
