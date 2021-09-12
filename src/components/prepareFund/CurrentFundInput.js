import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCRF } from "../../redux/action";

const CurrentFundInput = () => {
  const dispatch = useDispatch();

  //state
  const currentRetirementFund = useSelector(
    (state) => state.retirementFund.currentRetirementFund
  );

  //action
  const handleCurrentFundChange = (e) => {
    dispatch(getCRF(e.target.value));
  };

  return (
    <div>
      <h1 className="text-gray-400 m-2">Current retirement fund</h1>
      <input
        className="bg-blue-200 pl-2 rounded-lg w-5/6"
        type="number"
        placeholder="current fund"
        value={currentRetirementFund}
        onChange={handleCurrentFundChange}
      />
    </div>
  );
};

export default CurrentFundInput;
