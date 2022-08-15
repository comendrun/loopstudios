import React from "react";
import Creation from "./Creation";
import "./Creations.css";
import data from "../../data";

function Creations() {
  const allCreationsList = data.map((item, index) => {
    return (
      <Creation
        key={`${item.name + "-" + index}`}
        mobileImage={item.imageMobile}
        desktopImage={item.imageDesktop}
        headingLineOne={item.title.lineOne}
        headingLineTwo={item.title.LineTwo}
      />
    );
  });
  return (
    <>
      <h2 className="headings laptop:order-0 laptop:m-0 text-left laptop:ml-5">
        our creations
      </h2>

      <div className="order-1 w-full mx-auto flex flex-col justify-center items-center laptop:order-2 col-span-2 laptop:grid laptop:grid-cols-4 gap-y-7">
        {allCreationsList}
      </div>

      <div className=" order-2 laptop:order-1  laptop:ml-auto laptop:mr-5">
        <a
          href="#all-creations"
          className="see-all-button border-2 border-black px-4 py-2 w-40 font-secondary uppercase tracking-[5px] mx-auto flex justify-center text-sm hover:text-white hover:bg-black ease-in-out duration-200"
        >
          See All
        </a>
      </div>
    </>
  );
}

export default Creations;
