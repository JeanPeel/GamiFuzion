import React from "react";
import "../style.css";
import left_T from "../../../Images/left_T.png"

function LeftT() {

  return (
    <div className='road'>
      <img src={left_T} alt="road piece" className="square" />
    </div>
  );
}

export default LeftT;