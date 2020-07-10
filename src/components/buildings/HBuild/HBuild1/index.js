import React from "react";
import "../style.css";
import h_build1 from "../../../../Images/h_build1.png"
import grass from "../../../../Images/grass.png"

function HBuild1() {

  return (
    <div className='block'>
       <img src={grass} alt="road piece" className="grass" />
      <img src={h_build1} alt="building piece" className="build" />
     
    </div>
  );
}

export default HBuild1;