import React from "react";
import "./style.css";
import filler from "../../../Images/filler.png"

function Filler() {

  return (
    <div className='road'>
      <img src={filler} alt="road piece" className="square" />
    </div>
  );
}

export default Filler;