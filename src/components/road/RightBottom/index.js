import React from "react";
import "../style.css";
import right_bottom from "../../../Images/right_bottom.png"

function RightBottom() {

  return (
    <div className='road'>
      <img src={right_bottom} alt="road piece" className="square" />
    </div>
  );
}

export default RightBottom;