import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
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
      className="bg-teal-normal h-screen pt-14 text-white"
    >
      <div className="text-center">
        <h1 className="px-2 text-3xl font-bold">Retirement Fund Calculator</h1>
        <p className="mt-10">quiet old age because expenses stay healthy</p>
      </div>
      <Link to="home">
        <motion.button
          animate={{ x: [-100, 10] }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="fixed bottom-10 bg-white p-4 rounded-full text-teal-normal right-10 material-icons"
        >
          arrow_forward
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Landing;
