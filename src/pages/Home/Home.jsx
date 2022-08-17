import React from "react";
import Creations from "../../components/Creations/Creations";
import TextBox from "../../components/TextBox/TextBox";
import "./Home.css";
import Header from "../../components/Header/Header";

import { images } from "../../constants";

function Home() {
  return (
    <>
      <Header />
      <section className="home max-w-[750px] laptop:max-w-[1200px] mx-auto">
        <div className="max-w-[90%] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-row laptop:items-center laptop:justify-center laptop:my-48 laptop:mx-auto ">
          <img
            src={images.interactiveMobile}
            alt="a young man having a virtual reality device on his eyes"
            className="laptop:hidden"
          />
          <img
            src={images.interactiveDesktop}
            alt="a young man having a virtual reality device on his eyes"
            className="hidden laptop:flex max-w-[750px]"
          />
          <TextBox additionalClasses="laptop:bg-white relative laptop:-ml-56 laptop:-mb-72 laptop:pl-20 laptop:py-16  laptop:max-w-[45rem] laptop:w-[45rem] ">
            <h2 className="headings">
              the leader in <br /> interactive VR
            </h2>
            <p>
              {" "}
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </TextBox>
        </div>

        <div className="text-center mx-auto flex flex-col justify-center items-center gap-8 laptop:grid laptop:justify-center grid-cols-2 laptop:mb-40 ">
          <Creations />
        </div>
      </section>
    </>
  );
}

export default Home;
