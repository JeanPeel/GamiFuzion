import React from "react";
import "../style.css";
import nexus3 from "../../../../Images/nexus3.png"
import grass from "../../../../Images/grass.png"

function Nexus3() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={nexus3} alt="road piece" className="build" />
      
    </div>
  );
}

export default Nexus3;