import React, { useState } from "react";
import { createPortal } from "react-dom";
import { images } from "../../constants";

function NavMenuMobile({ isMobileMenuShowing, closeMenuHandler }) {
  if (!isMobileMenuShowing) return null;
  return createPortal(
    <div className="menu-itself-container h-[100vh] w-full fixed top-0 right-0 left-0 bottom-0 bg-black text-white z-50 ">
      <div className="nav-menu-top-logo-container justify-between p-4 flex flex-row items-center">
        <img src={images.logo} alt="logo" className=" w-36" />
        <img
          src={images.closeIcon}
          alt="close-menu"
          className="cursor-pointer"
          onClick={closeMenuHandler}
        />
      </div>

      <div className="nav-menu-list-items-container h-[90vh] flex items-center">
        <ul className="all-nav-menu-links items-start justify-start flex flex-col px-4 gap-4">
          {["about", "careers", "events", "products", "support"].map(
            (item, index) => {
              return (
                <li
                  key={`nav-item-key-${index + "-" + item}`}
                  className="uppercase cursor-pointer text-2xl duration-200 ease-out text-[rgba(255,255,255,0.8)]"
                >
                  <a href="" className="hover:text-[rgba(255,255,255,1)]">
                    {item}
                  </a>
                </li>
              );
            }
          )}
        </ul>
        {/* nav-menu-list-items-container div end ==> */}
      </div>
      {/* menu-itself-container div ==> */}
    </div>,
    document.getElementById("portal")
  );
}

export default NavMenuMobile;
