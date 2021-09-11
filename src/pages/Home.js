import React from "react";
import AppBar from "../components/AppBar";
import CalculateFund from "./home/CalculateFund";
import PrepareFund from "./home/PrepareFund";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="grid lg:grid-cols-2">
        <div className="p-4">
          <CalculateFund />
        </div>
        <div className="p-4">
          <PrepareFund />
        </div>
      </div>
    </div>
  );
};

export default Home;
