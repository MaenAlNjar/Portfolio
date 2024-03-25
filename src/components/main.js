import React from "react";
import MainMotion from './motion/motion-main'
const Main = () => {
  return (
    <div className="relative flex items-center justify-center h-screen" 
    id="Main">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-10 z-[-4] object-cover "
      >
        <source
          src="https://res.cloudinary.com/dmhvb05w3/video/upload/v1698604209/public_blackhole_yygtmn.webm"
          type="video/webm"
        />
      </video>
      <MainMotion />
    </div>
  );
};

export default Main;