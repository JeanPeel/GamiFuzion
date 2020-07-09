import React from "react";
import "./style.css";
import vertical from "../../../Images/vertical.png"

function Vertical() {

  return (
    <div className='road'>
      <img src={vertical} alt="road piece" className="square" />
    </div>
  );
}

export default Vertical;