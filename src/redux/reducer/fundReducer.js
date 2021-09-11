import { GET_EPY, GET_EPM, GET_CA, GET_AAR, GET_AI } from "../types";

const initialState = {
  //expennditure input
  expenditurePerYear: 0,
  expenditurePerMonth: 0,

  //expense retirement
  currentAge: 0,
  ageAtRetirement: 0,
  annualInflation: 4,

  //first result
  totalAnnualExpenditure: 0,
  requiredAmountOfPension: 0,

  //second input
  rateOfPeriod: 0,
  currentPensionFund: 0,
  // second result
  amountInvestedEachMonth: 0,
  amountInvestedEachAnnually: 0,
};

export default function fundReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
