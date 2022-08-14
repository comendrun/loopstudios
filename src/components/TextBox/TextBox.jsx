import React from "react";
import "./TextBox.css";

function TextBox({ children }) {
  return <div className="text-box flex flex-col mx-auto  text-center gap-5 max-w-[375px]">{children}</div>;
}

export default TextBox;
