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
          <a
            href="https://www.canva.com/design/DAFtmR4yuhw/SI_jD9rc0IUzxwF2leX_gA/view?utm_content=DAFtmR4yuhw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            download
          >
            <h1 className="Welcome-text text-[15px] font-code">My Rusme</h1>
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
          I&apos;As a Full Stack Developer, I bring a comprehensive skill set
          encompassing both front-end and back-end technologies. Proficient in
          HTML, CSS, JavaScript, Node.js, and a variety of databases, including
          MongoDB and SQL.
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
