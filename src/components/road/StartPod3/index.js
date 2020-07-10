import React from "react";
import "../style.css";
// import horizontal from "../../../Images/horizontal.png"
import Pod3 from "../../../Images/pod3.png"
import flipped2 from "../../../Images/flipped2.png"

function StartPod3() {

  return (
    <div className='road'>
      <img src={flipped2} alt="road piece" className="square" />
      <img src={Pod3} alt="Flying Pod" className="podB" />
    </div>
  );
}

export default StartPod3;