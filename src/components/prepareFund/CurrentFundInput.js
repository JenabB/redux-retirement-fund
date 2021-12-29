import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getCRF } from "../../redux/action";
import formInput from "../../theme/formInput";

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
        className={formInput}
        type="number"
        placeholder="current fund"
        value={currentRetirementFund}
        onChange={handleCurrentFundChange}
      />
    </div>
  );
};

export default CurrentFundInput;
