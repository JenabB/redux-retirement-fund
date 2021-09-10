import { GET_EPY, GET_EPM } from "../types";

const initialState = {
  //first input
  expenditurePerYear: 0,
  expenditurePerMonth: 0,
  currentAge: 0,
  ageAtRetirement: 0,
  annualInflation: 0,
  //First result
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
        expenditurePerMonth: action.payload * 12,
      };
    case GET_EPM:
      return {
        ...state,
        expenditurePerMonth: action.payload,
        expenditurePerYear: action.action / 12,
      };

    default:
      return state;
  }
}
