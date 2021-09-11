import React from "react";

import ExpenditureInput from "../../components/calculateFund/ExpenditureInput";
import ExpenseRetirement from "../../components/calculateFund/ExpenseRetirement";
import Result from "../../components/calculateFund/Result";

const CalculateFund = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center">Calculate Retirement Fund</h1>
        <div className="m-4">
          <Result />
          <div className=" shadow-lg p-4">
            <ExpenditureInput />
            <ExpenseRetirement />
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default CalculateFund;
