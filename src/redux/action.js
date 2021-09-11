import {
  //first input
  GET_EPY,
  GET_EPM,
  GET_CA,
  GET_AAR,
  GET_AI,

  //first output
  GET_TAE,
  GET_RAOR,

  //second input
  GET_ROP,
  GET_CRF,
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

//first result
export const getTAE = (total) => ({
  type: GET_TAE,
  payload: total,
});

export const getRAOR = (amount) => ({
  type: GET_RAOR,
  payload: amount,
});

//second input
export const getROP = (rate) => ({
  type: GET_ROP,
  payload: rate,
});

export const getCRF = (current) => ({
  type: GET_CRF,
  payload: current,
});
