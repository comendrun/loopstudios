import React from "react";
import "./Footer.css";

import { images } from "../../constants";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";

function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <section className="footer w-full h-full bg-black px-10 ">
      <div className="text-white py-14 mt-10 flex flex-col gap-10 laptop:flex-row laptop:justify-between max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 laptop:justify-start ">
          <Link to="/loopstudios">
            <img
              src={images.logo}
              alt="logo"
              className="z-10 w-36 mx-auto laptop:mx-0 laptop:w-48"
            />
          </Link>

          <ul className="all-nav-menu-links items-center justify-center flex flex-col px-4 gap-4 laptop:flex-row laptop:mx-0 laptop:p-0">
            {["about", "careers", "events", "products", "support"].map(
              (item, index) => {
                return (
                  <li
                    key={`nav-item-key-${index + "-" + item}`}
                    className="nav-item-desktop font-bold text-base capitalize cursor-pointer  "
                  >
                    <NavLink
                      to={`/loopstudios/${item}`}
                      className="hover:text-[rgba(255,255,255,1)]"
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div className="social-media-container flex gap-4 mx-auto  w-full justify-center items-center laptop:mx-0 laptop:justify-end laptop:gap-6">
            <motion.a
              title="comendrun Github account"
              href="https://github.com/comendrun"
              target="_blank"
              className="laptop:"
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <AiFillGithub size={40} />
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
              <AiFillLinkedin size={40} />
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
              <AiFillTwitterCircle size={40} />
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
              <FaGlobeEurope size={40} />
            </motion.a>
          </div>

          <div className="mx-auto text-[rgba(255,255,255,0.8)] laptop:text-xl">
            Ⓒ {fullYear} Loopstudios. All rights reserved.
          </div>
        </div>
      </div>

      <div class="attribution text-white w-max p-2  mx-auto flex flex-wrap flex-col tablet:flex-row text-center items-center text-xs">
        <p className="">
          Challenge by &nbsp;
          <a
            target="_blank"
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            className="text-[rgba(255,255,255,0.8)] hover:text-white font-bold text-sm laptop:text-lg "
          >
            Frontend Mentor
          </a>
          .{" "}
        </p>
        {/* <br className="tablet:hidden" /> */}
        <p className="">
          &nbsp; Coded by &nbsp;
          <a
            target="_blank"
            href="https://comendrun.com/"
            rel="noreferrer"
            className="text-[rgba(255,255,255,0.8)] hover:text-white font-bold text-sm laptop:text-lg "
          >
            Kamran Rouhani
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Footer;
