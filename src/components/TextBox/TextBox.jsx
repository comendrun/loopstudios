import React from "react";
import "./TextBox.css";

function TextBox({ children, additionalClasses }) {
  return (
    <div
      className={
        `text-box flex flex-col mx-auto  text-center gap-5 max-w-[375px] ` +
        additionalClasses
      }
    >
      {children}
    </div>
  );
}

export default TextBox;
