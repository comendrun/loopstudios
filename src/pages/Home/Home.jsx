import React from "react";
import Creations from "../../components/Creations/Creations";
import TextBox from "../../components/TextBox/TextBox";
import "./Home.css";

import { images } from "../../constants";

function Home() {
  return (
    <section className="home">
      <div className="max-w-[90%] mx-auto mb-16 mt-24 flex flex-col gap-10">
        <img
          src={images.interactiveMobile}
          alt="a young man having a virtual reality device on his eyes"
          className=""
        />
        <TextBox image="">
          <h2 className="headings">the leader in interactive VR</h2>
          <p>
            {" "}
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </TextBox>
      </div>

      <Creations />
    </section>
  );
}

export default Home;
