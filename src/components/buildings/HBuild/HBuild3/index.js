import React from "react";
import "../style.css";
import h_build3 from "../../../../Images/h_build3.png"
import grass from "../../../../Images/grass.png"

function HBuild3() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={h_build3} alt="road piece" className="build" />
      
    </div>
  );
}

export default HBuild3;