import React from "react";
import "../style.css";
import flipped2 from "../../../Images/flipped2.png"

function Flipped2() {

  return (
    <div className='road'>
      <img src={flipped2} alt="road piece" className="square" />
    </div>
  );
}

export default Flipped2;