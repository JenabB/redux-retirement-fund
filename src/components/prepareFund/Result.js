import React, { useState, useEffect } from "react";

//redux
import { shallowEqual, useSelector } from "react-redux";
import { formatRp } from "../../utils/formatRp";

const Result = () => {
  //state
  const [pmt, setPmt] = useState(0);
  const {
    rateOfPeriod,
    currentAge,
    ageAtRetirement,
    currentRetirementFund,
    requiredAmountOfRetirement,
  } = useSelector((state) => state.retirementFund, shallowEqual);

  //calcuation with side effect
  useEffect(() => {
    // if rate of period is not 0
    if (rateOfPeriod !== 0) {
      const q = Math.pow(1 + rateOfPeriod / 100, ageAtRetirement - currentAge);
      setPmt(
        -(
          (rateOfPeriod / 100) *
          (-requiredAmountOfRetirement + q * currentRetirementFund)
        ) /
          ((-1 + q) * (1 + (rateOfPeriod / 100) * 0))
      );
    }

    //if not empty
    else if (ageAtRetirement - currentAge !== 0) {
      setPmt(
        -(-requiredAmountOfRetirement - currentRetirementFund) /
          (ageAtRetirement - currentAge)
      );
    }
  }, [
    ageAtRetirement,
    currentAge,
    currentRetirementFund,
    rateOfPeriod,
    requiredAmountOfRetirement,
  ]);

  return (
    <div className="bg-teal-dark text-white rounded-t-xl">
      <div className=" m-2 p-2 grid grid-cols-2">
        <div className="m-3">
          <h1 className="font-bold">
            Amount that needs to be invested each month
          </h1>
          <h1 className="text-xl">{formatRp(pmt / 12)}</h1>
        </div>
        <div className="m-3">
          <h1 className="font-bold">
            Amount that needs to be invested annually
          </h1>
          <h1 className="text-xl">{formatRp(pmt)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;
