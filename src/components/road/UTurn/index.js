import React from "react";
import "./style.css";
import U_turn from "../../../Images/U_turn.png"

function UTurn() {

  return (
    <div className='road'>
      <img src={U_turn} alt="road piece" className="square" />
    </div>
  );
}

export default UTurn;