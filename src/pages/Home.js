import React from "react";

//components
import AppBar from "../components/AppBar";
import CalculateFund from "./home/CalculateFund";
import PrepareFund from "./home/PrepareFund";
import { motion } from "framer-motion";

const Home = () => {
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
            delay: 0.4,
          },
        },
      }}
    >
      <AppBar />
      <div className="lg:w-2/4 p-4 mx-auto">
        <CalculateFund />
        <PrepareFund />
        <div className="flex justify-center">
          <button className="bg-teal-dark px-4 py-2 rounded-md text-white flex items-center">
            <h1 className="material-icons mx-2">save</h1>
            <h1>Save</h1>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
