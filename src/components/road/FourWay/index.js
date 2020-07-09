import React from "react";
import "./style.css";
import four_way from "../../../Images/four_way.png"

function FourWay() {

  return (
    <div className='road'>
      <img src={four_way} alt="road piece" className="square" />
    </div>
  );
}

export default FourWay;