import { SAVE_FUND, DELETE_FUND } from "../type/favoriteType";

export const saveFund = (fund) => ({
  type: SAVE_FUND,
  payload: fund,
});

export const deleteFund = (fundId) => ({
  type: DELETE_FUND,
  payload: fundId,
});
