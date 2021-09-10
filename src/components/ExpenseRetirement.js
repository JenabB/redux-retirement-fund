import React, { useState } from "react";

const ExpenseRetirement = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [ageRetire, setAgeRetire] = useState(0);
  const [inflation, setInflation] = useState(4);

  const handleCurrentChange = (e) => {
    setCurrentAge(e.target.value);
  };

  const handleRetireChange = (e) => {
    setAgeRetire(e.target.value);
  };

  const handleInflationChange = (e) => {
    setInflation(e.target.value);
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
              value={ageRetire}
              onChange={handleRetireChange}
            />
          </div>
          <div className="my-4">
            <label className="text-gray-400 m-2">
              Annual inflation (Optional)
            </label>
            <input
              className="bg-blue-200 pl-2 rounded-lg w-2/5"
              type="number"
              value={inflation}
              onChange={handleInflationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseRetirement;
