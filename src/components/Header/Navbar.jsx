import React, { useState } from "react";
import { images } from "../../constants";
import NavMenuMobile from "./NavMenuMobile";

function Navbar() {
  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false);
  console.log(isMobileMenuShowing);
  return (
    <>
      <div className="navbar fixed top-0 right-0 left-0 z-50 mobile-view laptop:hidden bg-[rgba(0,0,0,0.25)]">
        <div className="top-section flex p-4 justify-between items-center z-50">
          <img src={images.logo} alt="logo" className=" w-36 cursor-pointer" />
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
        />

        {/* mobile-view div end ==> */}
      </div>

      <div className="navbar fixed top-0 right-0 left-0 z-50 desktop-view hidden laptop:flex px-20 py-10 items-center bg-[rgba(0,0,0,0.25)] backdrop-blur-md">
        <img src={images.logo} alt="logo" className=" w-56 cursor-pointer" />

        <ul className="nav-items-desktop flex ml-auto gap-10 text-white text-xl">
          {["about", "careers", "events", "products", "support"].map(
            (item, index) => {
              return (
                <li
                  key={`desktop-${item}-${index}`}
                  className="nav-item-desktop capitalize font-bold cursor-pointer py-3"
                >
                  <a href="#">{item}</a>
                </li>
              );
            }
          )}
        </ul>
      </div>
      {/* navbar div end ==> */}
    </>
  );
}

export default Navbar;
