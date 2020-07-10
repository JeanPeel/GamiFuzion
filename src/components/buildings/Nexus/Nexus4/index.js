import React from "react";
import "../../style.css";
import nexus4 from "../../../../Images/nexus4.png"
import grass from "../../../../Images/grass.png"

function Nexus4() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={nexus4} alt="road piece" className="build" />
      
    </div>
  );
}

export default Nexus4;