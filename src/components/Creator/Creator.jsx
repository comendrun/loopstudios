import React, { useState } from "react";
import "./Creator.css";
// import comendrun from "../images/comendrun2.jpg";
import { createPortal } from "react-dom";

export default function Creator() {
  const [areLinksShown, setAreLinksShown] = useState(false);

  return createPortal(
    <section className="kamran-profile ">
      <div
        title="Github"
        className={`icon-container github  ${!areLinksShown && "hidden-icon"}`}
      >
        <a target="_blank" rel="noreferrer" href="https://github.com/comendrun">
          <i className="fa-brands fa-github-alt icons"></i>
        </a>
      </div>

      <div
        title="Personal Website"
        className={`icon-container personal  ${
          !areLinksShown && "hidden-icon"
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://comendrun.com/"
          className="text-white"
        >
          <i className="fa-solid fa-globe icons"></i>
        </a>
      </div>

      <div
        title="LinkedIn"
        className={`icon-container linkedin  ${
          !areLinksShown && "hidden-icon"
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/comendrun/"
        >
          <i className="fa-brands fa-linkedin icons"></i>
        </a>
      </div>

      <div
        id="comendrun"
        title="Click to expand"
        className="comendrun-img-container"
        onClick={() => setAreLinksShown((preBoolean) => !preBoolean)}
      >
        {/* <img className="comendrun-img" src={comendrun} alt="comendrun" /> */}
        comendrun
      </div>
    </section>,
    document.getElementById("creator")
  );
}

// make sure to add creator div to index.html
