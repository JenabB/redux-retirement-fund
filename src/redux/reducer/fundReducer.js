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
  GET_AIEM,
  GET_AIEA,
} from "../type/fundType";

const initialState = {
  //first input
  expenditurePerYear: 0,
  expenditurePerMonth: 0,

  //second input
  currentAge: 0,
  ageAtRetirement: 0,
  annualInflation: 4,

  //first result
  totalAnnualExpenditure: 0,
  requiredAmountOfRetirement: 0,

  //third input
  rateOfPeriod: 0,
  currentRetirementFund: 0,

  //second result
  amountInvestedEachMonth: 0,
  amountInvestedEachAnnually: 0,
};

export default function fundReducer(state = initialState, action) {
  switch (action.type) {
    // first input
    case GET_EPY:
      return {
        ...state,
        expenditurePerYear: action.payload,
        expenditurePerMonth: action.payload / 12,
      };
    case GET_EPM:
      return {
        ...state,
        expenditurePerMonth: action.payload,
        expenditurePerYear: action.payload * 12,
      };

    //second input
    case GET_CA:
      return {
        ...state,
        currentAge: action.payload,
      };

    case GET_AAR:
      return {
        ...state,
        ageAtRetirement: action.payload,
      };

    case GET_AI:
      return {
        ...state,
        annualInflation: action.payload,
      };

    //first output
    case GET_TAE:
      return {
        ...state,
        totalAnnualExpenditure: action.payload,
      };

    case GET_RAOR:
      return {
        ...state,
        requiredAmountOfRetirement: action.payload,
      };

    //third input
    case GET_ROP:
      return {
        ...state,
        rateOfPeriod: action.payload,
      };

    case GET_CRF:
      return {
        ...state,
        currentRetirementFund: action.payload,
      };

    //second output
    case GET_AIEM:
      return {
        ...state,
        amountInvestedEachMonth: action.payload,
      };

    case GET_AIEA:
      return {
        ...state,
        amountInvestedEachAnnually: action.payload,
      };
    default:
      return state;
  }
}
