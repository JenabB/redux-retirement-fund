import React from "react";
import { useNavigate } from "react-router-dom";

const AppBarWithBack = ({ title }) => {
  let navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <nav className="sticky top-0 z-10 p-4 bg-teal-dark  text-center text-white font-2xl text-xl shadow mb-2 flex justify-between">
      <div>
        <button onClick={goBack}>
          <span class="material-icons">arrow_back</span>
        </button>
      </div>
      <div>{title}</div>
      <div></div>
    </nav>
  );
};

export default AppBarWithBack;
