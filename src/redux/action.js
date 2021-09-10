import { GET_EPY, GET_EPM } from "./types";

export const getEPY = (epy) => ({
  type: GET_EPY,
  payload: epy,
});

export const getEPM = (epm) => ({
  type: GET_EPM,
  payload: epm,
});
