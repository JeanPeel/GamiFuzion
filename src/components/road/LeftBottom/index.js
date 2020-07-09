import React from "react";
import "./style.css";
import left_bottom from "../../../Images/left_bottom.png"

function LeftBottom() {

  return (
    <div className='road'>
      <img src={left_bottom} alt="road piece" className="square" />
    </div>
  );
}

export default LeftBottom;