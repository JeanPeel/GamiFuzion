import React from "react";
import "../style.css";
// import horizontal from "../../../Images/horizontal.png"
import Pod1 from "../../../Images/pod1.png"
import flipped2 from "../../../Images/flipped2.png"

function StartPod4() {

  return (
    <div className='road'>
      <img src={flipped2} alt="road piece" className="square" />
      <img src={Pod1} alt="Flying Pod" className="podC" />
    </div>
  );
}

export default StartPod4;