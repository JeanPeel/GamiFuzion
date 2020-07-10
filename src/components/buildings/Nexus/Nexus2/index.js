import React from "react";
import "../style.css";
import nexus2 from "../../../../Images/nexus2.png"
import grass from "../../../../Images/grass.png"

function Nexus2() {

  return (
    <div className='block'>
       <img src={grass} alt="road piece" className="grass" />
      <img src={nexus2} alt="road piece" className="build" />
     
    </div>
  );
}

export default Nexus2;