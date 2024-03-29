import React, { useEffect } from "react";

//redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getTAE, getRAOR } from "../../redux/action";

//utils
import { formatRp } from "../../utils/formatRp";

const Result = () => {
  const dispatch = useDispatch();

  const {
    //first input
    expenditurePerYear,

    //second input
    currentAge,
    ageAtRetirement,
    annualInflation,

    //result
    totalAnnualExpenditure,
    requiredAmountOfRetirement,
  } = useSelector((state) => state.retirementFund, shallowEqual);

  useEffect(() => {
    const annual = Math.round(
      expenditurePerYear *
        Math.pow(1 + annualInflation / 100, ageAtRetirement - currentAge)
    );

    dispatch(getTAE(annual));

    const need = Math.round(totalAnnualExpenditure / (annualInflation / 100));

    dispatch(getRAOR(need));
  }, [
    ageAtRetirement,
    annualInflation,
    currentAge,
    dispatch,
    expenditurePerYear,
    totalAnnualExpenditure,
  ]);

  return (
    <div className="bg-teal-normal text-white rounded-t-xl">
      <div className=" m-2 p-2 grid grid-cols-2">
        <div className="m-2">
          <h1 className="font-bold mb-2">
            Total annual expenditure at retirement
          </h1>
          <h1 className="lg:text-xl">{formatRp(totalAnnualExpenditure)}</h1>
        </div>
        <div className="m-2">
          <h1 className="font-bold mb-4">Required amount of retirement</h1>
          <h1 className="lg:text-xl">{formatRp(requiredAmountOfRetirement)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;
