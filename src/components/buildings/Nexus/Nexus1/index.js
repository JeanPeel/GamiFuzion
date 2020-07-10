import React from "react";
import "../../style.css";
import nexus1 from "../../../../Images/nexus1.png"
import grass from "../../../../Images/grass.png"

function Nexus1() {

  return (
    <div className='block'>
       <img src={grass} alt="road piece" className="grass" />
      <img src={nexus1} alt="building piece" className="build" />
     
    </div>
  );
}

export default Nexus1;