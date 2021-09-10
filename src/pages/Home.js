import React from "react";
import AppBar from "../components/AppBar";
import ExpenditureInput from "../components/ExpenditureInput";
import ExpenseRetirement from "../components/ExpenseRetirement";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="my-10 lg:w-3/6 mx-auto">
        <div className="m-4 shadow-lg p-4">
          <ExpenditureInput />
          <ExpenseRetirement />
        </div>
      </div>
    </div>
  );
};

export default Home;
