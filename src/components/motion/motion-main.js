import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "./motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const MainMotion = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[20px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <a href="https://www.canva.com/design/DAFtyKTtm6k/hNh_FwmuiMQ8oRyncmbjxw/view?utm_content=DAFtyKTtm6k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" download>
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Rusme
            </h1>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="self-center text-center">
            <p className="font-semibold text-center">Hello, I'm</p>
            <h1 className="font-light">Maen Alnajar</h1>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;touched the stars, and saw the glorious light of a thousand
          suns! Now, blinded by this elegance, how could my purpose be
          anything... but dark...
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <img
          src="https://res.cloudinary.com/dmhvb05w3/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1698608691/mainIconsdark_qel3hz.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainMotion;
