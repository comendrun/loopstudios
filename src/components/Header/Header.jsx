import React, { useRef, useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import "./Header.css";
import { images } from "../../constants";
import ScreenContext from "../../context/ScreenContext";

function Header() {
  const [headerHeight, setHeaderHeight] = useState(null);
  const header = useRef();
  const { scrollTopValue, scrollingValue } = useContext(ScreenContext);

  // scrollingValue(headerHeight);

  useEffect(() => {
    setHeaderHeight(header.current?.clientHeight);
  }, [header]);

  console.log(scrollTopValue);
  return (
    <section
      ref={header}
      className={`header-section min-h-[100vh] min-w-[100vw]  flex flex-col bg-cover bg-center bg-no-repeat bg-hero-mobile laptop:bg-hero-desktop  `}
      style={{}}
    >
      <Navbar />

      <div className="w-[90%] border-2 border-white uppercase m-auto text-white p-3 text-3xl laptop:text-6xl max-w-[650px] laptop:mx-20 laptop:p-5">
        immersive <br /> experiences
        <div className="laptop:flex laptop:gap-3">
          <p>that</p>
          <p>deliver</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
