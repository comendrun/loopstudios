import React from "react";
import "./SupportPage.css";
import TextBox from "../../components/TextBox/TextBox";
import { images } from "../../constants";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";
import { motion } from "framer-motion";

function SupportPage() {
  return (
    <section className="w-[90%] max-w-[600px] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-col laptop:items-center laptop:justify-center laptop:my-48 laptop:mx-auto laptop:max-w-[1000px]">
      <img
        src={images.heroDesktop}
        alt="a young man having a virtual reality device on his eyes"
        className="laptop:hidden"
      />
      <img
        src={images.heroDesktop}
        alt="a young man having a virtual reality device on his eyes"
        className="hidden laptop:flex  max-w-[1000px]"
      />
      <TextBox additionalClasses="laptop:bg-white relative laptop:py-16 laptop:max-w-[1000px] ">
        <h2 className="headings ">support us</h2>
        <p>
          You can easily support us by subscribing to our channels on social
          media. links are down below
        </p>

        <div className="social-media-container flex gap-4 mx-auto  w-full justify-center items-center laptop:mx-0 laptop:justify-center laptop:gap-6">
          <motion.a
            title="comendrun Github account"
            href="https://github.com/comendrun"
            target="_blank"
            className="laptop:"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <AiFillGithub size={60} />
          </motion.a>

          <motion.a
            title="Kamran Rouhani Linkedin account"
            href="https://www.linkedin.com/in/comendrun/"
            target="_blank"
            className="laptop:"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <AiFillLinkedin size={60} />
          </motion.a>

          <motion.a
            title="comendrun twitter account"
            href="https://twitter.com/comendrun"
            target="_blank"
            className="laptop:"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <AiFillTwitterCircle size={60} />
          </motion.a>

          <motion.a
            title="Kamran Rouhani personal website"
            href="https://comendrun.com/"
            target="_blank"
            className="laptop:"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <FaGlobeEurope size={60} />
          </motion.a>
        </div>
      </TextBox>
    </section>
  );
}

export default SupportPage;
