import React from "react";
import "../style.css";
import h_build6 from "../../../../Images/h_build6.png"
import grass from "../../../../Images/grass.png"

function HBuild6() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={h_build6} alt="road piece" className="build" />
      
    </div>
  );
}

export default HBuild6;