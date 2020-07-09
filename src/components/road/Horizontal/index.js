import React from "react";
import "./style.css";
import horizontal from "../../../Images/horizontal.png"

function Horizontal() {

  return (
    <div className='road'>
      <img src={horizontal} alt="road piece" className="square" />
    </div>
  );
}

export default Horizontal;