import React from "react";
import "../style.css";
import horizontal from "../../../Images/horizontal.png"
import Pod3 from "../../../Images/pod3.png"

function StartPod2() {

  return (
    <div className='road'>
      <img src={horizontal} alt="road piece" className="square" />
      <img src={Pod3} alt="Flying Pod" className="podC" />
    </div>
  );
}

export default StartPod2;