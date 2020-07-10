import React from "react";
import "../../style.css";
import nexus6 from "../../../../Images/nexus6.png"
import grass from "../../../../Images/grass.png"

function Nexus6() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={nexus6} alt="road piece" className="build" />
      
    </div>
  );
}

export default Nexus6;