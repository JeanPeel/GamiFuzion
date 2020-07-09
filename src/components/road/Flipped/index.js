import React from "react";
import "./style.css";
import flipped from "../../../Images/flipped.png"

function Flipped() {

  return (
    <div className='road'>
      <img src={flipped} alt="road piece" className="square" />
    </div>
  );
}

export default Flipped;