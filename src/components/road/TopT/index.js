import React from "react";
import "../style.css";
import top_T from "../../../Images/top_T.png"

function TopT() {

  return (
    <div className='road'>
      <img src={top_T} alt="road piece" className="square" />
    </div>
  );
}

export default TopT;