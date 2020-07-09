import React from "react";
import "./style.css";
import left_top from "../../../Images/left_top.png"

function LeftTop() {

  return (
    <div className='road'>
      <img src={left_top} alt="road piece" className="square" />
    </div>
  );
}

export default LeftTop;