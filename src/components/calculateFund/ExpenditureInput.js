import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getEPY, getEPM } from "../../redux/action";

const ExpenditureInput = () => {
  const [epy, setEpy] = useState(0);
  const [epm, setEpm] = useState(0);

  const dispatch = useDispatch();

  const handleEpyChange = (e) => {
    setEpy(e.target.value);
    setEpm(e.target.value / 12);
    dispatch(getEPY(e.target.value));
  };

  const handleEpmChange = (e) => {
    setEpm(e.target.value);
    setEpy(e.target.value * 12);
    dispatch(getEPM(e.target.value));
  };

  console.log({
    epy: epy,
    epm: epm,
  });
  return (
    <div>
      <h1 className="mb-4">Current spending amount</h1>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <h1 className="text-gray-400 m-2">Expenditure Per Year</h1>
          <input
            className="bg-blue-200 pl-2 rounded-lg w-5/6"
            name="expenditurePerYear"
            value={epy}
            onChange={handleEpyChange}
          />
        </div>
        <div>
          <h1 className="text-gray-400 m-2">Expenditure Per Month</h1>
          <input
            className="bg-blue-200 pl-2 rounded-lg w-5/6"
            name="expenditurePerMonth"
            value={epm}
            onChange={handleEpmChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenditureInput;
