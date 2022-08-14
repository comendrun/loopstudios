import React from "react";
import Creation from "./Creation";
import "./Creations.css";
import data from "../../data";

function Creations() {
  const removeString = (expression) => {
    return expression.replace(/\"/g, "");
  };

  const allCreationsList = data.map((item, index) => {
    return (
      <Creation
        key={`${item.name + "-" + index}`}
        mobileImage={item.imageMobile}
        desktopImage={removeString(item.imageDesktop)}
        headingLineOne={item.title.lineOne}
        headingLineTwo={item.title.LineTwo}
      />
    );
  });
  return (
    <section className="text-center mx-auto flex flex-col justify-center items-center gap-8">
      <h2 className="headings">our creations</h2>

      {allCreationsList}

      <a
        href=""
        className="see-all-button border-2 border-black px-4 py-2 w-40 font-secondary uppercase tracking-[5px] mx-auto flex justify-center text-sm"
      >
        See All
      </a>
    </section>
  );
}

export default Creations;
