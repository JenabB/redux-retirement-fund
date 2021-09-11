import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCA, getAAR, getAI } from "../../redux/action";

const ExpenseRetirement = () => {
  const { currentAge, ageAtRetirement, annualInflation } = useSelector(
    (state) => state.retirementFund,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleCurrentChange = (e) => {
    dispatch(getCA(e.target.value));
  };

  const handleRetireChange = (e) => {
    dispatch(getAAR(e.target.value));
  };

  const handleInflationChange = (e) => {
    dispatch(getAI(e.target.value));
  };

  return (
    <div className="mt-10">
      <div>
        <h1 className="mb-4">Total expenses at retirement</h1>
        <div className="grid grid-cols-2">
          <div>
            <label className="text-gray-400 m-2">Current age</label>
            <input
              className="bg-blue-200 pl-2 rounded-lg w-5/6"
              type="number"
              name="current"
              value={currentAge}
              onChange={handleCurrentChange}
            />
          </div>
          <div>
            <label className="text-gray-400 m-2">Age at retirement</label>
            <input
              className="bg-blue-200 pl-2 rounded-lg w-5/6"
              type="number"
              name="retirement"
              value={ageAtRetirement}
              onChange={handleRetireChange}
            />
          </div>
        </div>
        <div className="my-4">
          <label className="text-gray-400 m-2">
            Annual inflation (Optional)
          </label>
          <input
            className="bg-blue-200 pl-2 rounded-lg w-2/5"
            type="number"
            value={annualInflation}
            onChange={handleInflationChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseRetirement;
