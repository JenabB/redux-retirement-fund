import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppBar = () => {
  const funds = useSelector((state) => state.favorites.funds);
  return (
    <div className="sticky top-0 p-4 bg-teal-dark  text-center text-white font-2xl text-xl shadow mb-2 flex justify-between">
      <div></div>
      <h1>Calculate Retirement Fund</h1>
      <Link to="/saved">
        <button>
          <h1 className="material-icons">save</h1>
          <span className="text-xs">{funds.length}</span>
        </button>
      </Link>
    </div>
  );
};

export default AppBar;
