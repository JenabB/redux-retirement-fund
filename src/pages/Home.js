import React from "react";

//components
import AppBar from "../components/AppBar";
import CalculateFund from "./home/CalculateFund";
import PrepareFund from "./home/PrepareFund";

const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="lg:w-2/4 p-4 mx-auto">
        <CalculateFund />
        <PrepareFund />
      </div>
    </div>
  );
};

export default Home;
