import React from "react";

//redux
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getEPY, getEPM } from "../../redux/action";
import formInput from "../../theme/formInput";

const ExpenditureInput = () => {
  //get value from redux
  const { expenditurePerYear, expenditurePerMonth } = useSelector(
    (state) => state.retirementFund,
    shallowEqual
  );

  const dispatch = useDispatch();

  //onChange
  const handleEpyChange = (e) => {
    dispatch(getEPY(e.target.value));
  };

  const handleEpmChange = (e) => {
    dispatch(getEPM(e.target.value));
  };

  return (
    <div>
      <h1 className="mb-4 font-bold">Current spending amount</h1>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <h1 className="text-gray-600 m-2">Expenditure Per Year</h1>
          <input
            className={formInput}
            name="expenditurePerYear"
            value={expenditurePerYear}
            onChange={handleEpyChange}
          />
        </div>
        <div>
          <h1 className="text-gray-600 m-2">Expenditure Per Month</h1>
          <input
            className={formInput}
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
