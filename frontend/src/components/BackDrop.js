import "./BackDrop.css";
import React from "react";

function BackDrop({ show, click }) {
  return show && <div className="backdrop" onClick={click}></div>;
}

export default BackDrop;
