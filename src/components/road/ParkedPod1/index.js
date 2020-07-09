import React from "react";
import "./style.css";
import U_turn from "../../../Images/U_turn.png"
import Pod4 from "../../../Images/pod4.png"

function ParkedPod1() {

  return (
    <div className='road'>
      <img src={U_turn} alt="road piece" className="square" />
      <img src={Pod4} alt="Flying Pod" className="pod" />
    </div>
  );
}

export default ParkedPod1;