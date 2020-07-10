import React from "react";
import "../style.css";
import nexus7 from "../../../../Images/nexus7.png"
import grass from "../../../../Images/grass.png"

function Nexus7() {

  return (
    <div className='block'>
        <img src={grass} alt="road piece" className="grass" />
      <img src={nexus7} alt="road piece" className="build" />
    
    </div>
  );
}

export default Nexus7;