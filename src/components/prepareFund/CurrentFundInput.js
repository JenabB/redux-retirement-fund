import React from "react";

const CurrentFundInput = () => {
  return (
    <div>
      <h1 className="text-gray-400 m-2">Current retirement fund</h1>
      <input
        className="bg-blue-200 pl-2 rounded-lg w-5/6"
        type="number"
        placeholder="current fund"
      />
    </div>
  );
};

export default CurrentFundInput;
