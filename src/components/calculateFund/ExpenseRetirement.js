import React from "react";

//redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCA, getAAR, getAI } from "../../redux/action";
import formInput from "../../theme/formInput";

const ExpenseRetirement = () => {
  //get value from redux
  const { currentAge, ageAtRetirement, annualInflation } = useSelector(
    (state) => state.retirementFund,
    shallowEqual
  );

  //dispatch for connect to action and redux
  const dispatch = useDispatch();

  //action
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
        <h1 className="mb-4 font-bold">Total expenses at retirement</h1>
        <div className="grid grid-cols-2">
          <div>
            <label className="text-gray-600 m-2">Current age</label>
            <input
              className={formInput}
              type="number"
              name="current"
              value={currentAge}
              onChange={handleCurrentChange}
            />
          </div>
          <div>
            <label className="text-gray-600 m-2">Age at retirement</label>
            <input
              className={formInput}
              type="number"
              name="retirement"
              value={ageAtRetirement}
              onChange={handleRetireChange}
            />
          </div>
          <div className="my-4">
            <label className="text-gray-600 m-2">
              Annual inflation (Optional)
            </label>
            <br />
            <input
              className="bg-blue-200 px-4 mt-2 py-1 rounded w-2/5"
              type="number"
              value={annualInflation}
              onChange={handleInflationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseRetirement;
