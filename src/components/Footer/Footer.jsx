import React from "react";
import "./Footer.css";

import { images } from "../../constants";

function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <section className="footer w-full h-full bg-black ">
      <div className="text-white py-14 my-10 flex flex-col gap-10 laptop:flex-row laptop:justify-between max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-10 laptop:justify-start ">
          <img
            src={images.logo}
            alt="logo"
            className="z-10 w-36 mx-auto laptop:mx-0 laptop:w-48"
          />

          <ul className="all-nav-menu-links items-center justify-center flex flex-col px-4 gap-4 laptop:flex-row laptop:mx-0 laptop:p-0">
            {["about", "careers", "events", "products", "support"].map(
              (item, index) => {
                return (
                  <li
                    key={`nav-item-key-${index + "-" + item}`}
                    className="font-bold text-base capitalize  "
                  >
                    {item}
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div className="social-media-container flex gap-4 mx-auto  w-full justify-center items-center laptop:mx-0 laptop:justify-end laptop:gap-6">
            <a href="" className="laptop:">
              <img
                src={images.facebook}
                alt="facebook"
                className="laptop:w-8"
              />
            </a>
            <a href="" className="laptop:">
              <img src={images.twitter} alt="twitter" className="laptop:w-8" />
            </a>
            <a href="" className="laptop:">
              <img
                src={images.pinterest}
                alt="pinterest"
                className="laptop:w-8"
              />
            </a>
            <a href="" className="laptop:">
              <img
                src={images.instagram}
                alt="instagram"
                className="laptop:w-8"
              />
            </a>
          </div>

          <div className="mx-auto text-[rgba(255,255,255,0.8)] laptop:text-xl">
            Ⓒ {fullYear} Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
