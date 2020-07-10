import React from "react";
import "../style.css";
import h_build4 from "../../../../Images/h_build4.png"
import grass from "../../../../Images/grass.png"

function HBuild4() {

  return (
    <div className='block'>
      <img src={h_build4} alt="road piece" className="build" />
      <img src={grass} alt="road piece" className="grass" />
    </div>
  );
}

export default HBuild4;