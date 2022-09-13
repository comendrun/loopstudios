import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import NavMenuMobile from "./NavMenuMobile";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false);

  return (
    <>
      <nav
        className={`navbar fixed top-0 right-0 left-0 z-50 mobile-view laptop:hidden bg-[rgba(0,0,0,0.10)] backdrop-blur-md `}
      >
        <div className="top-section flex p-4 justify-between items-center z-50">
          <Link to="/loopstudios">
            <img
              src={images.logo}
              alt="logo"
              className=" w-36 cursor-pointer"
            />
          </Link>
          <img
            src={images.hamburgerIcon}
            alt="hamburger"
            className="cursor-pointer"
            onClick={() => setIsMobileMenuShowing(true)}
          />
        </div>

        <NavMenuMobile
          closeMenuHandler={() => setIsMobileMenuShowing(false)}
          isMobileMenuShowing={isMobileMenuShowing}
          navLinkOnClickHandler={() => setIsMobileMenuShowing(false)}
        />

        {/* mobile-view div end ==> */}
      </nav>

      <nav
        className={`navbar fixed top-0 right-0 left-0 z-50 desktop-view hidden laptop:flex px-20 py-7 items-center bg-[rgba(0,0,0,0.25)] backdrop-blur `}
      >
        <Link to="/loopstudios">
          <img src={images.logo} alt="logo" className=" w-56 cursor-pointer" />
        </Link>

        <ul className="nav-items-desktop flex ml-auto gap-10 text-white text-xl">
          {["about", "careers", "events", "products", "support"].map(
            (item, index) => {
              return (
                <li
                  key={`desktop-${item}-${index}`}
                  className="nav-item-desktop capitalize font-bold cursor-pointer py-3 "
                >
                  <NavLink to={`/loopstudios/${item}`} className="">
                    {item}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      </nav>
      {/* navbar div end ==> */}
    </>
  );
}

export default Navbar;

// bg-[rgba(0,0,0,0.25)] backdrop-blur-md
