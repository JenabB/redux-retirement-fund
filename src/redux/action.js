import {
  GET_EPY,
  GET_EPM,
  GET_CA,
  GET_AAR,
  GET_AI,
  GET_TAE,
  GET_RAOR,
} from "./types";

//expenditure input
export const getEPY = (epy) => ({
  type: GET_EPY,
  payload: epy,
});

export const getEPM = (epm) => ({
  type: GET_EPM,
  payload: epm,
});

//expense retirement
export const getCA = (age) => ({
  type: GET_CA,
  payload: age,
});

export const getAAR = (age) => ({
  type: GET_AAR,
  payload: age,
});

export const getAI = (inflation) => ({
  type: GET_AI,
  payload: inflation,
});

//first resullt
export const getTAE = (total) => ({
  type: GET_TAE,
  payload: total,
});

export const getRAOR = (amount) => ({
  type: GET_RAOR,
  payload: amount,
});
