import React from "react";
import "../style.css";
import h_build2 from "../../../../Images/h_build2.png"
import grass from "../../../../Images/grass.png"

function HBuild2() {

  return (
    <div className='block'>
      <img src={h_build2} alt="road piece" className="build" />
      <img src={grass} alt="road piece" className="grass" />
    </div>
  );
}

export default HBuild2;