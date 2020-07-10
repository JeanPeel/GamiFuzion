import React from "react";
import "../style.css";
import U_turn2 from "../../../Images/U_turn2.png"
import Pod4 from "../../../Images/pod4.png"

function ParkedPod2() {

  return (
    <div className='road'>
      <img src={U_turn2} alt="road piece" className="square" />
      <img src={Pod4} alt="Flying Pod" className="podA" />
    </div>
  );
}

export default ParkedPod2;