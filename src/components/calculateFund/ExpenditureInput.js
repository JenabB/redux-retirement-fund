import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getEPY, getEPM } from "../../redux/action";

const ExpenditureInput = () => {
  const { expenditurePerYear, expenditurePerMonth } = useSelector(
    (state) => state.retirementFund,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleEpyChange = (e) => {
    dispatch(getEPY(e.target.value));
  };

  const handleEpmChange = (e) => {
    dispatch(getEPM(e.target.value));
  };

  return (
    <div>
      <h1 className="mb-4">Current spending amount</h1>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <h1 className="text-gray-400 m-2">Expenditure Per Year</h1>
          <input
            className="bg-blue-200 pl-2 rounded-lg w-5/6"
            name="expenditurePerYear"
            value={expenditurePerYear}
            onChange={handleEpyChange}
          />
        </div>
        <div>
          <h1 className="text-gray-400 m-2">Expenditure Per Month</h1>
          <input
            className="bg-blue-200 pl-2 rounded-lg w-5/6"
            name="expenditurePerMonth"
            value={expenditurePerMonth}
            onChange={handleEpmChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenditureInput;
