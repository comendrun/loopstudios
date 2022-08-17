import React from "react";
import "./CareersPage.css";
import TextBox from "../../components/TextBox/TextBox";
import { images } from "../../constants";

function CareersPage() {
  return (
    <section className="max-w-[90%] mx-auto mb-16 mt-24 flex flex-col gap-10 laptop:flex-row laptop:items-center laptop:justify-center laptop:my-48 laptop:mx-auto ">
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
        <h2 className="headings">About us</h2>
        <p>
          {" "}
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </TextBox>
    </section>
  );
}

export default CareersPage;
