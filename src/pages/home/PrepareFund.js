import React from "react";
import CurrentFundInput from "../../components/prepareFund/CurrentFundInput";
import Result from "../../components/prepareFund/Result";
import ReturnTargetInput from "../../components/prepareFund/ReturnTargetInput";

const PrepareFund = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center">Prepare Retirement Fund</h1>
        <div className="lg:m-4">
          <Result />
          <div className=" shadow-lg p-4">
            <div className="grid grid-cols-2">
              <div>
                <ReturnTargetInput />
              </div>
              <div>
                <CurrentFundInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrepareFund;
