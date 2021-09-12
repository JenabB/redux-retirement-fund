import {
  //first input
  GET_EPY,
  GET_EPM,

  //second input
  GET_CA,
  GET_AAR,
  GET_AI,

  //first output
  GET_TAE,
  GET_RAOR,

  //third input
  GET_ROP,
  GET_CRF,

  //second output
  GET_AIEA,
  GET_AIEM,
} from "./types";

//
//first input
export const getEPY = (epy) => ({
  type: GET_EPY,
  payload: epy,
});

export const getEPM = (epm) => ({
  type: GET_EPM,
  payload: epm,
});

//second input
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

//
//first output
export const getTAE = (total) => ({
  type: GET_TAE,
  payload: total,
});

export const getRAOR = (amount) => ({
  type: GET_RAOR,
  payload: amount,
});

//
//third input
export const getROP = (rate) => ({
  type: GET_ROP,
  payload: rate,
});

export const getCRF = (current) => ({
  type: GET_CRF,
  payload: current,
});

//
//second output
export const getAIEA = (value) => ({
  type: GET_AIEA,
  payload: value,
});

export const getAIEM = (value) => ({
  type: GET_AIEM,
  payload: value,
});
