import React from "react";
import { motion } from "framer-motion";
//components
import ExpenditureInput from "../../components/calculateFund/ExpenditureInput";
import ExpenseRetirement from "../../components/calculateFund/ExpenseRetirement";
import Result from "../../components/calculateFund/Result";

const CalculateFund = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1,
          },
        },
      }}
    >
      <div className="lg:my-10">
        <div className="lg:m-4 m-0">
          <Result />
          <div className="shadow-lg p-4 rounded-b-lg bg-white">
            <ExpenditureInput />
            <ExpenseRetirement />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalculateFund;
