import React from "react";
import "../style.css";
import h_build8 from "../../../../Images/h_build8.png"
import grass from "../../../../Images/grass.png"

function HBuild8() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={h_build8} alt="road piece" className="build" />

    </div>
  );
}

export default HBuild8;