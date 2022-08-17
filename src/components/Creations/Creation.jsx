import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Creation({
  headingLineOne,
  mobileImage,
  desktopImage,
  headingLineTwo,
  creationId,
}) {
  return (
    <>
      {" "}
      <Link to={`/loopstudios/product/${creationId}`} className="w-full">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className={
            `creation-container w-[90%] max-w-[654px] laptop:max-w-[256px] h-[33vw] max-h-[240px] laptop:max-h-[450px]  flex background-cover cursor-pointer overlay-hidden relative mx-auto text-[rgba(255,255,255,0.8)]  hover:text-black ` +
            mobileImage +
            " " +
            desktopImage
          }
        >
          <div className="absolute w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] via-transparent to-[transparent]  object-cover hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:to-[rgba(255,255,255,0.7)]"></div>

          <h2 className="headings text-2xl  z-10 my-auto mb-4 mx-4 laptop:mx-6 laptop:text-3xl font-light leading-6 text-left ">
            {headingLineOne}
            <br />
            {headingLineTwo}
          </h2>
        </motion.div>
      </Link>
    </>
  );
}

export default Creation;
