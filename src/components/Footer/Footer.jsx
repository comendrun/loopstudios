import React from "react";
import "./Footer.css";

import { images } from "../../constants";

function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <section className="footer w-full h-full bg-black text-white py-10 my-10 flex flex-col gap-10">
      <img src={images.logo} alt="logo" className="z-10 w-36 mx-auto " />
      <ul className="all-nav-menu-links items-center justify-center flex flex-col px-4 gap-4">
        {["about", "careers", "events", "products", "support"].map(
          (item, index) => {
            return (
              <li
                key={`nav-item-key-${index + "-" + item}`}
                className="font-bold text-base capitalize "
              >
                {item}
              </li>
            );
          }
        )}
      </ul>

      <div className="social-media-container flex gap-4 mx-auto  w-full justify-center items-center">
        <a href="" className="">
          <img src={images.facebook} alt="" className="" />
        </a>
        <a href="" className="">
          <img src={images.twitter} alt="" className="" />
        </a>
        <a href="" className="">
          <img src={images.pinterest} alt="" className="" />
        </a>
        <a href="" className="">
          <img src={images.instagram} alt="" className="" />
        </a>
      </div>

      <div className="mx-auto text-[rgba(255,255,255,0.8)]">
        Ⓒ {fullYear} Loopstudios. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
