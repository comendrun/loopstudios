import React from "react";

function Creation({
  headingLineOne,
  mobileImage,
  desktopImage,
  headingLineTwo,
}) {
  return (
    <div
      className={
        `creation-container w-[90%] max-w-[654px] laptop:max-w-[256px] h-[33vw] max-h-[240px] laptop:max-h-[450px] border border-blue flex background-cover cursor-pointer overlay-hidden relative  ` +
        mobileImage +
        " " +
        desktopImage
      }
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] via-transparent to-[transparent]  object-cover"></div>
      <h2 className="headings text-2xl text-[rgba(255,255,255,0.8)] z-10 my-auto mb-10 mx-5 leading-6 text-left">
        {headingLineOne}
        <br />
        {headingLineTwo}
      </h2>
    </div>
  );
}

export default Creation;
