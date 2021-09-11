import React, { useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { formatRp } from "../../utils/formatRp";
import { getTAE, getRAOR } from "../../redux/action";

const Result = () => {
  const [annualOut, setAnnualOut] = useState(0);
  const [needFunds, setNeedFunds] = useState(0);

  const dispatch = useDispatch();

  const {
    expenditurePerYear,
    expenditurePerMonth,
    currentAge,
    ageAtRetirement,
    annualInflation,
  } = useSelector((state) => state.retirementFund, shallowEqual);

  useEffect(() => {
    const annual = Math.round(
      expenditurePerYear *
        Math.pow(1 + annualInflation / 100, ageAtRetirement - currentAge)
    );

    setAnnualOut(annual);
    dispatch(getTAE(annual));

    const need = Math.round(annualOut / (annualInflation / 100));
    setNeedFunds(need);

    dispatch(getRAOR(need));
  }, [
    dispatch,
    ageAtRetirement,
    annualInflation,
    annualOut,
    currentAge,
    expenditurePerMonth,
    expenditurePerYear,
  ]);

  return (
    <div className="bg-blue-400 text-white rounded-t-xl">
      <div className=" m-2 p-2 grid grid-cols-2">
        <div className="m-3">
          <h1>Total annual expenditure at retirement</h1>
          <h1 className="text-2xl">{formatRp(annualOut)}</h1>
        </div>
        <div className="m-3">
          <h1>Required amount of retirement</h1>
          <h1 className="text-2xl">{formatRp(needFunds)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Result;
