import React from "react";
import "../style.css";
import horizontal from "../../../Images/horizontal.png"
import Pod1 from "../../../Images/pod1.png"

function StartPod1() {

  return (
    <div className='road'>
      <img src={horizontal} alt="road piece" className="square" />
      <img src={Pod1} alt="Flying Pod" className="podB" />
    </div>
  );
}

export default StartPod1;