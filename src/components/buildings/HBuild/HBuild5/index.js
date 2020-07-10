import React from "react";
import "../style.css";
import h_build5 from "../../../../Images/h_build5.png"
import grass from "../../../../Images/grass.png"

function HBuild5() {

  return (
    <div className='block'>
            <img src={grass} alt="road piece" className="grass" />
      <img src={h_build5} alt="road piece" className="build" />

    </div>
  );
}

export default HBuild5;