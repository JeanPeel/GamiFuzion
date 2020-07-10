import React from "react";
import "../style.css";
import h_build7 from "../../../../Images/h_build7.png"
import grass from "../../../../Images/grass.png"

function HBuild7() {

  return (
    <div className='block'>
      <img src={h_build7} alt="road piece" className="build" />
      <img src={grass} alt="road piece" className="grass" />
    </div>
  );
}

export default HBuild7;