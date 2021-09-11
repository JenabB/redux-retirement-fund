import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getROP } from "../../redux/action";

const ReturnTargetInput = () => {
  const dispatch = useDispatch();

  const rateOfPeriod = useSelector(
    (state) => state.retirementFund.rateOfPeriod
  );

  const handleRateChange = (e) => {
    dispatch(getROP(e.target.value));
  };

  return (
    <div>
      <h1 className="text-gray-400 m-2">Return Target</h1>
      <input
        className="bg-blue-200 pl-2 rounded-lg w-5/6"
        type="number"
        placeholder="return target input"
        value={rateOfPeriod}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default ReturnTargetInput;
